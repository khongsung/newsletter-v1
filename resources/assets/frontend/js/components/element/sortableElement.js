import objectJson from '../objectJson/objectJson';

function sortableElement() {};

var w = window;
w.objectJson = new objectJson;

$.fn.extend({
    hasClasses: function (selectors) {
        var self = this;
        for (var i in selectors) {
            if ($(self).hasClass(selectors[i])) 
                return true;
        }
        return false;
    }
});

sortableElement.prototype.draggable = function() {
	$('.sidebar-nav .lyrow').draggable({
		connectToSortable: "#sortable-area2, .grid-td",
		helper: "clone",
		handle: ".drag",
		scroll: false
	});

	$('body .sidebar-nav .box, body .sidebar-nav .item-user, body .sidebar-nav .item-public').draggable({
		connectToSortable: ".grid-td",
		helper: "clone",
		handle: ".drag",
		scroll: false
	});

	$('body .box-tr').draggable({
		connectToSortable: ".grid-tbody",
		helper: "clone",
		handle: ".drag",
		scroll: false
	});

	$('body .box-td').draggable({
		connectToSortable: ".grid-tr",
		helper: "clone",
		handle: ".drag",
		scroll: false
	});
}

sortableElement.prototype.sortableArea = function() {
	sortableElement.prototype.draggable();
	
	sort('#sortable-area2', '.grid-td');
	// sort('#sortable-area2 .grid-table', '.grid-td');
	sort('#sortable-area2 .grid-tbody', '.grid-tbody');
	sort('#sortable-area2 .grid-tr', '.grid-tr', '.grid-tbody');
	sort('#sortable-area2 .grid-td', '.grid-td, #sortable-area2', '.grid-tr');
};

sortableElement.prototype.dragdrop = function(el, obj) {
	// debugger;
	if($(el.item).hasClass('box') || $(el.item).hasClass('box-td') || $(el.item).hasClass('box-tr')) {
		let file = $(el.item).attr('value');
		$.ajax({
			url: "./frontend_asset/json/childs/" + file,
			dataType: "json",
			success: (response) => {
				if (file == "html-embed.json") {
					$('#md-html-embed').modal('show');
					$('.CodeMirror').remove();
					let htmlEmbed = CodeMirror.fromTextArea(document.getElementById('editor-html-embed'), {
						mode: "xml",
						theme: "dracula",
						autoCloseTags: true,
						lineNumbers: true
					});
					$('#md-html-embed #editor-confirmOk').click(function() {
						console.log('html', htmlEmbed.getValue());
						if (htmlEmbed.getValue() != "") {
							response.content = htmlEmbed.getValue();
							if(el.helper != null) {
								obj.content.splice(el.helper.index(), 0, response);
							}
							$(el.helper).replaceWith(w.objectJson.draw(response));
						} else {
							$(el.helper).remove();
						}
						w.objectJson.drawTreeData();
						$('#md-html-embed').modal('hide');
					})
					$('#md-html-embed #editor-confirmCancel').click(function() {
						$(el.helper).remove();
					})
				} else {
					if(el.helper != null) {
						obj.content.splice(el.helper.index(), 0, response);
					}
					$(el.helper).replaceWith(w.objectJson.draw(response));
					if (file == "code-hljs.json") {
						document.querySelectorAll('pre code').forEach((block) => {
							hljs.highlightBlock(block);
						});
					}
					w.objectJson.drawTreeData();
				}
				sortableElement.prototype.sortableArea();
			}, 
			error : (response) => {
				console.log("error : ",response);
			}		    		
		});
	} else if($(el.item).hasClass('item-user') || $(el.item).hasClass('item-public')) {
		let url;
		let id = $(el.item).attr('value');	
		$.ajax({
			url: 'design/get-template',
			data:{'id':id},
			dataType: "json", 
			success: (response) => {
				let data = JSON.parse(response.content);
				console.log('test', data);
				if(el.helper != null) {
					obj.content.splice(el.helper.index(), 0, data);
				}
				$(el.helper).replaceWith(w.objectJson.draw(data));
				setTimeout(() => {
					w.objectJson.drawTreeData();
					document.querySelectorAll('pre code').forEach((block) => {
						hljs.highlightBlock(block);
					});
				}, 100);
				sortableElement.prototype.sortableArea();
			}, 
			error : (response) => {
				console.log("error : ",response);
			}		    		
		});
	} else {
		let tag  = $(el.item).children().first()[0];
		let grid = w.objectJson.createJsonGrid(tag);
		if(el.helper != null) {
			obj.content.splice(el.helper.index(), 0, grid);
		}
		$(el.helper).replaceWith(w.objectJson.draw(grid));
		sortableElement.prototype.sortableArea();
		w.objectJson.drawTreeData();
	}
};

function sort(selector, connect, append) {
	$(selector).sortable({
		start: function(e, ui) {
			// if($(ui.item).parents().prop("tagName") == "DIV") {
				console.log('start area');
				w.indexStart = ui.item.index();
				w.nodeRemove = w.objectJson.getParent(ui.helper);
			// }
			$('.right').hide();			
		},
		sort: function(event, ui) {
			/* check if placeholder position is 0 add back placeholder */
			var pos = ui.placeholder.position();
			if(pos.left == 0 & pos.top == 0) {
				$(ui.item).before(ui.placeholder);
			}
		},
		stop: function(e, ui) {
			w.indexStop = $(ui.item).index();
			let notSort = ["box ui-draggable", "box-tr ui-draggable", "box-td ui-draggable", "item-user ui-draggable", "item-public ui-draggable", "item-public v-more ui-draggable", "item-user v-more ui-draggable"];
			if(indexStop != -1 && !$(ui.item).hasClasses(notSort)) {
				console.log('stop area');
				w.item = w.nodeRemove.content.splice(indexStart, 1);
				w.nodeReceive = w.objectJson.getParent(ui.item);
				w.nodeReceive.content.splice(indexStop, 0, item[0]);
			}
			$('#content .active').removeClass('active');
			sortableElement.prototype.sortableArea();
			w.objectJson.drawTreeData();
		},
		receive: function(e, ui){
			if($(ui.item).parent().prop("tagName") == "LI") {
				console.log('receive area');
				let tree = w.objectJson.getParent(ui.helper);
				sortableElement.prototype.dragdrop(ui,tree);
				sortableElement.prototype.sortableArea();
			}
		},
		scroll: false,
		tolerance: "pointer",
		placeholder: "ui-state-highlight",
		cursorAt: { left: 0, top: 0 },
		cancel: '',
		connectWith: connect,
		appendTo: append
	});
}

export default sortableElement;
