$(function() {

	$('.header__mmenu__burger').on('click', function (e){
		e.preventDefault();
		$('.header__mmenu__burger').toggleClass('header__mmenu__burger__active');
		$('.header__mmenu').toggleClass('active');
	});

});
