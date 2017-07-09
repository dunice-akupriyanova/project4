$(document).ready(function() {
	var $container = $('.images');
	new WOW().init();
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
		controlNav: false, 
		keyboardNav: true,
		slideToStart: 0,
		animationLoop: true,
		pauseOnHover: false,
		slideshowSpeed: 4000, 
	});
	$('.opinions').flexslider({
		animation: "fade",
		directionNav: false,
		controlNav: false, 
		keyboardNav: true,
		slideToStart: 0,
		animationLoop: true,
		pauseOnHover: false,
		slideshowSpeed: 4000, 
	});
	$container.isotope({
	    filter: '*',
	});
	$('.filter label').click(function() {
		$('.filter .active').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		// return false;
	});
	$('.portf').hover(function(){
		$('.portfolioList').slideToggle(200);
	});
	$('.blog').hover(function(){
		$('.blogList').slideToggle(200);
	});
	$('.button').click(function(){
		$(".navigate").slideToggle(200);
	});
});
