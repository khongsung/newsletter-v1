function isImage() {};

isImage.prototype.readImage = function (el, obj) {
	$('.right .edit-box input[type="file"]').change(function() {
		let reader = new FileReader();
		let dataImg;
		reader.onload = function (e) {
			dataImg = e.target.result;
			$(el).attr('src', dataImg);
			obj.attr['src'] = dataImg;
		};
		reader.readAsDataURL(this.files[0]);
		// let src = $(this).val();
		// let arr = src.split("\\");
		// src = arr[arr.length-1];
		// $('.right .edit-box input[type="file"]').next().val('').blur();
		// obj.attr.src = "./frontend_asset/images/" + src;
		// pushImage();
	});

	$('.right .edit-box input[type="file"]').next().unbind().change(function() {
		if($(this).val() != '') {
			$(el).attr('src', $(this).val());
			obj.attr['src'] = $(this).val();
		} else {
			delete obj.attr['src'];
			$(el).attr('src', 'frontend_asset/images/test.jpg');
		}
		$('.right input[type="file"]').val('').blur();
	});
};

function pushImage () {
	var myFormData = new FormData();
	myFormData.append("file", $('.right input[type="file"]').prop('files')[0]);
	$.ajax({
        type: 'POST',               
        processData: false, // important
        contentType: false, // important
        data: myFormData,
        url: "./frontend_asset/images/upload.php",
        success: function(data){
            console.log(data);
        }
    });
}

export default isImage;