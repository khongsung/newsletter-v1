jQuery(document).ready(function($) {
	$(".confirmPublic").click(function() {
		// let data = $(this).attr('value');
		// let id = $(this).attr('data-id-template');
		let request_id = $(this).attr('data-id-request');
		$("#modalConfirm").modal('show');
		// $("#content").val(data);
		// $("#id").val(id);
		$("#request_id").val(request_id);
		$("#template_id").remove();
	});

	$(".modalPublic").click(function() {
		let template_id = $(this).attr('data-id-template');
		$("#modalConfirm").modal('show');
		$("#template_id").val(template_id);
		$("#request_id").remove();
	});




	$('#searchkey').keyup(function(){ 
	    var table = $(this).attr('data-table');
	    var value = $(this).val().toLowerCase();
	    console.log(table);
	   	if (table == 'users') {
	   		$("#myTable tr").filter(function() {
		      	$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		    });
	   	}else if(table == 'template'){
	   		var unicode = event.charCode ? event.charCode : event.keyCode;
	        if (unicode == 27) { $(this).val(""); }
	        var searchKey = $(this).val().toLowerCase();
	        $('.accordion-toggle').each(function() {
	            var cellText = $(this).text().toLowerCase();
	            var accordion = $('#accordion panel');           
	    
	            if (cellText.indexOf(searchKey) >= 0) {
	                $(this).parent().parent().show();
	            } else {
	                $(this).parent().parent().hide();
	                 $('.panel-collapse.in').collapse('hide');
	            }
	        });
	   	}
  	}); 

  	$("#accordion > .panel:eq(0)").find('.panel-heading').find('a').click();
});

//validate
jQuery.validator.addMethod("nameCategoryRegex", function(value, element) {
    return this.optional(element) || /^[a-z\ \s]+$/i.test(value);
}, "Category's name must contain only letters & space");
jQuery.validator.addMethod("nameTagRegex", function(value, element) {
    return this.optional(element) || /^[a-z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/i.test(value);
}, "Tag's name must contain only letters & number. No space allowed");
$("#formCategory").validate({
	onfocusout: false,
	onkeyup: false,
	onclick: false,
	rules: {
		"name": {
			required: true,
			nameCategoryRegex:true,
			maxlength: 50
		}
	},
	messages: {
		"name": {
			required: "This field is required!"
		}
	}
});

$("#formTag").validate({
	onfocusout: false,
	onkeyup: false,
	onclick: false,
	rules: {
		"name": {
			required: true,
			nameTagRegex:true,
			maxlength: 10
		}
	},
	messages: {
		"name": {
			required: "This field is required!"
		}
	}
});

$("#formPublic").validate({
	onfocusout: false,
	onkeyup: false,
	onclick: false,
	rules: {
		"name": {
			required: true
		},
		"category" : {
			required: true
		},
		"tag[]" : {
			required: true
		}
	},
	messages: {
		"name": {
			required: "This field is required!"
		},
		"category" : {
			required: "Please select an item!",
		},
		"tag[]" : {
			required: "Please select an item!",
		}
	}
});

