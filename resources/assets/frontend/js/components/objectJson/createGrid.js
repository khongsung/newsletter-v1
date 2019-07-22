function createGrid() {};

createGrid.prototype.createJsonGrid = function(el) {
	let cols = $(el).val().split(" ",12);
	let obj = {
		"tag" : "div",
		"category" : "grid",
		"attr" : {
			"class" : "row",
			"style" : {}
		},
		"content" : []
	};
	$.each(cols, function(index,value){
		let col = {
			"tag" : "div",
			"category" : "grid",
			"attr" : {
				"sort": "" + index,
				"class" : "col-md-" + value + " column",
				"style" : {}
			},
			"content" : []
		};
		obj.content.push(col);
	});
	return obj;
};


export default createGrid;