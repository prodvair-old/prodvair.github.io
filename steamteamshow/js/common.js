$(function() {

	$('.about__slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 25000
	});

	$('.about__slider__controls-right-btn').click(function(e){
		e.preventDefault();
		$('.about__slider').slick('slickNext');
	});
	$('.about__slider__controls-left-btn').click(function(e){
		e.preventDefault();
		$('.about__slider').slick('slickPrev');
	});

	function clearAboutDots() {
		$('.about__slider__controls-dots-3').removeClass('active');
		$('.about__slider__controls-dots-2').removeClass('active');
		$('.about__slider__controls-dots-1').removeClass('active');
	}
	$('.about__slider__controls-dots-3').click(function(e){
		e.preventDefault();
		clearAboutDots();
		$(this).addClass('active');
		$('.about__slider').slick('slickGoTo',2);
	});
	$('.about__slider__controls-dots-2').click(function(e){
		e.preventDefault();
		clearAboutDots();
		$(this).addClass('active');
		$('.about__slider').slick('slickGoTo',1);
	});
	$('.about__slider__controls-dots-1').click(function(e){
		e.preventDefault();
		clearAboutDots();
		$(this).addClass('active');
		$('.about__slider').slick('slickGoTo',0);
	});

	$('.about__slider').on('afterChange', function(event, slick, currentSlide){
		if (currentSlide == 0) {
			clearAboutDots();
			$('.about__slider__controls-dots-1').addClass('active');
		}
		if (currentSlide == 1) {
			clearAboutDots();
			$('.about__slider__controls-dots-2').addClass('active');
		}
		if (currentSlide == 2) {
			clearAboutDots();
			$('.about__slider__controls-dots-3').addClass('active');
		}
	});

	// $('.photocards-slider').slick({
	// 	centerMode: true,
	// 	dots: false,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	speed: 1000,
	// 	autoplay: true,
	// 	autoplaySpeed: 5000,
	// 	prevArrow: '<div class="photocards-slider-arrow photocards-slider-arrow_left"></div>',
	// 	nextArrow: '<div class="photocards-slider-arrow photocards-slider-arrow_right"></div>'
	// });

});
