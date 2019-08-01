import getObjParent  from './getObjParent';

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
	if(typeof(json.content) != "string" && json.content != '') {
		let html   = '';
		let angle  = '';
		let length = json.content.length;
		let nameNode = "<span class='tree-label'>"+json.tag+"</span>";
		if(length > 0) {
			html = `<span class="pull-right" style="margin-right:5px;">${length}</span>`;
			angle = `<i class="fa fa-angle-right tree-angle" aria-hidden="true"></i>`;
		}
		$(tag).html(angle + nameNode + `<i class="fa fa-trash pull-right" aria-hidden="true"></i>${html}`);
		$(tag).addClass('tree-parent')
		$(tag).attr('data-hash', json.hash);
		console.log('test', json.content);
		$.each(json.content, (k,v)=>{
			tag.appendChild(treeData(v));
		})
	} else {
		$(tag).attr('data-hash', json.hash);
		$(tag).addClass('tree-child');
		$(tag).html(`<span class='tree-label'>${json.tag}/${json.category}</span><i class="fa fa-trash pull-right" aria-hidden="true"></i>`);
	}
	return tag;
};

objectJson.prototype.createJsonGrid = function(el) {
	let cols = $(el).val().split(" ",10);
	let obj = {
		"tag" : "table",
		"category" : "grid-table",
		"attr" : {
			"class" : "grid-table",
			"style" : {}
		},
		"content" : [
			{
				"tag" : "tbody",
				"category" : "grid",
				"attr" : {
					"class" : "grid-tbody",
					"style" : {}
				},
				"content" : [
					{
						"tag" : "tr",
						"category" : "grid-tr",
						"attr" : {
							"class" : "grid-tr",
							"style" : {}
						},
						"content" : []
					}
				]
			}
		]
	};
	$.each(cols, function(index,value){
		let col = {
			"tag" : "td",
			"category" : "grid-td",
			"attr" : {
				"class" : "grid-td",
				"style" : {
					"width": parseInt(value) * 10 + "%"
				}
			},
			"content" : []
		};
		obj.content[0].content[0].content.push(col);
	});
	return obj;
};

objectJson.prototype.saveLocalStorage = function() {
	localStorage.setItem("object", JSON.stringify(w.object.content));
};


export default objectJson;