document.addEventListener("DOMContentLoaded", function() {

	var radio 		= $('.calculation__form__slider__item__group-radio'),
		radioInput 	= $('.calculation__form__slider__item__group-radio label'),
		radioLabel 	= $('.calculation__form__slider__item__group-radio label'),
		radioBg		= $('.calculation__form__slider__item__group-radio-bg'),
		currencyBtn 	= $('.calculation__form__slider__item__group-currency_btn'),
		currencySpan 	= $('.calculation__form__slider__item__group-currency_span'),
		currencyInput 	= $('.calculation__form__slider__item__group input'),
		banner		= $('.banners__list'),
		bannerLeft	= $('.banners__controller__left'),
		bannerRight	= $('.banners__controller__right'),
		banks	= $('.banks__list'),
		arrow	= $('.arrow__top')
		header		= $('.header__slider'),
		headerH1	= $('.header__slider__content__offer h1'),
		headerNum	= $('.header__slider__content__offer-number'),
		headerBtn	= $('.header__slider__content__offer-btn'),
		headerImg	= $('.header__slider__content__image'),
		headerSlide	= $('.header__slider__content'),
		headerLeft	= $('.header__controller__left'),
		headerRight	= $('.header__controller__right'),
		headerThis	= $('.header__controller__number-this'),
		headerCount	= $('.header__controller__number-count'),
		headerBurger	= $('.header__top__burger'),
		headerNav		= $('.header__top__nav'),
		news		= $('.news__list'),
		newsThis	= $('.news__controller-this'),
		newsCount	= $('.news__controller-count'),
		calculationSlider	= $('.calculation__form__slider'),
		calculationNext		= $('.calculation__form__next-btn_label'),
		calculationDots		= $('.calculation__form__dots-item'),
		calculationSlide	= $('.calculation__form__slider__item'),
		calculationBtnNext	= $('.calculation__form__next'),
		calculationBtnSubmit= $('.calculation__form__submit'),
		monthlyCash					= $('#monthlyCash'),
		transfersPhysicalPersons	= $('#transfersPhysicalPersons'),
		withdrawalsCurrentAccount	= $('#withdrawalsCurrentAccount'),
		plannedRevenueMonth			= $('#plannedRevenueMonth'),
		numberEmployees				= $('#numberEmployees'),
		numberOutgoingPayments		= $('#numberOutgoingPayments'),
		acquiring					= $('#acquiring'),
		volumeFOT		= $('#volumeFOT'),
		volumeFOTRange	= $('#volumeFOT-range'),
		volumeFOTMin	= $('.calculation__form__slider__item__group-range_min'),
		volumeFOTMax	= $('.calculation__form__slider__item__group-range_max')

	radioBg.css({'width': (100 / Number(radioBg.data('count')))+'%'})

	radioInput.on('click', function(){
		var procent = 0,
			id 		= Number($(this).attr('class'));

		radioLabel.removeClass('active');
		radio.children('label.'+id).addClass('active');

		procent = 100 / id
		radioBg.css({'right': procent+'%'})
	});

	currencyBtn.on('click', function (e) {
		e.preventDefault();
		currencyNumber = (Number($(this).data('currency'))) + 1;

		console.log(currency.length, currencyNumber)
		if (currency.length > currencyNumber) {
			currencySpan.html(currency[currencyNumber]);
			currencyInput.val(currency[currencyNumber]);
			currencyBtn.data('currency',currencyNumber.toString());
		} else {
			currencySpan.html(currency[0]);
			currencyInput.val(currency[0]);
			currencyBtn.data('currency','0');
		}
		
	})

	banner.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
			  breakpoint: 1530,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
				breakpoint: 1000,
				settings: {
				  slidesToShow: 1
				}
			},
		]
	});

	bannerLeft.on('click', function (e) {
		e.preventDefault();
		banner.slick('slickPrev');
	})

	bannerRight.on('click', function (e) {
		e.preventDefault();
		banner.slick('slickNext');
	})

	banks.slick({
		slidesToShow: 8,
		slidesToScroll: 2,
		autoplay: true,
		arrows: false,
		responsive: [
			{
			  breakpoint: 1530,
			  settings: {
				slidesToShow: 6
			  }
			},
			{
				breakpoint: 1200,
				settings: {
				  slidesToShow: 4
				}
			},
			{
				breakpoint: 576,
				settings: {
				  slidesToShow: 2
				}
			}
		]
	});

	arrow.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 500);
	})

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			arrow.addClass('active');
		} else {
			arrow.removeClass('active')
		}
	})

	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 5000,
		centerMode: true,
		centerPadding: '0px'
	});

	headerLeft.on('click', function (e) {
		e.preventDefault();
		header.slick('slickPrev');
	})

	headerRight.on('click', function (e) {
		e.preventDefault();
		header.slick('slickNext');
	})

	headerCount.html(headerSlide.length);

	header.on('beforeChange', function(event, slick, currentSlide){
		headerH1.removeClass('animated fadeInRight');
		headerNum.removeClass('animated fadeInLeft');
		headerBtn.removeClass('animated fadeInRight');
		headerImg.removeClass('animated fadeInUp');
		
		setTimeout(function () {
			headerH1.addClass('animated fadeInRight');
			headerNum.addClass('animated fadeInLeft');
			headerBtn.addClass('animated fadeInRight');
			headerImg.addClass('animated fadeInUp');
		}, 100)
	});

	header.on('afterChange', function(event, slick, currentSlide){
		headerThis.html(currentSlide+1);
		headerCount.html(slick.slideCount);
	});

	news.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		centerMode: true,
		centerPadding: '0px',
		dots: true, 
		appendDots: '.news__controller__lines'
	});

	news.on('afterChange', function(event, slick, currentSlide){
		if ((currentSlide+1) < 10) {
			newsThis.html('0'+(currentSlide+1));	
		} else {
			newsThis.html(currentSlide+1);
		}

		if (slick.slideCount < 10) {
			newsCount.html('0'+slick.slideCount);	
		} else {
			newsCount.html(slick.slideCount);
		}
		
	});

	calculationSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		centerMode: true,
		centerPadding: '0px',
		infinite: false,
		accessibility: false,
		draggable: false,
		swipe: false,
		touchMove: false
	});

	calculationNext.on('click', function (e) {
		e.preventDefault();
		if (calculationSlider.slick('slickGetOption')[0].slick.currentSlide == 1) {

			if (monthlyCash.select2("val") == '' || transfersPhysicalPersons.select2("val") == '' || withdrawalsCurrentAccount.select2("val") == '') {
				if (monthlyCash.select2("val") == '') {
					monthlyCash.parent().addClass('error');
				} 

				if (transfersPhysicalPersons.select2("val") == '') {
					transfersPhysicalPersons.parent().addClass('error');
				} 
				if (withdrawalsCurrentAccount.select2("val") == '') {
					withdrawalsCurrentAccount.parent().addClass('error');
				}
			} else {
				calculationSlider.slick('slickNext');
			}

		} else if (calculationSlider.slick('slickGetOption')[0].slick.currentSlide == 2) {
			
			if (plannedRevenueMonth.select2("val") == '' || numberEmployees.select2("val") == '' || numberOutgoingPayments.select2("val") == '') {

				if (plannedRevenueMonth.select2("val") == '') {
					plannedRevenueMonth.parent().addClass('error');
				}

				if (numberEmployees.select2("val") == '') {
					numberEmployees.parent().addClass('error');
				}
				
				if (numberOutgoingPayments.select2("val") == '') {
					numberOutgoingPayments.parent().addClass('error');
				}

			} else {
				calculationSlider.slick('slickNext');
			}
		} else if (calculationSlider.slick('slickGetOption')[0].slick.currentSlide == 3) {
			if (acquiring.select2("val") == '') {
				acquiring.parent().addClass('error');

			} else {
				calculationSlider.slick('slickNext');
			}
		} else {
			calculationSlider.slick('slickNext');
		}
		
	})

	calculationSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		calculationDots.each(function( index ) {
			if ($(this).hasClass('active')) {
				$(this).addClass('checked');
			}
			if ($(this).data('number') == nextSlide) {
				$(this).addClass('active');
			}
		});
		console.log(currentSlide, nextSlide)
		if (calculationSlide.length == (nextSlide + 1)) {
			calculationBtnNext.hide();
			calculationBtnSubmit.css({'display':'flex'});
		}
	});

	monthlyCash.select2({
		placeholder: 'Выберите'
	}).on('change', function () {
		monthlyCash.parent().removeClass('error');
	});
	transfersPhysicalPersons.select2({
		placeholder: 'Выберите'
	}).on('change', function () {
		transfersPhysicalPersons.parent().removeClass('error');
	});
	withdrawalsCurrentAccount.select2({
		placeholder: 'Выберите'
	}).on('change', function () {
		withdrawalsCurrentAccount.parent().removeClass('error');
	});
	plannedRevenueMonth.select2({
		placeholder: 'Выберите'
	}).on('change', function () {
		plannedRevenueMonth.parent().removeClass('error');
	});
	numberEmployees.select2({
		placeholder: 'Выберите'
	}).on('change', function () {
		numberEmployees.parent().removeClass('error');
	});
	numberOutgoingPayments.select2({
		placeholder: 'Выберите'
	}).on('change', function () {
		numberOutgoingPayments.parent().removeClass('error');
	});
	acquiring.select2({
		placeholder: 'Выберите'
	}).on('change', function () {
		acquiring.parent().removeClass('error');
	});

	volumeFOTRange.slider({
		range: true,
		min: Number(volumeFOTRange.data('min')),
		max: Number(volumeFOTRange.data('max')),
		values: [Number(volumeFOTMin.html()), Number(volumeFOTMax.html())],
		slide: function( event, ui ) {
			volumeFOT.val(ui.values[0]+" ₽ — "+ui.values[1]+' ₽');
			volumeFOTMin.html(ui.values[0]);
			volumeFOTMax.html(ui.values[1]);
		}
	});
	volumeFOT.val(volumeFOTRange.slider("values", 0)+" ₽ — "+volumeFOTRange.slider("values", 1)+' ₽');

	headerBurger.on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		headerNav.toggleClass('active');
	})
});
