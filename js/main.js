$(".menu a, .down, .up, .mmenu a").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('.menu .check').addClass("hide");
        $('.mmenu').addClass("colse");
        $('.bar i').removeClass("fa-times");
        $('.bar i').addClass("fa-bars");
        $('.menu').removeClass("flipInX");
        $('.mmenu').removeClass("fadeInRight");
        $('body,html').animate({scrollTop: top}, 1000);
});

if($(window).width() <= 1024) {
        $(".menu-line .bar").on("click", function (event) {
                event.preventDefault();
                $('.menu-line .mmenu').toggleClass("close");
                $('.menu-line .mmenu ul').toggleClass("fadeInleft");
                $('.menu-line i').toggleClass("fa-bars fa-times");
        });
}
else {
        $(".menu-line .bar").on("click", function (event) {
                event.preventDefault();
                $('.menu-line .menu .check').toggleClass("hide");
                $('.menu-line .menu').toggleClass("flipInX");
                $('.menu-line i').toggleClass("fa-bars fa-times");
        });
}

$(".header__menu .bar").on("click", function (event) {
        event.preventDefault();
        $('.header__menu .menu .check').toggleClass("hide");
        $('.header__menu .menu').toggleClass("flipInX");
        $('.header__menu i').toggleClass("fa-bars fa-times");
});

$(window).scroll(function () {
        var home = $('#home').position(),
            start = $('#start').position(),
            profile = $('#profile').position(),
            tools = $('#tools').position(),
            skill = $('#skill').position(),
            jobe = $('#jobe').position(),
            contacts = $('#contacts').position();

        if($(this).scrollTop() > $(window).height()){
            $('.menu-line').addClass('fixed');
            $('.up').addClass('visible');
            $('.up').addClass('fadeInRight');
        }
        else if ($(this).scrollTop() < $(window).height()){
            $('.menu-line').removeClass('fixed');
            $('.up').removeClass('visible');
            $('.up').removeClass('fadeInRight');
        }

        if ($(this).scrollTop() >= (home.top - $('.menu-line').height())) {
                $('.menu a, .mmenu a').removeClass('active');
                $('.h').addClass('active');
        }
        if ($(this).scrollTop() >= (profile.top - $('.menu-line').height() - 30)) {
                $('.menu a, .mmenu a').removeClass('active');
                $('.p').addClass('active');
        }
        if ($(this).scrollTop() >= (tools.top - $('.menu-line').height())) {
                $('.menu a, .mmenu a').removeClass('active');
                $('.t').addClass('active');
        }
        if ($(this).scrollTop() >= (skill.top - $('.menu-line').height())) {
                $('.menu a, .mmenu a').removeClass('active');
                $('.s').addClass('active');
        }
        if ($(this).scrollTop() >= (jobe.top - $('.menu-line').height())) {
                $('.menu a, .mmenu a').removeClass('active');
                $('.j').addClass('active');
        }
        if ($(this).scrollTop() >= (contacts.top - $('.menu-line').height() - 10)) {
                $('.menu a, .mmenu a').removeClass('active');
                $('.c').addClass('active');
        }
});

$('.show-form-yallow, .show-form').magnificPopup({
   type: 'inline',
   focus: '#name'
});

$(".white-popup form").submit(function() { //Change
   var th = $(this);
   $.ajax({
      type: "POST",
      url: "mail/mail.php", //Change
      data: th.serialize()
   }).done(function() {
      alert('work');
      setTimeout(function() {
         // Done Functions
         th.trigger("reset");
      }, 1000);
   });
   return false;
});
