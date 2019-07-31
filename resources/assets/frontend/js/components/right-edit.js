$(document).ready(function() {
	$('.edit-base >.base >.title').click(function(e) {
		// console.log(e);
		$(this).next().toggle();
		if($(this).next().is(":visible")) {
			$(this).find('.fa').removeClass('fa-caret-right');
			$(this).find('.fa').addClass('fa-caret-down');
		} else {
			$(this).find('.fa').removeClass('fa-caret-down');
			$(this).find('.fa').addClass('fa-caret-right');
		}
	})

	$('.base-general .radio-item .icon').click(function(e) {
		$(e.target).prev().click();
	});
});

var w = window;

function rightEdit() {};

rightEdit.prototype.edit = function(el, obj) {
	radioItemClick();
	selectChange();
	arrowsClick();
	keyEventInput();
	unitChange();
	opacityChange();
	keyEventSetting();
	backgroundImage();
	backgroundGradient();
};

function detachValue(v) {
	let values    = {};
	let regColor  = v.match(/^#.+/);
	let regLetter = v.match(/^[a-zA-Z]+$/);
	let regNumber = v.match(/[0-9]+/);
	let regUnit   = v.match(/[^0-9]+/);
	if (regColor != null) {
		values['regNumber'] = regColor[0];
	} else if(regLetter != null) {
		values['regNumber'] = regLetter[0];
	} else {
		regNumber != null ? values['regNumber'] = regNumber[0] : values = v;
		regUnit != null ? values['regUnit'] = regUnit[0] : values['regUnit'] = 'px';
	}
	
	return values;
};

rightEdit.prototype.fillStyleInRight = function() {
	$('.base input[type=number], .base input[type=text]').val('');
	$('.base input[type=number], .base input[type=text]').blur(); //remove focus
	$('.base input[type=radio]').prop('checked', false); //reset raido input
	$('.base select').prop('selectedIndex',0); //reset select
	$('.base select').blur(); //remove focus
	$('.base .field-color-picker').css('background-color', 'transparent'); //remove focus

	let style = w.obj.attr.style;
	let backgroundGradient = '';
	$.each(style, (k,v) => {
		if($('.base').find('#'+k).hasClass('properties--group')) {
			let value = v.trim().split(' ');
			$.each(value, (i,j) => {
				let values = new detachValue(j.trim());
				$($('.base').find('#'+k).find('.input-holder')[i]).children().val(values.regNumber);
				$($('.base').find('#'+k).find('.input-unit')[i]).val(values.regUnit);
				if(checkIsColor( $($('.base').find('#'+k).find('.input-holder')[i]).children() )) {
					$('.base').find('#'+k).find('.field-color-picker').css('background-color', values.regNumber);
				}				
			});
		}
		else {
			if ($('.base').find('#'+k).hasClass('integer') || $('.base').find('#'+k).hasClass('color')) {
				let values = new detachValue(v);
				$('.base').find('#'+k).find('input').val(values.regNumber);
				$('.base').find('#'+k).find('.input-unit').val(values.regUnit);
				$('.base').find('#'+k).find('.field-color-picker').css('background-color', values.regNumber);
			} else if($('.base').find('#'+k).hasClass('select')) {
				$('.base').find('#'+k+'.select').find('select').val(v);
			} else if($('.base').find('#'+k).hasClass('radio')) {
				$('.base').find('#'+k).find(`input[value=${v}]`).click();
			} else if($('.base').find('#'+k).hasClass('file')) {
				v = v.replace('url("', '');
				v = v.replace('")', '');
				$('.base').find('#'+k).find(`input[type=text]`).val(v);
			}
			let patt = /^([a-z]+-){1,2}[a-z]+\((#?[a-z0-9 ,]+){2,}\)$/;
			if (patt.test(v) == true && k == 'background-image') {
				backgroundGradient = v;
			}
		}
	});
	if(backgroundGradient != '') fillStyleBackgroundGradient(backgroundGradient);

	$.each($('.base-setting .trait input'), (k,v) => {
		let attrName = $(el).attr($(v).attr('name'));
		if (attrName != undefined) {
			$(v).val(attrName);
		}
	});
};

function checkIsColor(e) {
	let isColor = false;
	$.each($(e).parents(), (k,v)=>{
		if($(v).hasClass('color')) {
			isColor = true;
			return false;
		}
	});
	return isColor;
};

function isColor(strColor){
	var s = new Option().style;
	s.color = strColor;
	var test1 = s.color == strColor;
	var test2 = /^#[0-9A-F]{6}|#[0-9A-F]{3}$/i.test(strColor);
	if(test1 == true || test2 == true){
		return true;
	} else{
		return false;
	}
};

function checkIsSelect(e) {
	let isSelect = false;
	let id = findNameSytle(id);
	if($(id).hasClass('select')) {
		isSelect = true;
	}
	return isSelect;
};

function getNameGroup(e) {
	let name = '';
	let property = findNameSytle(e);
	property = findNameSytle($('#' + property));
	if (property != undefined && $('#' + property).hasClass('properties--group')) {
		name = property;
	}
	return name;
};

function checkIsGroup(e) {
	let isLayer = false;
	let property = findNameSytle(e);
	property = findNameSytle($('#' + property));
	if (property != undefined && $('#' + property).hasClass('properties--group')) {
		isLayer = true;
	}
	return isLayer;
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
};

function assign(styleName,valueInput,unit='') {
	if($.isNumeric(valueInput)) {
		if (styleName != 'opacity') {
			valueInput = valueInput + unit;
		}
	}

	if(valueInput !== '') {
		obj.attr.style[styleName] = valueInput;
		$(el).css(styleName, valueInput);
	} else {
		delete obj.attr.style[styleName];
		$(el).css(styleName, '');
	}
};

function groupEvent(e) {
	let nameGroup = getNameGroup(e);
	let selector  = document.getElementById(nameGroup);

	let divShow = $(selector).find('.field-color-picker')[0];
	let value   = test(nameGroup, selector);
	assign(nameGroup, value);
	colorpkr(divShow, nameGroup, value);
};

function colorpkr(div, styleName, styleValue) {
	$(div).ColorPicker({
		isNone: true,
		onShow: function (colpkr) {
			$(colpkr).fadeIn(400);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(400);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			styleValue = test(styleName, document.getElementById(styleName));
			let value  = styleValue.split(" ");
			if (styleName  == 'border') {
				value[2] = "#" + hex;
			} else if (styleName  == 'text-shadow') {
				value[3] = "#" + hex;
			} else {
				value[4] = "#" + hex;
			}
			styleValue = value.join(' ');
			assign(styleName, styleValue);
			$(div).css('background', '#' + hex);
			$(div).siblings('.input-holder').find('input').val('#' + hex);
		}, 
		onSubmit: function(hsb, hex, rgb, el) {
			styleValue = test(styleName, document.getElementById(styleName));
			let value  = styleValue.split(" ");
			if (styleName  == 'border') {
				value[2] = "#" + hex;
			} else if (styleName  == 'text-shadow') {
				value[3] = "#" + hex;
			} else {
				value[4] = "#" + hex;
			}
			styleValue = value.join(' ');
			assign(styleName, styleValue);
			$(div).css('background', '#' + hex);
			$(div).siblings('.input-holder').find('input').val('#' + hex);
			$(el).ColorPickerHide();
		},
		onCancle: function(el) {
			$(el).ColorPickerHide();
			$(w.el).css(styleName, '');
			delete w.obj.attr.style[styleName];
			$(div).siblings('.input-holder').find('input').val('none');
		}
	});
};

function test(nameGroup, selector) {
	let unit;
	let value = '';

	$.each($(selector).find('input, .select select'), (k, v) => {
		unit  = $(v).parent().siblings('.field-units').find('select').val();
		if (unit == undefined) unit = '';
		if($(v).attr('type') == 'number') {
			if (nameGroup == "box-shadow") {
				$(v).val() == '' ? value += 0 + unit + ' ' : value += $(v).val() + unit + ' ';
			} else {
				$(v).val() == '' ? value += '0 ' : value += $(v).val() + unit + ' ';
			}
		} else {
			$(v).val() != '' ? value += $(v).val() + unit + " " : value += ' ';
		}
		if(checkIsColor(v)) {
			$(v).parent().siblings('.field-color-picker').css('background', $(v).val());
		}
	});
	value = value.trim();
	value = value.replace(/ +/g, ' ');
	return value;
};

function radioItemClick() {
	$('.base .radio-item .icon').unbind().click(function(e) {
		$(e.target).prev().click();
		let attrName = $(e.target).prev().attr('name')
		let value    = $(e.target).prev().val();
		if(value == "none") {
			delete obj.attr.style[`${attrName}`];
			$(el).css(attrName, 'none');
		} else {
			obj.attr.style[`${attrName}`] = value;
			$(el).css(attrName, value);
		}
		e.stopPropagation();
	});
};

function selectChange() {
	$('.base .fields .select select').unbind().change(function(e) {
		if (!checkIsGroup(this)) {
			let attrName = findNameSytle(e.target);
			let value    = $(this).val();
			$(el).css(attrName, value);
			obj.attr.style[attrName] = value;
			e.stopPropagation();
		} else {
			groupEvent(e.target);
		}
		e.stopPropagation();
	});
};

function arrowsClick() {
	$('.base .field').find('.field-arrows').unbind().click(function(e) {
		let input = $(this).siblings('.input-holder').find('input');
		let unit  = $(this).siblings('.field-units').find('select').val();
		let valueInput = input.val();
		let styleName  = findNameSytle(this);

		if(parseInt(valueInput) == NaN || valueInput == "") {
			valueInput = 0;
		} else {
			valueInput = parseInt(valueInput);
		}
		
		if($(e.target).hasClass('field-arrow-u')) {
			valueInput++;
		} else {
			if(checkIsNegativeNumber(styleName)) {
				if (valueInput > 0) {
					valueInput--;
				}
			} else {
				valueInput--;
			}
			
		}

		assign(styleName, valueInput, unit);
		$(input).val(valueInput);
	});
};

function keyEventSetting() {
	$('.traits .trait input').unbind().on('change', function(e) {
		let attrName = $(this).attr('name');
		let value    = $(this).val();
		$(el).attr(attrName, value);
		obj.attr[attrName] = value;
		e.stopPropagation();
	});
};

function keyEventInput() {
	$('.base .field input, .base .select select').unbind().on('keyup change click', function(e) {
		if(!checkIsGroup(this)) {
			let styleName = findNameSytle(this);
			let unit  = $(this).parent().siblings('.field-units').find('select').val();
			let value = $(this).val();
			if(checkIsColor(this)) {
				$(this).parent().siblings('.field-color-picker').css('background', value);
			}
			if (styleName == 'opacity') {
				let inputRange = $(this).parent().parent().siblings('.field-range').find('input');
				if(value == '') {
					inputRange.val(1);
				} else {
					inputRange.val(value);
				}
			}
			if(styleName == 'background-image') {
				value = 'url("'+value+'")';
			}
			assign(styleName, value, unit);
		} else {
			groupEvent(e.target);
		}
		e.stopPropagation();
	});

	$('.base .field input').change(function(e) {
		let styleName = findNameSytle(this);
		let value = $(this).val();
		if (checkIsNegativeNumber(styleName)) {
			if (value < 0) {
				$(this).val(0);
			}
		}
		e.stopPropagation();
	});
};

function unitChange() {
	$('.base .field .field-units').unbind().change(function(e) {
		let styleName = findNameSytle(this);
		let unit     = $(this).find('select').val();
		let value =  $(this).siblings('.input-holder').find('input').val();
		assign(styleName, value, unit);
	});
};

function opacityChange() {
	$('.base .field input[type=range]').on('change mousemove', function(e) {
		let styleName   = findNameSytle(this);
		let value       = $(this).val();
		let inputHolder = $(this).parent().siblings('.field').find('input');
		inputHolder.val($(this).val());
		$(el).css(styleName, value);
		obj.attr.style[styleName] = value;
		if (value == "1") {
			delete obj.attr.style[styleName];
			$(el).css(styleName, '1');
		}
		e.stopPropagation();
	});
};

function checkIsNegativeNumber(styleName) {
	let  pattern = ['width', 'height', 'max-width', 'min-height', 'opacity'];
	if(pattern.indexOf(styleName.toLowerCase()) > -1) {
		return true;
	}
	return false;
};

function backgroundImage() {
	$('.right .base #background input[type="file"]').change(function() {
		try {
			let reader = new FileReader();
			let dataImg;
			reader.onload = function (e) {
				dataImg = e.target.result;
				console.log('test', dataImg);
				$(el).css('background-image', 'url("'+dataImg+'")');
				obj.attr.style['background-image'] = 'url("'+dataImg+'")';
			};
			reader.readAsDataURL(this.files[0]);
		} catch(err) {
			console.log(err.message);
		}
		
	});
};

function backgroundGradient() {
	let basePath = '.right .base #background-gradient ';

	$( basePath ).find('input, select').unbind().on('click keyup change', function(e) {
		keEventBackgroundGradient(basePath);
	});

	$( basePath + '#add-color').unbind().click(function() {
		let count = $( basePath + '.field-color').length;
		let html = `<div class="property color property__background-gradient-color">
						<div class="label color-warn">
							<span class="icon " title="">
								Color ${++count}
							</span>
							<b class="clear" data-clear-style="">⨯</b>
						</div>
						<div class="fields">

							<div class="field field-color">
								<div class="input-holder"><input type="text"></div>
								<div id="colorpkr-border" class="field-color-picker base-text-item" data-attr-name="border-color" style="background-color: transparent;">
									
								</div>
							</div>
						</div>

					</div>`;
		$( basePath + '.properties').append(html);		

		$( basePath + '.properties .clear').unbind().click(function() {
			$(this).parent().parent().remove();
			keEventBackgroundGradient(basePath);
		});
		backgroundGradient();
	});

	$.each($(basePath + '.field-color-picker'), (k,v) => {
		colorpickerBackgroundGradient(v, basePath);
	})
};

function keEventBackgroundGradient(basePath) {
		let type = $( basePath + '#background-gradient_type').find('select').val();
		let direction = $( basePath + '#background-gradient_direction').find('select').val();
		let colors = '';
		$.each($(basePath + ".field-color").find('input'), (k,v) => {
			colors +=  $(v).val() + ",";
		});
		if ($( basePath + '#background-gradient_direction').is(':visible')) {
			if (direction != '') {
				direction = direction + ',';
			}
		} else {
			direction = '';
		}
		if (type == 'linear-gradient' || type == 'repeating-linear-gradient') {
			$(basePath + '#background-gradient_direction').show();
		} else {
			$(basePath + '#background-gradient_direction').hide();
		}
		colors = colors.slice(0, colors.lastIndexOf(','));
		let value = type + '(' + direction + colors + ')';
		console.log('gradient', value);
		assign('background-image', value);
}

function colorpickerBackgroundGradient(div, basePath) {
	$(div).ColorPicker({
		isNone: true,
		onShow: function (colpkr) {
			$(colpkr).fadeIn(400);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(400);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$(div).siblings('.input-holder').find('input').val('#' + hex);
			$(div).css('background', '#' + hex);
			keEventBackgroundGradient(basePath);
		}, 
		onSubmit: function(hsb, hex, rgb, el) {
			$(div).siblings('.input-holder').find('input').val('#' + hex);
			$(div).css('background', '#' + hex);
			keEventBackgroundGradient(basePath);
			$(el).ColorPickerHide();
		},
		onCancle: function(el) {
			$(el).ColorPickerHide();
			$(w.el).css('background-image', '');
			delete w.obj.attr.style['background-image'];
			$(div).siblings('.input-holder').find('input').val('none');
		}
	});
}

function fillStyleBackgroundGradient(value) {
	let basePath = '.right .base #background-gradient ';
	let arrColor

	value = value.trim().split('(');
	let type = value[0];
	value = value[1];
	value = value.replace(')', '');
	value = value.split(',');
	$( basePath + '#background-gradient_type').find('select').val(type);
	if (isColor(value[0])) {
		arrColor = value;
	} else  {
		arrColor = value.slice(1);
		$( basePath + '#background-gradient_direction').show();
		$( basePath + '#background-gradient_direction').find('select').val(value[0]);
	}
	$( basePath + '.properties').find('.property.color').remove();
	$.each(arrColor, (k,v) => {
		$(basePath + '#add-color').click();
		$($(basePath + ".field-color")[k]).find('input').val(v);
		$($(basePath + ".field-color")[k]).find('.field-color-picker').css('background',v);
	});

}


export default rightEdit;
