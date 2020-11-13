jQuery(document).ready(function($) {
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots: false,
	    items: 2,
	    margin: 30,
	    autoplay:true,
	});

	$('.magic-box').matchHeight();
	$('.attr-1').matchHeight();
	$('.attr-2').matchHeight();
	$('.attr-3').matchHeight();
	$('.attr-4').matchHeight();
	$('.attr-5').matchHeight();
	$('.attr-6').matchHeight();
	$('.attr-7').matchHeight();
	$('.attr-8').matchHeight();
	$('.attr-9').matchHeight();

  $('#mainHeader').scrollToFixed();
});