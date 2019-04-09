$(function() {

	var header_slider  = $('.slick-js'),
		comment_slider = $('.slick-comment-js'),
		mmenu_btn 	   = $('.mmenu-btn-js'),
		mmenu_flor	   = $('.mmenu-flore-js'),
		mmenu_down	   = $('.tat-down-arrow'),
		mail_popap 	   = $('.popap-mail-js');

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

	header_slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<div class="header__content-left"><i class="tat-arrow-left"></i></div>',
		nextArrow: '<div class="header__content-right"><i class="tat-arrow-right"></i></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false
				}
			}
		],
	});

	if (!$('body').is('.isComment')) {
		comment_slider.slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: true,
			prevArrow: '<div class="comment__content-left"><i class="tat-arrow-left"></i></div>',
			nextArrow: '<div class="comment__content-right"><i class="tat-arrow-right"></i></div>',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						arrows: false,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						arrows: false,
					}
				}
			]
		});
	}

	mail_popap.magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});


	mmenu_btn.on('click', function(e) {
		e.preventDefault();
		mmenu_flor.toggleClass('active');
	});

	mmenu_down.parent().on('click', function(e) {
		e.preventDefault();
		$(this).parent().find('ol').toggleClass('active');
		mmenu_down.toggleClass('active');
	})

});
