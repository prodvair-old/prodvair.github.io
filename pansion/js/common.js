$(function() {

	$('.header__mmenu__burger').on('click', function (e){
		e.preventDefault();
		$('.header__mmenu__burger').toggleClass('header__mmenu__burger__active');
		$('.header__mmenu').toggleClass('active');
	});

	$('.gallery__content').slick({
		infinite: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToScroll: 2,
					slidesToShow: 2
				}
			},
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				slidesToScroll: 2,
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				slidesToScroll: 1,
				slidesToShow: 1
			  }
			}
		  ]
	});

});
