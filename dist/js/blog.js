$(document).ready(function() {
	var $containerBlog = $('.posts');
	$containerBlog.isotope({
	    filter: '.latest',
	});
	$('.postsFilter label').click(function() {
		$('.postsFilter .active').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		console.log('postsFilter selector='+selector);
		$containerBlog.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
	});
});