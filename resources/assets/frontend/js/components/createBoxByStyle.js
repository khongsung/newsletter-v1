var w = window;

function createBoxByStyle() {};

createBoxByStyle.prototype.create = function(json, el, box, property="attr") {
	let style = window.getComputedStyle(el);
	$.each(json, (k,v)=> {
		let label = document.createElement('label');
		let div   = document.createElement('div');
		let pxPattern = ['width', 'height'];
		$(label).html(k);
		if(typeof(v) == "object") {
			if(k == "style") {
				createBoxByStyle.prototype.create(v, el, box, "css");
			} else {
				var select = document.createElement('select');
				$(select).attr('data-type', property);
				$(select).attr('name', k);
				$.each(v, (j,i) => {
					let option = document.createElement('option');
					$(option).attr('value', i);
					$(option).html(i);
					$(select).append(option);
				});
				$(div).append(select);
				$(box).append(div);
				$(select).val(style.getPropertyValue(k));
			}
		} else {
			if (k == "src") {
				if ($(el).prop('tagName').toLowerCase() == 'img') {
					let button = document.createElement('button');
					$(button).html("chang image");
					$(button).addClass('btn btn-basic btn-xs');
					$(button).css({'color' : '#111', 'margin-left': '20px'});
					$(div).append(button);
					$(button).click(function() {
						w.isImage.init('src')
					});
				} else {
					let input = document.createElement('input');
					$(input).attr('data-type', 'attr');
					$(input).attr('placeholder', 'link here');
					$(input).attr('placeholder', obj.attr[k]);
					$(div).prepend(input);
				}
			} else {
				let input = document.createElement('input');
				$(input).attr('data-type', property);
				$(input).attr('name', k);
				if(pxPattern.indexOf(k) > -1) {
					$(input).attr('type', 'number');
				}
				if($(input).data('type') == 'attr') {
					$(input).attr('placeholder', obj.attr[k]);
				} else {
					$(input).attr('placeholder',style.getPropertyValue(k));
				}
				$(div).prepend(input);
			}
			$(box).append(div);
		}
		$(div).prepend(label);
	});
};

export default createBoxByStyle;