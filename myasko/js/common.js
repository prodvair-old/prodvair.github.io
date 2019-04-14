$(function() {

	$('.files input').on('change', function () {
		if ($(this).val() === '') {
			$(this).parent().removeClass('ready');
			$(this).parent().children('span').html('Выбрать файл');
		} else {
			$(this).parent().addClass('ready');
			$(this).parent().children('span')
				.html($(this).get(0).files[0].name+
				' ('+covertSize($(this).get(0).files[0].size)+')');
			console.log($(this));
			console.log($(this).get(0).files[0].size);
		}
	});

	function covertSize(size){
		sizeKb = size / 1024;
		sizeMb = sizeKb / 1024;
		sizeGb = sizeMb / 1024;
		sizeTb = sizeGb / 1024;
	
		if (sizeKb <= 1024) {
			result = sizeKb.toFixed(1) + ' кб';
		} else if (sizeKb >= 1024 && sizeMb <= 1024) {
			result = sizeMb.toFixed(1) + ' мб';
		} else if (sizeMb >= 1024 && sizeGb <= 1024) {
			result = sizeGb.toFixed(1) + ' гб';
		} else {
			result = sizeTb.toFixed(1) + ' тб';
		}
		return result;
	}
	

});
