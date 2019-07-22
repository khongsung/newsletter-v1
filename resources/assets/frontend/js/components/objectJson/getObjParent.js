function getObjParent() {};

getObjParent.prototype.getParent = function(el) {
	if($(el).parent().hasClass('wrap')) {
		if($(el).parent().parent().attr('id') == "sortable-area2") {
			return object;
		}
		else {
			//duyet de tim vi tri
			let arr = [];
			$.each($(el).parents(), (k, v) => {
				arr.push($(v).index());
				if($(v).hasClass('group')) return false;
			});
			arr.shift();
			arr.pop();	
			arr = arr.reverse();
			let root = window.object;
			$.each(arr, (j,i) => {
				root = root.content[i];
			})
			return root;
		}
	} else {
		if($(el).parent().attr("id") == "sortable-area2") {
			return object;
		}  else {
			//duyet de tim vi tri
			let arr = [];
			$.each($(el).parents(), (k, v) => {
				arr.push($(v).index());
				if($(v).hasClass('group')) return false;
			});
			arr.pop();	
			arr = arr.reverse();
			let root = window.object;
			$.each(arr, (j,i) => {
				root = root.content[i];
			})
			return root;
		}
	}
};

export default getObjParent;