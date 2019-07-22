var w = window;

function keyDelete() {
	$('html').unbind().keyup(function(e) {
		if(e.keyCode == 46) {
			if (w.el != null) {
				let objParent = w.objectJson.getParent(w.el);
				objParent.content.splice($(w.el).index(), 1);
				$(w.el).remove();
				$('.left #tree-data div.active').remove();
				$('.right').hide();
				w.el = null;
				w.objectJson.saveLocalStorage();
			}	
		}
	});
}

export {keyDelete};