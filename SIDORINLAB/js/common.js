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
		$('.service__left__order__card__text i').toggleClass("fisrt");
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
		autoplaySpeed: 5000,
		asNavFor: '.comments__slider-img'
	});

	$('.blog__mobile__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 5000,
		dots: true,
		adaptiveHeight: true,
		asNavFor: '.blog__mobile__bg'
	});

	$('.blog__mobile__bg').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		adaptiveHeight: true,
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

	$('.blog__mobile__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		if ($('.blog__mobile__bg__items.red').hasClass('slick-active')) {
			$('.blog__mobile__slider .slick-dots').addClass('slick-dots-red');
			$('.blog__mobile').css({'background-color' : '#FC1A20'});
			$('.blog__first').addClass('blog__first-red');
		}
		else {
			$('.blog__mobile__slider .slick-dots').removeClass('slick-dots-red');
			$('.blog__mobile').css({'background-color' : '#efefef'});
			$('.blog__first').removeClass('blog__first-red');
		}
	});

	$('.blog__mobile__slider__content .btn-more').on('click', function (e) {
		e.preventDefault();
		$('.blog__popup__mobile').addClass('blog__popup__mobile-active');
	});

	$('.blog__popup__mobile .close').on('click', function (e) {
		e.preventDefault();
		$('.blog__popup__mobile').removeClass('blog__popup__mobile-active');
	});

	$('.service__next a').on('click', function (e) {
		e.preventDefault();
		$('.service__slider').slick('slickNext');
	});

	$('.blog__mobile__slider__content .next').on('click', function (e) {
		e.preventDefault();
		$('.blog__mobile__slider').slick('slickNext');
	});

	$('.about__text a').on('click', function (e) {
		e.preventDefault();
		if ($(this).html() == 'подробнее') {
			$(this).html('скрыть');
			$('.about__text').addClass('about__text-active');
		}
		else {
			$(this).html('подробнее');
			$('.about__text').removeClass('about__text-active');
		}
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

	$('.bread-crumb__mobile__burger a').on('click', function (e) {
		e.preventDefault();
		$('.header__top__mmenu-btn a').toggleClass('active');
		$('.header__top').toggleClass('header__top__mmenu');
	});

	var $select = $('.service__left__order__card__text select');
	$select.each(function() {
		var clas = $(this).children(':selected').val();
		$(this).parent().addClass(clas);
	}).on('change', function(ev) {
		var clas = $(this).children(':selected').val();
		$(this).parent().attr('class', '').addClass(clas);
	});

	$('.dictionary__block').hide();
	var id = $('.dictionary__first__content__items a.active').attr('href');
	var str = $('.dictionary__first__content__items a.active').html();
	$('.dictionary__block' + id).show();
	$('.dictionary__block' + id + ' h3').html(str);

	$('.dictionary__first__content__items a').on('click', function(e) {
		e.preventDefault();
		$('.dictionary__first__content__items a').removeClass('active');
		$(this).addClass('active');
		$('.dictionary__block').hide();
		var id = $(this).attr('href');
		var str = $(this).html();
		$('.dictionary__block' + id).show();
		$('.dictionary__block' + id + ' h3').html(str);
	});

	$('.header__content__text__down a').on('click', function (e){
		e.preventDefault();
		var h = $('.header').height();
		$('html,body').stop().animate({ scrollTop: h }, 1000);
	});

	$(window).scroll(function () {
		if($('body').hasClass('isBook')) {
			if ($(window).scrollTop() >= ($('.book__text').offset().top + 200)) {
				$.each($('.book__block__advantage__item'), function(i, el) {
					setTimeout(function() {
					$(el).addClass("book__block__advantage__item-active");
					}, 700 + (i * 900));
				});
			}
		}
	});

});
