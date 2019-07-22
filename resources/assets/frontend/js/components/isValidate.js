function isValidate() {};

isValidate.prototype.validateInputGrid = function() {
	let sum  = 0;
	let cols = $(this).val().split(" ",12);
	$.each(cols, function(index,value){
		sum = sum + parseInt(value);
	});
	if(sum==12) {
		$(this).parent().find('label').show();
	} else {
		$(this).parent().find('label').hide();
	}
};

export default isValidate;