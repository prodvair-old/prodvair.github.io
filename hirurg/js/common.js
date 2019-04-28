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

	$('.menu__numbers__all').html( check_number($('.scroll').length) );

	

	$.scrollify({
		section : ".scroll",
		easing: "easeOutExpo",
		scrollbars: false,
		updateHash: false,
		before: function(index) {

			section_btn(index)

		},
		afterRender: function() {
			
			section_btn($.scrollify.currentIndex());
		}
	});

	function section_btn(index) {
		$('.menu__numbers__this').html( check_number(index + 1) );

		if (index === 0) {
			$('.wrapper__right__bottom__btn').on('click', function(e){
				e.preventDefault();
				$.scrollify.next();
			});
		} else if (index === 1) {
			$('.wrapper__right__bottom__btn').attr('href', 'asdfgasg');
		}
	}


	function check_number(number) {
		if (number < 10) {
			number = '0' + number;
		}
		return number;
	}
	

});
