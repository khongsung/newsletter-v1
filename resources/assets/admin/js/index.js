import element from './../../frontend/js/components/element/element.js';

$(document).ready(function(){
	$('.templatePreview').click(function() {
		let id = $(this).attr('data-id-template');
		let url = 'design/get-template';
		$.ajax({
    		url: url,
    		data:{'id':id},
    		dataType: "json", 
    		success: (response) => {
    			window.object = JSON.parse(response.content);
    			let temp = $('#modalPreview .modal-body');
				$(".preview_id").attr('href', 'edittid='+id);
				$(".view_id").attr('href', 'view-templateid='+id);
				temp.empty();
				temp.html(objectJson.draw(object));
				$('#modalPreview').modal('show');
				document.querySelectorAll('pre code').forEach((block) => {
		          hljs.highlightBlock(block);
		        });
			}, 
			error : (response) => {
				console.log("error : ",response);
			}		    		
    	});
	})
});

window.exportZip = function(){
	if (window.object.content == '') {
		alert('Nothing to export!');
		return false;
	}
	var html_content = '';
	var bootstrap_css = "";
	var bootstrap_js = "";
	var jquery = "";
	getData();
	function getData(){
		$.ajax({
			url: "./frontend_asset/partital-views/head-html-file.html",
			success: (response) => {
				html_content += response;
				html_content +=  (objectJson.draw(object)).outerHTML;
				html_content += "</body></html>";
				$.ajax({
					url: "./css/bootstrap-grid.css",
					success: (response) => {
						bootstrap_css += response;
						zip(html_content, bootstrap_css);
					}, 
					error : (response) => {
						alert('có lỗi xảy ra!');
					}

				});
			}, 
			error : (response) => {
				alert('có lỗi xảy ra!');
			}
		});
	}
   	
    
	function zip(html_content, bootstrap_css, jquery, bootstrap_js){
		html_content = html_content.replace(/contenteditable\=\"true\"/gi,'');
		html_content = html_content.replace(/ui-sortable/gi, '');
		html_content = html_content.replace(/ui-sortable-handle/gi, '');
		html_content = html_content.replace(/ui-sortable-handle/gi, '');
	   	var zip = new JSZip();
		zip.file("css/bootstrap-grid.css", bootstrap_css);
		zip.file("index.html", html_content);
		var file_name = Math.floor(Math.random() * 10000)+"_snap-page.zip";
		zip.generateAsync({type:"blob"})
		.then(function (blob) {
		    saveAs(blob, file_name);
		});
	}
};