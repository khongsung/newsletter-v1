import objectJson from '../objectJson/objectJson';
import sortableElement from './sortableElement';
import rightEdit from '../right-edit';

function element() {};

var w = window;
var rightEd = new rightEdit();
w.objectJson = new objectJson();

element.prototype = new sortableElement;

element.prototype.removeNodeObject = function(el) {
	let objParent = w.objectJson.getParent(el);
	let index     = $(el).index();
	objParent.content.splice(index, 1);
	$(el).remove();
	if(w.el == el) {
		delete w.el;
		delete w.obj;
	}
	w.objectJson.saveLocalStorage();
};

element.prototype.editElement = function(el, obj) {
	$.each($('.edit-box select, .edit-box input'), (k,v) => {
		$(v).on({
			keyup: edit,
			change: edit
		});
	});

	function edit() {
		let name  = $(this).attr('name');
		let value = $(this).val();
		if($(this).attr('type') == 'number') value = value + 'px';
		if($(this).data('type') == "attr") {
			$(el).attr(name, value);
			$(this).val() == "" ? delete obj.attr[name] : obj.attr[name] = value;
		}else {
			$(el).css(name, value);
			$(this).val() == "" ? delete obj.attr.style[name] : obj.attr.style[name] = value;
		}
	}
};

element.prototype.editBaseStyle = function(el, obj) {
	let tagName = $(w.el).prop('tagName').toLowerCase();
	$('.right .new-line').hide();
	if(tagName == 'button' || tagName == 'a' || tagName == 'img') {
		$('.right .new-line').show();
	}
	$('.right .selectable .base-text-item').unbind().click(function(e) {
		if($(this).parent().hasClass('select-one')) {
			if($(this).hasClass('selected')) {
				$(this).toggleClass('selected');
			} else {
				$(this).parent().find('.selected').removeClass('selected');
				$(this).addClass('selected');
			}				
		} else {
			$(this).toggleClass('selected');
		}
		let name  = $(this).data('attr-name');
		let value = $(this).data('attr-value');
		if($(this).hasClass('selected')) {
			$(w.el).css(name, value);
			w.obj.attr.style[name] = value;
		} else {
			$(w.el).css(name, '');
			delete w.obj.attr.style[name];
		}
		e.stopPropagation();
	});

	$('.right .assignable .base-text-item').on({
		keyup: edit,
		change: edit
	});

	function edit() {
		let name  = $(this).attr('name');
		let value = $(this).val();
		if($(this).hasClass('px')) value = value + 'px';
		$(w.el).css(name, value);
		$(this).val() == "" ? delete w.obj.attr.style[name] : w.obj.attr.style[name] = value;
	};

	$.each($('.right .colorpkr'), (k,v) => {
		let style = $(v).data('attr-name');
		colorpkr(v, style, false);
	});

	$('.right .colorpkr').click(function(e){
		let style = $(e.target).data('attr-name');
		let idElement = $(e.target).attr('id');
		if(idElement == 'colorpkr-font' ||  idElement == 'colorpkr-border') {
			colorpkr(e.target, style, true);
		} else {
			colorpkr(e.target, style, false);
		}
		rightEd.highlightLabel(e.target);
	});

	function colorpkr(div, styleName, none) {
		$(div).ColorPicker({
			isNone: none,
			onShow: function (colpkr) {
				$(colpkr).fadeIn(400);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(400);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$(div).css('background', '#' + hex);
				$(w.el).css(styleName, '#' + hex);
				w.obj.attr.style[styleName] = '#' + hex;
				if($(div).hasClass('field-color-picker')) {
					$(div).siblings('.input-holder').find('input').val('#' + hex);
				}
			}, 
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).ColorPickerHide();
			},
			onCancle: function(el) {
				$(el).ColorPickerHide();
				$(w.el).css(styleName, '');
				delete w.obj.attr.style[styleName];
				if($(div).hasClass('field-color-picker')) {
					$(div).siblings('.input-holder').find('input').val('none');
				}
			}
		});
	}
};

element.prototype.fillStyleInBox = function() {
	$('.right input[type=number], .right input[type=text]').val(''); //reset input
	$('.right input').blur(); //remove focus
	let style = window.getComputedStyle(w.el);
	// w.objectCode.content = [];
	$.each($('.right .selectable .base-text-item'), (k,v) => {
		let attr          = $(v).data('attr-name');
		let value         = $(v).data('attr-value');
		let response      = style.getPropertyValue(attr);
		let formatRespone = response.substring(0, response.indexOf(' ')+1);

		if(response == value || formatRespone == value) {
			$(v).addClass('selected');
		}
	});

	$.each($('.right .assignable .base-text-item'), (k,v) => {
		let attr  = $(v).attr('name');
		let value = style.getPropertyValue(attr);
		value == "normal" ? value = 0 : value = value.replace('px','');
		$(v).val(value);
	});

	$.each($('.right .base-text-item.colorpkr'), (k,v) => {
		let attr = $(v).data('attr-name');
		let response      = style.getPropertyValue(attr);
		let formatRespone = response.substring(0, response.indexOf(')')+1);
		$(v).css('background', formatRespone);

		//update
		if ($(v).hasClass('field-color-picker')) {
			$(v).siblings('.input-holder').find('input').val(formatRespone);
		}

		//fill into color picker
		let replaceLetter = formatRespone.replace(/[^0-9]/g,' ');
		let arr = replaceLetter.trim().split(" ");
		arr = arr.filter((i) => {return parseInt(i)>=0});
		let color = {r:arr[0], g:arr[1], b:arr[2]};
		setTimeout(function() {$(v).ColorPickerSetColor(color);}, 10);
	});

	$('.right #code-edit .css').empty();
	if($(w.el).attr('style') != undefined) {
		$('.right #code-edit .css').html(`{\n${$(w.el).attr('style').replace(/; /gi, ';\n')}\n}`);
		hljs.highlightBlock($('.right #code-edit .css')[0]);
	}
};

function findNameSytle(e) {
	let name;
	$.each($(e).parents(), (k,v)=>{
		if($(v).hasClass('property')) {
			name = $(v).attr('id');
			return false;
		}
	});
	return name;
}

window.element=new element();
export default element;