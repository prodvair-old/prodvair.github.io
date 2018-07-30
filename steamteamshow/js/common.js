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


	// var videobackground = new $.backgroundVideo($('.header'), {
	// 	"align": "centerXY",
	// 	"width": 1280,
	// 	"height": 720,
	// 	"path": "video/",
	// 	"filename": "bg",
	// 	"types": ["mp4","ogg","webm"],
	// 	preload: true,
	// 	autoplay: true,
	// 	loop: true
	// });
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
