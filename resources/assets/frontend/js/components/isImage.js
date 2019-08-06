function isImage() {};
var w = window;
<<<<<<< HEAD

isImage.prototype.init = function(type) {
	w.type = type;
	$('#modal-filemanager').modal('show');
	readImage();
	getAllImages();
	AddImgFormUrl();
}

function assign(name, value) {
	if (name == 'src') {
		$(w.el).attr('src', value);
		w.obj.attr['src'] = value;
	} else if (name == 'background-image') {
		let src = 'url(' + value + ')';
		$(w.el).css(name, src);
		w.obj.attr.style[name] = src;
	}
}

function readImage() {
	$('#modal-filemanager .type-file input').unbind().change(function() {
		let reader = new FileReader();
		let dataImg;
		reader.onload = function (e) {
			dataImg = e.target.result;
			assign(w.type, dataImg);
		};
		reader.readAsDataURL(this.files[0]);
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
        	getAllImages();
        	assign(w.type, path);
        }
    });
}

function getAllImages() {
	$.ajax({
		url: 'design/get-all-img',
		success: function(response) {
			// $('#modal-filemanager .content')
			let images = JSON.parse(response);
			$('#modal-filemanager .content').empty();
			$.each(images, (k,v) => {
				let name = v.split('/');
				name = name[name.length - 1];
				let html = `<div class="item">
								<img src="${v}">
								<span>${name}</span>
								<span class="del-img" data-value='${v}'><i class="fa fa-times"></i></span>
							</div>`;
				$('#modal-filemanager .content').prepend(html);
			});
			deleteImg();
			changeImg();
		},
		error: function(err) {
			console.log('error : ', err.message);
		}
	});
}


function deleteImg() {
	$('#modal-filemanager .content .item .del-img .fa').unbind().click(function(){
		let that = this;
		$.ajax({
			url: 'design/delete-img',
			type: 'POST', 
			data: {value: $(this).parent().attr('data-value')},
			success: function(response) {
				if (response == 'deleted') {
					$(that).parent().parent().remove();
				}
			},
			error: function(er) {
				console.log("error : ", er.message);
			}
		});
	});
}

function changeImg() {
	$('#modal-filemanager .content .item').unbind().click(function() {
		let src = $(this).find('img').attr('src');
		assign(w.type, src);
		$('#modal-filemanager .content .selected').removeClass('selected');
		$(this).addClass('selected');
	})
}

function AddImgFormUrl() {
	$('#modal-filemanager .head .type-text button').unbind().click(function() {
		let input = $(this).prev();
		if (input.val() != '') {
			$.ajax({
				url: 'design/add-img',
				data: {url: input.val()},
				type: 'POST',
				success: function(response) {
					if (response != '') {
						getAllImages();
						input.val('');
						assign(w.type, response);
					}
				},
				error: function(er) {
					console.log('error: ', er.message);
					alert('Error: image not found!')
				}
			});
		} else {
			alert('Please enter link!');
			input.focus();
		}
	});
}

w.isImage = new isImage();
export default isImage;