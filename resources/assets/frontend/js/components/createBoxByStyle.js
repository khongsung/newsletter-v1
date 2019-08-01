var flag = 0;
function createBoxByStyle() {};

createBoxByStyle.prototype.create = function(json, el, box) {
	flag++;
	let style = window.getComputedStyle(el);
	$.each(json, (k,v)=> {
		let label = document.createElement('label');
		let div   = document.createElement('div');
		let pxPattern = ['width', 'height'];
		$(label).html(k);
		if(typeof(v) == "object") {
			if(k == "style") {
				createBoxByStyle.prototype.create(v, el, box);
			} else {
				var select = document.createElement('select');
				(flag%2 != 0)? $(select).attr('data-type', 'attr') : $(select).attr('data-type', 'css');
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
			let input = document.createElement('input');
			(flag%2 != 0)? $(input).attr('data-type', 'attr') : $(input).attr('data-type', 'css');
			$(input).attr('name', k);
			if(pxPattern.indexOf(k) > -1) {
				$(input).attr('type', 'number');
			}
			if (k == "src") {
				if ($(el).prop('tagName').toLowerCase() == 'img') {
					$(input).attr('type', 'file');
					let inputLink = document.createElement('input');
					$(inputLink).attr('type', 'text');
					$(inputLink).attr('placeholder', obj.attr[k]);
					$(div).append(inputLink);
				} else {
					$(input).attr('placeholder', 'link here');
				}
			}
			if($(input).data('type') == 'attr') {
				$(input).attr('placeholder', obj.attr[k]);
			} else {
				$(input).attr('placeholder',style.getPropertyValue(k));
			}
			$(div).prepend(input);
			$(box).append(div);
		}
		$(div).prepend(label);
	});
};

export default createBoxByStyle;