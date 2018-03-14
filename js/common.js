$(".bar").on('click', function (e) {
	e.preventDefault();
	$('.head-line').toggleClass("fixed container");
	$('.mmenu').toggleClass("mmenu-active");
	$('.logo').toggleClass("d-none");
	$('.mlogo').toggleClass("d-none");
	$('.bar').toggleClass("m-active");
});

$(".menu a").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $(".menu a").removeClass('active');
        $(".menu a[href^='"+id+"']").addClass('active');
        if (($(window).width() < 992) && (!$(this).hasClass('footer__menu__ul__li__a'))) {
			$('.head-line').toggleClass("fixed container");
        	$('.mmenu').toggleClass("mmenu-active");
        	$('.logo').toggleClass("d-none");
			$('.mlogo').toggleClass("d-none");
			$('.bar').toggleClass("m-active");
        }
        $('body,html').animate({scrollTop: top}, 1000);
});

$(window).scroll(function () {
	scrollCheck();
});

function scrollCheck() {
	
	var home = $('#home').position(),
        info = $('#info').position(),
        services = $('#services').position(),
        adventages = $('#adventages').position(),
        contacts = $('#contacts').position(),
        c = 0;

    if ($(window).width() > 1200) {
    	c = 50;
    }

    if ($(this).scrollTop() >= home.top) {
        $(".menu a").removeClass('active');
        $(".menu a[href^='#home']").addClass('active');
    }
    if ($(this).scrollTop() >= info.top) {
        $(".menu a").removeClass('active');
        $(".menu a[href^='#info']").addClass('active');
    }
    if ($(this).scrollTop() >= services.top) {
        $(".menu a").removeClass('active');
        $(".menu a[href^='#services']").addClass('active');
    }
    if ($(this).scrollTop() >= adventages.top) {
        $(".menu a").removeClass('active');
        $(".menu a[href^='#adventages']").addClass('active');
    }
    if ($(this).scrollTop() >= (contacts.top - c)) {
        $(".menu a").removeClass('active');
        $(".menu a[href^='#contacts']").addClass('active');
    }
}