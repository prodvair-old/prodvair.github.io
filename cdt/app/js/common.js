$(function() {

	$('.about__content__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	  });

	$('.about__content__left').on('click', function (e) {
		e.preventDefault();
		$('.about__content__slider').slick('slickPrev');
	});

	$('.about__content__right').on('click', function (e) {
		e.preventDefault();
		$('.about__content__slider').slick('slickNext');
	});
});
