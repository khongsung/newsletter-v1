import getObjParent  from './getObjParent';
import createGrid  from './createGrid';

var w = window;
function objectJson() {};

objectJson.prototype = new getObjParent();

objectJson.prototype.draw = function(json) {
	let tag   = document.createElement(json.tag);
	let hashCode  = Math.random().toString(36).substring(7);
	if(json.hash == "" || json.hash == undefined) {
		json['hash'] = hashCode;
	} else {
		hashCode = json.hash;
	}
	$(tag).attr('data-hash', hashCode);
	if(json.category != "") $(tag).attr('data-category', json.category);
	if(json.attr != null) {
		$.each(json.attr, (k,v) => {
			if(typeof(v) != "string") {
				if(k == "style") {
					$.each(v, (j,i) => {
						$(tag).css(j,i);
					})
				}
			} else {
				if (k == 'contenteditable') {
					
				} else {
					$(tag).attr(k, v);
				}
			}
		});
	}
	if(typeof(json.content) != "string") {
		$.each(json.content, (k,v)=>{
			tag.appendChild(objectJson.prototype.draw(v));
		})
	} else {
		$(tag).html(json.content);
	}
	// objectJson.prototype.drawTreeData();
	return tag;
};

objectJson.prototype.drawTreeData = function() {
	objectJson.prototype.saveLocalStorage();
	$('#tree-data').html(treeData(w.object));
	$('#tree-data >:first-child >.fa-trash').remove();
	$.each($('.tree-parent'), (k,v) => {
		if (k>0) {
			$(v).find('div').slideUp();
		}
	});
}

function treeData(json) {
	let tag = document.createElement('div');
	if(typeof(json.content) != "string") {
		let html   = '';
		let angle  = '';
		let length = json.content.length;
		if(json.attr.class.search('row') > -1) {
			$(tag).html("<span class='tree-label'>Row</span>");
		} else if(json.attr.class.search('column')) {
			$(tag).html("<span class='tree-label'>Column</span>");
		}else {
			$(tag).html("<span class='tree-label'>Frame</span>");
		}
		if(length > 0) {
			html = `<span class="pull-right" style="margin-right:5px;">${length}</span>`;
			angle = `<i class="fa fa-angle-right tree-angle" aria-hidden="true"></i>`;
		}
		$(tag).html(angle + $(tag).html() + `<i class="fa fa-trash pull-right" aria-hidden="true"></i>${html}`);
		$(tag).addClass('tree-parent')
		$(tag).attr('data-hash', json.hash);
		$.each(json.content, (k,v)=>{
			tag.appendChild(treeData(v));
		})
	} else {
		$(tag).attr('data-hash', json.hash);
		$(tag).addClass('tree-child');
		$(tag).html("   " + `<span class='tree-label'>${json.tag}/${json.category}</span><i class="fa fa-trash pull-right" aria-hidden="true"></i>`);
	}
	return tag;
};

objectJson.prototype.createJsonGrid = function(el) {
	let cols = $(el).val().split(" ",12);
	let obj = {
		"tag" : "table",
		"category" : "grid",
		"attr" : {
			"class" : "grid-table",
			"style" : {
				"min-height": "70px",
				"width": "100%"
			}
		},
		"content" : [
			{
				"tag" : "tr",
				"category" : "grid",
				"attr" : {
					"class" : "column",
					"style" : {}
				},
				"content" : []
			}
		]
	};
	$.each(cols, function(index,value){
		let col = {
			"tag" : "td",
			"category" : "grid",
			"attr" : {
				"class" : " column",
				"style" : {
					"width": parseInt(value) * 10 + "%",
					"padding" : "5px"
				}
			},
			"content" : []
		};
		obj.content[0].content.push(col);
	});
	return obj;
};

objectJson.prototype.saveLocalStorage = function() {
	localStorage.setItem("object", JSON.stringify(w.object.content));
};


export default objectJson;