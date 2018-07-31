$(function() {

	// О нас
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

	// Фото-галерея
	$('.photos__slider').slick({
		centerMode: true,
		variableWidth: true,
		responsive: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 1000,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		easing: 'ease'
	});

	$('.photos__btn-next').click(function(e){
		e.preventDefault();
		$('.photos__slider').slick('slickNext');
	});
	$('.photos__btn-prev').click(function(e){
		e.preventDefault();
		$('.photos__slider').slick('slickPrev');
	});

	// попап окно
	$('.features__popup__slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 25000
	});

	$('.features__popup__slider__block-next').click(function(e){
		e.preventDefault();
		$('.features__popup__slider').slick('slickNext');
	});

	$('.features__content-btn').on('click', function (e) {
		e.preventDefault();
		$('.features__popup').addClass('features__popup-active');
	});

	$('.features__popup-btn-close').on('click', function (e) {
		e.preventDefault();
		$('.features__popup').removeClass('features__popup-active');
	});


	// Видео
	$('.videos__screen').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
		arrows: false,
		autoplay: false,
		fade: true
	});

	$('.videos__controls__next-btn').click(function(e){
		e.preventDefault();
		stopVideo();
		$('.videos__screen').slick('slickNext');
		$('.videos__controls__next-btn').html($('.videos__screen').slick('slickCurrentSlide') + 1);
	});


	function playVideo() {
		$('.videos__screen-item-poster').hide();
		$('.videos__controls__playpause-play').data("video","play");
		$('.videos__controls__playpause-play img').attr('src', 'img/videos/controls/pause.png');
		$('.videos__screen .slick-active video').get(0).play();
	}

	function pauseVideo() {
		$('.videos__controls__playpause-play').data("video","pause");
		$('.videos__controls__playpause-play img').attr('src', 'img/videos/controls/play.png');
		$('.videos__screen .slick-active video').get(0).pause();
	}

	function stopVideo() {
		pauseVideo();
		$('.videos__screen-item-poster').show();
		$(".videos__screen .slick-active video").get(0).currentTime = 0;
	}

	function mutedVideo() {
		$('.videos__controls__playpause-mute').data("video","muted");
		$('.videos__controls__playpause-mute img').attr('src', 'img/videos/controls/muted.png');
		$('.videos__screen .slick-active video').get(0).muted = true;

	}
	function songVideo() {
		$('.videos__controls__playpause-mute').data("video","song");
		$('.videos__controls__playpause-mute img').attr('src', 'img/videos/controls/sound.png');
		$('.videos__screen .slick-active video').get(0).muted = false;
	}
	// addEventListener('ended',myHandler,false)
	function replayVideo() {
		$('.videos__screen .slick-active video').get(0).addEventListener('ended', function () {
			stopVideo();
			$('.videos__screen').slick('slickNext');
			$('.videos__controls__next-btn').html($('.videos__screen').slick('slickCurrentSlide') + 1);
			playVideo();
			replayVideo();
		}, false);
	}

	replayVideo();

	$('.videos__controls__playpause-mute').on('click', function(e){
		e.preventDefault();
		if ($('.videos__screen .slick-active video').get(0).muted == false) {
			mutedVideo();
		}
		else {
			songVideo();
		}
	});

	$('.videos__controls__playpause-stop').on('click', function(e){
		e.preventDefault();
		stopVideo();
	});

	$('.videos__controls__playpause-play').on('click', function(e){
		e.preventDefault();
		if ($(this).data("video") == 'play') {
			pauseVideo();
		}
		else {
			playVideo();
		}
	});
	
	//попап загрузка картинок

	function loadImages(i,src){
		i = i || 1;
		var img = new Image();    
		img.onload = function () {
			$('.photos__popup__slider').append('<div class="photos__popup__slider__block"><img src="photo/' + src + '/' + i + '.jpg" class="photos__popup__slider__block-img" alt=""></div>');
			loadImages(++i,src);
		};
		img.onerror = function(){
			$('.photos__popup__preload').hide();
			$('.photos__popup .container').show();
			$('.photos__popup__slider').slick({
				dots: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 700,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 5000
			});
			exit();
		}
		img.src = '../photo/' + src + '/' + i + '.jpg';
	}
	
	$('.photos__slider__block a').on('click', function (e) {
		e.preventDefault();
		if ($(this).hasClass('disable')) {
			return false;
		}
		var src = $(this).data("photos-src");
		var title = $(this).data("photos-title");
		
		$('.photos__popup .container').hide();
		$('.photos__popup__preload').show();
		loadImages(1,src);

		$('.photos__popup__slider__block-title').html(title);
		$('.photos__popup').addClass('photos__popup-active');
	});

	$('.photos__popup-btn-close').on('click', function (e) {
		e.preventDefault();
		$('.photos__popup__slider').slick('unslick');
		$('.photos__popup__slider').html('');
		$('.photos__popup__slider__block-title').html('');
		$('.photos__popup').removeClass('photos__popup-active');
	});

	$('.photos__popup__slider__block-next').click(function(e){
		e.preventDefault();
		$('.photos__popup__slider').slick('slickNext');
	});
	$('.photos__popup__slider__block-prev').click(function(e){
		e.preventDefault();
		$('.photos__popup__slider').slick('slickPrev');
	});

	// Секция отзывов
	$('.comments__text__block-2__slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 25000,
		fade: true
	});

	

	$('.comments__text__block-2__more-btn').on('click', function (e) {
		e.preventDefault();
		$('.comments__popup').addClass('comments__popup-active');
	});

	$('.comments__popup-btn-close').on('click', function (e) {
		e.preventDefault();
		$('.comments__popup').removeClass('comments__popup-active');
	});

	$('.comments__popup__slider__block-next').click(function(e){
		e.preventDefault();
		$('.comments__popup__slider').slick('slickNext');
	});

	$('.comments__popup__slider__block-prev').click(function(e){
		e.preventDefault();
		$('.comments__popup__slider').slick('slickPrev');
	});

	$('.comments__popup__slider__block .comments__popup__slider__block-number-at').each(function (index, value) { 
		$(value).html(index + 1);
		$('.comments__popup__slider__block-number-all').html(index + 1)
	});

	$('.comments__popup__slider').slick({
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 700,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 25000,
		variableWidth: true
	});

	$('.srcoll-up a').on('click', function(e) {
		e.preventDefault();
		$('html,body').stop().animate({ scrollTop: 0 }, 1000);
	});

	function scroll(pos) {
		$('html,body').stop().animate({ scrollTop: $(pos).offset().top }, 1000);
	}

	$('.header__top__menu a').on('click', function (e) {
		e.preventDefault();
		var pos = $(this).attr('href');
		scroll(pos);
	});

	$('.footer__menu a').on('click', function (e) {
		e.preventDefault();
		var pos = $(this).attr('href');
		$('.footer__menu a').removeClass('active');
		$(this).addClass('active');
		scroll(pos);
	});

	$(window).scroll(function () {
		if ($('.srcoll-up').offset().top >= $('.condition').offset().top) {
			$('.srcoll-up a').addClass('active');
		}
		else {
			$('.srcoll-up a').removeClass('active');
		}

		
		if ($(window).scrollTop() <= $('.about').offset().top) {
			$('.footer__menu a').removeClass('active');
			$('.footer__menu a[href="#about"]').addClass('active');
		}
		if ($(window).scrollTop() <= $('.features').offset().top) {
			$('.footer__menu a').removeClass('active');
			$('.footer__menu a[href="#features"]').addClass('active');
		}
		if ($(window).scrollTop() <= $('.photos').offset().top) {
			$('.footer__menu a').removeClass('active');
			$('.footer__menu a[href="#photos"]').addClass('active');
		}
		if ($(window).scrollTop() <= $('.comments').offset().top) {
			$('.footer__menu a').removeClass('active');
			$('.footer__menu a[href="#comments"]').addClass('active');
		}
		if ($(window).scrollTop() <= $('.order').offset().top) {
			$('.footer__menu a').removeClass('active');
			$('.footer__menu a[href="#order"]').addClass('active');
		}
	});

	if ($('.srcoll-up').offset().top >= $('.condition').offset().top) {
		$('.srcoll-up a').addClass('active');
	}
	

});
