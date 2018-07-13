$(function() {

	$('.header__bar__mmenu-burger').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('header__bar__mmenu-burger-active');
		$('.header__bar__mmenu ul').toggleClass('active');
	});

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 50000,
		step: 50,
		values: [ 5000, 45000 ],
		slide: function( event, ui ) {
		$( ".top__filter-null" ).html(ui.values[ 0 ]);
		$( ".top__filter-all" ).html(ui.values[ 1 ]);
		}
	});
	$( ".top__filter-null" ).html( $( "#slider-range" ).slider( "values", 0 ) );
	$( ".top__filter-all" ).html( $( "#slider-range" ).slider( "values", 1 ) );
	

});
