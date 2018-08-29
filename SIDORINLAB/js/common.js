$(function() {

	$("#tel").mask("+7 (999) 999-99-99");
	$("#phone").mask("+7 (999) 999-99-99");
	$("#phone2").mask("+7 (999) 999-99-99");

	$('.header__top__search a').on('click', function(e){
		e.preventDefault();
		$('.search-fild').addClass("search-fild-active");
		$('.header').addClass("blur");
	});

	$('.search-fild__form__close').on('click', function(e){
		e.preventDefault();
		$('.search-fild').removeClass("search-fild-active");
		$('.header').removeClass("blur");
	});
	
	$('.collaps__card__btn a').on('click', function(e){
		e.preventDefault();
		if ($(this).parent().parent().hasClass('collaps__card-active')){
			$('.collaps__card').removeClass("collaps__card-active");
			$(".collaps__card__btn a i").removeClass("slab-up-open");
			$(".collaps__card__btn a i").addClass("slab-down-open");
			return false;	
		}
		$('.collaps__card').removeClass("collaps__card-active");
		$(".collaps__card__btn a i").removeClass("slab-up-open");
		$(".collaps__card__btn a i").addClass("slab-down-open");
		$(this).parent().parent().addClass("collaps__card-active");
		$(this).find(".demo-icon").removeClass("slab-down-open");
		$(this).find(".demo-icon").addClass("slab-up-open");
	});

	$('.service__left__order__card__text select').on('click', function(){
		$('.service__left__order__card__text i').toggleClass("slab-down-open");
		$('.service__left__order__card__text i').toggleClass("slab-up-open");
	});

	$('.comments__slider').slick({
		accessibility: false,
		swipe: false,
		touchMove: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		fade: true,
		arrows: false,
		autoplaySpeed: 10000,
		asNavFor: '.comments__slider-img'
	});

	$('.comments__slider-img').slick({
		accessibility: false,
		swipe: false,
		touchMove: false,
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		centerPadding: '0px',
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				variableWidth: false,
				slidesToShow: 1,
				fade: true,
			  }
			}
		]
	});

	$('.service__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 10000,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				dots: true,
				adaptiveHeight: true
			  }
			}
		]
	});

	$('.service__next a').on('click', function (e) {
		e.preventDefault();
		$('.service__slider').slick('slickNext');
	});

	$('.slick-dots button').html(' ');

	

	function checked() {
		$('.checkbox').change(function(){
			if($('.checkbox').prop('checked')) {
				$('.checkbox__dot').addClass('active');
			}
			else {
				$('.checkbox__dot').removeClass('active');
			}
		});
	}

	checked();
	
	if ($(window).width() < 1590) {
		$('.trust__img img').attr('src', 'img/trust-1200.png');
	}

	if ($(window).width() < 1200) {
		$('.header__top__logo img').attr('src', 'img/logo-m.png');
		$('.trust__img img').attr('src', 'img/trust-m.png');
		$('.comments__slider-img__block').removeClass('comments__slider-img__block-active');
	}
	else {
		$('.comments__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.comments__slider-img__block').removeClass('comments__slider-img__block-active');
			$('.comments__slider-img__block[data-slick-index="' + nextSlide + '"]').addClass('comments__slider-img__block-active');
		});
	}

	if ($(window).width() < 768) {
		$('.about__file__align__link img').attr('src', 'img/pdf-m.png');
	}

	$('.header__top__mmenu-btn a').on('click', function (e) {
		e.preventDefault();
		$('.header__top__mmenu-btn a').toggleClass('active');
		$('.header__top').toggleClass('header__top__mmenu');
	});

});
