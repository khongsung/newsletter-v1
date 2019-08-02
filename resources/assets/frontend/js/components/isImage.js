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
            console.log(data);
        }
    });
}

w.isImage = new isImage();
export default isImage;