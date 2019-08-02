function isImage() {};
var w = window;

isImage.prototype.readImage = function (el, obj) {
	$('#modal-filemanager .type-file input').change(function() {
		let reader = new FileReader();
		let dataImg;
		reader.onload = function (e) {
			dataImg = e.target.result;
			$(el).attr('src', dataImg);
			obj.attr['src'] = dataImg;
		};
		reader.readAsDataURL(this.files[0]);
		let src = $(this).val();
		let arr = src.split("\\");
		src = arr[arr.length-1];
		obj.attr.src = "./frontend_asset/images/" + src;
		pushImage();
	});
};

function pushImage () {
	var myFormData = new FormData();
	myFormData.append("file", $('#modal-filemanager .type-file input').prop('files')[0]);
	console.log('test', myFormData);
	$.ajax({
        type: 'POST',               
        processData: false, // important
        contentType: false, // important
        data: myFormData,
        url: "design/upload-img",
        success: function(data){
        	let result = data.split('|');
        	let path = w.location.origin + result[1];
            let html = `<div class="item">
							<img src="${path}">
							<span>${result[0]}</span>
						</div>`;
			$('#modal-filemanager .content').prepend(html);
        }
    });
}

function getAllImages() {
	$.ajax({
		url: '/get-all-img',
		success: function(response) {
			console.log(response);
		},
		error: function(err) {
			console.log('error : ', err.message);
		}
	});
}

w.isImage = new isImage();
export default isImage;