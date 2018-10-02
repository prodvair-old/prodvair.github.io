"use strict";
/* ThemeVariables */
var ns = 700, ms = 500;
/* Functions */

function youtubeResize() {
    $('.youtube-video').height($(this).width() / (560 / 315));
};

function videoPause() {
    $("iframe").each(function() {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
};

function scrollWidth() {
    var div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var s = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return s;
};
// document.ready
$(document).ready(function() {
    // mobileNav
    $('#mobileButt').on('click', function() { $('body').toggleClass('mobile-menu-open'); });
    $('body').click(function(e) {
        if ($(e.target).closest('#mobileButt').length == 0) {
            if ($(e.target).closest('#headerNav').length == 0) {
                if ($(e.target).closest('.tip').length == 0) {
                    $('body').removeClass('mobile-menu-open');
                    $('.js-tip').popup('hide');
                }
            }
        }
    });
    // window.scroll
    $(window).on('scroll', function() {
        $('.js-tip').popup('hide');
    });
    // smoothScroll
    smoothScroll.init({
        selector: '.nav a:not(.tip__open)',
        selectorHeader: '#header',
        easing: 'easeInOutCubic',
        speed: 700,
        offset: -5
    });
    // timers
    $('#timer').countdown('2019/04/31', function(event) {
            $(this).html(event.strftime('' +
                '<div class="item"><div class="big">%D<span></span></div><div class="small">дней<span></span></div></div>' +
                '<div class="item"><div class="big">%H<span></span></div><div class="small">часов<span></span></div></div>' +
                '<span class="pin">:</span>' +
                '<div class="item"><div class="big">%M<span></span></div><div class="small">минут<span></span></div></div>' +
                '<span class="pin">:</span>' +
                '<div class="item"><div class="big">%S<span></span></div><div class="small">секунд<span></span></div></div>'
            ));
        })
        .on('update.countdown', function() {
            $(this).toggleClass('flash');
        })
        .countdown('start');
    // slick
    $('#programmOwl').slick({
        arrows: true,
        dots: false,
        speed: 500,
        infinite: true,
        autoplay: false,
        adaptiveHeight: false,
        variableWidth: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    adaptiveHeight: true,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.js-gallery').lightGallery({
        selector: '.item',
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false
    });
    $('#photosOwl').slick({
        arrows: true,
        dots: false,
        speed: 500,
        infinite: true,
        autoplay: false,
        variableWidth: true
    });
    $('.js-tip-left').popup({
        type: 'tooltip',
        transition: 'all 0.3s',
        vertical: 'center',
        horizontal: 'left',
        detach: true,
        keepfocus: false
    });
    $('.js-tip-right').popup({
        type: 'tooltip',
        transition: 'all 0.3s',
        vertical: 'center',
        horizontal: 'right',
        detach: true,
        keepfocus: false
    });
    $('.regTip_open').on('mouseover', function() {
        $('.js-tip-right').popup('show');
    });
});
// window.load
$(window).on('load', function() {
    $('#preloader').fadeOut();
});
// window.load-scroll
$(window).on('load scroll', function() {
    // fixed header
    var scrollTop = $(this).scrollTop(),
        head = $('#header'),
        headTop = head.offset().top;
    if (scrollTop > 0) head.addClass('fixed');
    else {
    	head.removeClass('fixed');
    	$('body').removeClass('mobile-menu-open')
    }
});
// window.load-resize
$(window).on('load resize', function() {
    // hacks
    if (($(window).innerWidth() + scrollWidth()) <= ns) $('body').addClass('m' + ns);
    else $('body').removeClass('m' + ns);
    if (($(window).innerWidth() + scrollWidth()) <= ms) $('body').addClass('m' + ms);
    else $('body').removeClass('m' + ms);
});
// window.resize
$(window).on("resize", function() {});