import element from './components/element/element';

var w = window;
var ele = new element;

$(document).ready(function() {
	if (localStorage.getItem("object") !== null) {
		let obj = JSON.parse(localStorage.getItem("object"));
		w.object.content = obj;
		$.each(obj, (k,v) => {
			$('#sortable-area2').append(w.objectJson.draw(v));
		});
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
		w.objectJson.drawTreeData();
		ele.sortableArea();
	}
	// if ($("#name_template").innerHTML == null && w.location.pathname == "/my-template") {
	// 	$("#side-bar").css('display', 'none');
	// }else{
	// 	$("#side-bar").css('display', 'block');
	// }

	window.addEventListener('beforeunload', (event) => {
	  w.objectJson.saveLocalStorage();
	});
});

w.exportZip = function(){
	if (w.object.content == '') {
		alert('Nothing to export!');
		return false;
	}
	var html_content = '';
	var docco = "";
	var hljs = "";
	getData();
	function getData(){
		$.ajax({
			url: "./frontend_asset/partital-views/head-html-file.html",
			success: (response) => {
				html_content += response;
				$.each(w.object.content, (k,v) => {
					html_content +=  w.objectJson.drawExport(v).outerHTML;
				});
				console.log(w.images);
				html_content += 
				`</body>
					<script type="text/javascript" src="js/highlight.min.js"></script>
					<script>
						document.querySelectorAll('pre code').forEach((block) => {
							hljs.highlightBlock(block);
						});
					</script>
				</html>`;
				
				$.ajax({
					url: "./js/highlight.min.js",
					success: function(response) {
						hljs += response;
						$.ajax({
							url: "./css/docco.min.css",
							success: (response) => {
								docco += response;
								zip(html_content, hljs, docco);
							},
							error: (response) => {
								console.log('error', response);
							}
						});
					},
					error: (response) => {
						console.log('error', response);
					}
				});
			}, 
			error : (response) => {
				alert('có lỗi xảy ra!');
			}
		});
	}

	function zip(html_content, hljs, docco){
		var zip = new JSZip();
		zip.file("index.html", html_content);
		zip.file("js/highlight.min.js", hljs);
		zip.file("css/docco.min.css", docco);
		var file_name = Math.floor(Math.random() * 10000)+"_snap-page.zip";
		zip.generateAsync({type:"blob"})
		.then(function (blob) {
			saveAs(blob, file_name);
		});
		w.images = [];
	}
};

w.addCategory = function(){
	$("#group").html('');
	$("#modal").modal('show');
	$("#modal .modal-title").html('Add new Category');
	$("#form").attr('action', 'add-category');
	$.get("frontend_asset/partital-views/add-category-form.html", function(htm){
		$("#group").html(htm);
	});
};
w.addTag = function(){
	$("#group").html('');
	$("#modal").modal('show');
	$("#modal .modal-title").html('Add new Tag');
	$("#form").attr('action', 'add-tag');
	$.get("frontend_asset/partital-views/add-tag-form.html", function(htm){
		$("#group").html(htm);
	});
};

w.save = function(){
	if ($("body #sortable-area2").children().length > 0) {
		var option = "";
		var content = JSON.stringify(w.object.content);
		$("#modal").modal('show');
		$("#group").css('height', '60px');
		$("#group").html('<div class="loader col-md-6 col-md-offset-5"></div>');
		$("#group").css('height', 'auto');
		$.ajax({
			url: 'get-category', 
			type: 'get',   
			success: function(data){
					for (var i = 0; i < data.length; i++) {
						option += '<option value="'+data[i].id+'">'+data[i].name+'</option>';
					}
					$(".modal-title").html('Save layout');
					$("#form").attr('action', 'design/save-template');
					$.get("frontend_asset/partital-views/add-new.html", function(data){
						$("#group").html(data);
						$("#content").val(content); 
					});
				//}
			},error: function(data){

			}
		});
	}else{alert("Nothing to save!");}
}


//validate
$("#form").validate({
	onfocusout: false,
	onkeyup: false,
	onclick: false,
	rules: {
		"name": {
			required: true
		},
		"email": {
			required: true
		},
		"password": {
			required: true,
			minlength: 6
		},
		"re_password": {
			required: true,
			equalTo: "#password",
			minlength: 6
		},
		"category" : {
			required: true
		}
	},
	messages: {
		"name": {
			required: "This field is required!"
		},
		"email":{
			require: "This field is required!"
		},
		"password": {
			required: "This field is required!",
			minlength: "Min length 6 digits"
		},
		"re_password": {
			required: "This field is required!",
			equalTo: "Two passwords must be same!",
			minlength: "Min length 6 digits"
		},
		"category" : {
			required: "Please select an item!",
		}
	}
});


w.addContent= function(){
    $("#form #content").val(JSON.stringify(w.object.content));
}

$(document).ready(function() {
	$("#search_button").click(function() {
	    var search_key = $('#search_key').val();
	   	var _token = $('input[name="_token"]').val(); 
	    $.ajax({
		    url:"search", 
		    method:"POST",
		    data:{search_key:search_key, _token:_token},
		    success:function(data){ //dữ liệu nhận về
		       $('#collapse-my-template').html(data[0]); 
		       $('#collapse-template-public').html(data[1]);
		       $('#collapse-my-template').addClass('in'); 
		       $('#collapse-template-public').addClass('in');
		       w.element.sortableArea();
		    }
		   });
	});
	$('#search_key').keyup(function(e){ 
		var _token = $('input[name="_token"]').val(); 
		$.ajax({
		    url:"search", 
		    method:"POST",
		    data:{ _token:_token},
		    success:function(data){ //dữ liệu nhận về
		       $('#collapse-my-template').html(data[0]); 
		       $('#collapse-template-public').html(data[1]);
		       $('#collapse-my-template').removeClass('in'); 
		       $('#collapse-template-public').removeClass('in');
		       w.element.sortableArea();
		    }
	   	});

	   	if(e.keyCode === 13) {
	   		$("#search_button").click();
	   	}
	});
});