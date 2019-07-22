import * as keyBinding from './components/keyBinding.js';

$(document).ready(function() {
	var w = window;
	
	//hover item in content
	hoverItemInContent();

	$('#edit').click(function(){
		hoverItemInContent();
		$('.content .row').css('outline', '1px dotted #bbb9b9');
		$('#content').css('width', 'calc(100% - 340px)');
	});

	// privew page
	$('#preview').click(function(e){
		$('.left').hide();
		$('.right').hide();
		$('.content').addClass('sourcepreview');
		$('.content .active').removeClass('active');
		$('body').off('click');
		$('body').off('mouseover mouseout');
		$('.content .row').css('outline', 'none');
		$('#content').css('width', '100%');
	});

	// delete all element created in page
	$('#delete').click(function(){
		if(confirm("Are you sure?")) {
			$('#sortable-area2').empty();
			$('.edit-box').empty();
			$('.left #tree-data').empty();
			$('.right').hide();
			$('.left .active').removeClass('active');
			$('.left .nav-tabs .tab-item-drag').find('a').click();
			object.content = [];
			localStorage.removeItem("object");
		}
	});

	//hover tree data find same element
	$('body').on('mouseover', '.left #tree-data div', function(e) {
		let hash = $(this).data('hash');
		let el   = document.querySelectorAll(`#content [data-hash="${hash}"]`)[0];
		$(this).css('outline', '1px solid #ca8200');
		$(this).css('transition', '.3s');
		if(w.el != el) {
			$(el).css('outline', '2px solid #66afe9');
		}
		e.stopPropagation();
	});

	//hover tree data find same element
	$('body').on('mouseout', '.left #tree-data div', function(e) {
		let hash = $(this).data('hash');
		let el = document.getElementById('content').querySelectorAll(`[data-hash="${hash}"]`)[0];
		$(this).css('outline', 'none');
		$(this).css('transition', '.3s');
		if(w.el != el) {
			$(el).css('outline', '');
		}
		e.stopPropagation();
	});

	$('body').on('click', '.left #tree-data .tree-angle', function(e) {
		let tag = $(e.target).parent().find('>div');
		$(e.target).removeClass('fa-angle-down');
		$(e.target).removeClass('fa-angle-right');
		if(tag.is(':hidden')) {
			$(e.target).addClass('fa-angle-down');
			tag.slideDown('fast');
		} else {
			$(e.target).addClass('fa-angle-right');
			tag.slideUp('fast');
		}
		
	});

	// show code css
	$('.right .nav-tabs li.tab-code').click( function() {
		$('.right #code-edit .css').empty();
		if($(w.el).attr('style') != undefined) {
			$('.right #code-edit .css').html(`{\n${$(w.el).attr('style').replace(/; /gi, ';\n')}\n}`);
			hljs.highlightBlock($('.right #code-edit .css')[0]);
		}
	})

	// when click btn ok in ckeditor
	$('#md-ckeditor #editor-confirmOk').click(function() {
		let arrPatern = ['button'];
		let content = CKEDITOR.instances['editor-ck'].getData();
		if(arrPatern.indexOf($(w.el).prop('tagName').toLowerCase()) > -1) {
			$(w.el).html($(content).text());
			w.obj.content = $(content).text();
		} else {
			$(w.el).html(content);
			w.obj.content = content;
		}
		w.objectJson.saveLocalStorage();
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
		$(w.el).children().css({'padding' : '0', 'margin' : '0'});
		$('#md-ckeditor').modal('hide');
	});

	// button break line for button and link
	$('body').on('click', '.right .new-line', function(e) {
		if($(w.el).css('display') != 'block') {
			$(e.target).addClass('selected')
			w.obj.attr.style['display'] = 'block';
			$(w.el).css('display', 'block');
		} else {
			$(e.target).removeClass('selected');
			delete w.obj.attr.style['display'];
			$(w.el).css('display', 'inline-block');
		}
	});

	viewMore('#collapse-my-template');
	viewMore('#collapse-template-public');

	// view more
	function viewMore(box) {
		let limit = 5;
		$.each($(box).find('div'), (k,v)=>{
			if (k>=limit) {
				$(v).addClass('v-more');
				$(v).css('display', 'none');
			}
		});
		if($(box).find('div').length > limit) {
			$(box).append('<a href="#" class="view-more">Xem thêm</a>');
		}
		$('a.view-more').click(function() {
			if($(box).find('a.view-more').html() == "Xem thêm") {
				$(box).find('a.view-more').html("Thu gọn");
			} else {
				$(box).find('a.view-more').html("Xem thêm");
			}
			$(box).find('.v-more').slideToggle();
		})
	}

	function hoverItemInContent() {
		$('body').on('mouseover', '.content .box, .content .row, .content .column', function(e) {
			if(w.el != e.target) {
				$(e.target).css('outline', '2px solid #66afe9');
			}
		});

		$('body').on('mouseout', '.content .box, .content .row, .content .column', function(e) {
			$(e.target).css('outline', '');
		});
	}
});