import isImage from './components/isImage';
import isValidate from './components/isValidate';
import isGetFileJson from './components/isGetFileJson';
import createBoxByStyle from './components/createBoxByStyle';
import rightEdit from './components/right-edit';

//element
import element from './components/element/element';

//keybinding
import * as keyBinding from './components/keyBinding.js';

jQuery.fn.selectText = function(){
	var doc = document;
	var element = this[0];
	console.log(this, element);
	if (doc.body.createTextRange) {
		var range = document.body.createTextRange();
		range.moveToElementText(element);
		range.select();
	} else if (window.getSelection) {
		var selection = window.getSelection();        
		var range = document.createRange();
		range.selectNodeContents(element);
		selection.removeAllRanges();
		selection.addRange(range);
	}
};

$(document).ready(function() {
	let hash = Math.random().toString(36).substring(7);
	window.object = {
		"tag" : "div",
		"category" : "grid",
		"attr" : {
			"class" : "column",
			"style" : {}
		},
		"hash" : hash,
		"content" : []
	};

	var
		w              = window,
		ele            = new element,
		img            = new isImage,
		valid          = new isValidate,
		getFileJson    = new isGetFileJson,
		createBoxStyle = new createBoxByStyle,
		rightEd = new rightEdit,

	addTextAble = function(el, obj) {
		$('.base-text-advance').hide();
		let arr = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'small', 'span', 'strong', 'b', 'em', 'i', 'button', "li", "code"];
		if(arr.indexOf($(el).prop('tagName').toLowerCase()) > -1) {
			$(el).attr('contenteditable', 'true');
			$(el).keyup(function(e) {
				obj.content = e.target.innerText;
				w.objectJson.saveLocalStorage();
			});
			$('.base-text-advance').show();
			$('.edit-base > #text').show();
			$(el).focus();
			$(el).dblclick(function(e) {
				var cell = e.target;
				var range, selection;
				if (document.body.createTextRange) {
					range = document.body.createTextRange();
					range.moveToElementText(cell);
					range.select();
				} else if (window.getSelection) {
					selection = window.getSelection();
					range = document.createRange();
					range.selectNodeContents(cell);
					selection.removeAllRanges();
					selection.addRange(range);
				}
			});
		} else {
			$('.edit-base > #text').hide();
		}
	},
	editELe = function(element) {
		$('.right').show();
		$('.right .selected').removeClass('selected');
		$('.right .assignable .base-text-item').val('');

		let box      = $('.right .edit-box'); box.empty();
		let category = $(element).data('category');
		let index;
		if ($(element).parent().hasClass('wrap')) {
			index = $(element).parent().index();
		} else {
			index = $(element).index();
		}
		w.el  = element
		w.obj = w.objectJson.getParent(el).content[index];
		addTextAble(w.el,w.obj);
		ele.fillStyleInBox();
		ele.editBaseStyle();
		rightEd.edit(w.el, w.obj);
		rightEd.fillStyleInRight();

		$.ajax({
			url: "./frontend_asset/json/categories/" + category + ".json",
			dataType: "json",
			success: (response) => {
				createBoxStyle.create(response, w.el, box);
				ele.editElement(w.el, w.obj);
				img.readImage(w.el, w.obj);
			}, 
			error : (response) => {
				console.log("error : ",response);
			}
		});
	},
	findHash = function(e) {
		let hash;
		if($(e.target).data('category') == undefined) {
			$.each($(e.target).parents(), (k,v) => {
				if($(v).attr('data-category')) {
					editELe(v);
					hash = $(v).data('hash');
					$(v).addClass('active');
					return false;
				}
			});
		} else {
			hash = $(e.target).data('hash');
			editELe(e.target);
			$(e.target).addClass('active');
		}
		return hash;
	},
	removeFocus = function() {
		w.el  = null;
		w.obj = null;
		$('.left #tree-data .active').removeClass('active');
		$('.right').hide();
		$('.content .active').removeClass('active');
		$('[contenteditable="true"]').removeAttr('contenteditable');
		window.getSelection().removeAllRanges();
	},
	removeElAndObj = function(e) {
		let hash = $(e.target).parent().data('hash');
		let el   = document.querySelectorAll(`#content [data-hash="${hash}"]`)[0];
		ele.removeNodeObject(el);
		$(e.target).parent().remove();
		removeFocus();
		e.stopPropagation();
	},
	init = function() {
		getFileJson.getJsonChilds();
		keyBinding.keyDelete();
			// edit page
			$('#edit').click(function(){
				$('.left').show();
				$('.content').removeClass('sourcepreview');
				init();
			});

			$('.right').hide();
			$('.lyrow input').bind('keyup', valid.validateInputGrid);

			//click element
			$('body').unbind().on('click', ".content .box, .content .row, .content .grid-table, .grid-tbody, .grid-tr, .grid-td", function(e) {
				removeFocus();
				let hash = findHash(e);
				$('.left #tree-data .active').removeClass('active');
				let el = document.querySelectorAll(`#tree-data [data-hash="${hash}"]`)[0];
				$(el).addClass('active');
				var y = $('.left').scrollTop();
				if ($('.left .tab-tree-data').hasClass('active')) {
					$('.left').animate({ scrollTop: el.offsetTop - 150 }, 500);
				}
				$.each($(el).parents(), (k,v) => {
					if($(v).find('>.tree-label').text() == 'Frame'){
						$(v).children().slideDown();
						$(v).find('> .tree-angle').removeClass('fa-angle-right');
						$(v).find('> .tree-angle').addClass('fa-angle-down');
					}
				});
				$.each($(el).parents(), (k,v) => {
					if($(v).find('>.tree-label').text() == 'Frame') {
						return false;
					} else {
						$(v).children().slideDown();
						$(v).find('> .tree-angle').removeClass('fa-angle-right');
						$(v).find('> .tree-angle').addClass('fa-angle-down');
					}
				});
				CKEDITOR.instances['editor-ck'].setData(w.el.innerHTML);
				e.stopPropagation();
			});

			// click tree data find same element
			$('body').on('click', '.left #tree-data div', function(e) {
				if($(this).parent().attr('id') == 'tree-data') return false;
				let hash = $(this).data('hash');
				let el = document.querySelectorAll(`#content [data-hash="${hash}"]`)[0];
				$('.left #tree-data .active').removeClass('active');
				$('#content .active').removeClass('active');
				$(this).addClass('active');
				$(el).addClass('active');
				$('.content').animate({ scrollTop: el.offsetTop - 150 }, 500);
				editELe(el);
				e.stopPropagation();
			});

			// delete in tree data and delete element and obj
			$('body').on('click', '.left #tree-data .fa-trash', function(e) {
				removeElAndObj(e);
			});

			// out focus
			$('body').on('click', '#content', function(e) {
				removeFocus();
				$('.colorpicker').hide();
			});
		};
		init();
		CKEDITOR.replace('editor-ck');
	});