
// (function($)
// {
// 	"use strict";
	
	
// 	jQuery(window).on('load', function() {
// 		preloader();
		
// 		console.log(jQuery('.gallery-outer .gallery-items').length);
		
// 		if(jQuery('.gallery-outer .gallery-items').length > 0){
// 			jQuery('.gallery-outer .gallery-items').filterizr();

// 			console.log('ASDASDASDADASDA');

// 		}
// 		jQuery('#filter-list li').on("click", function(){
// 			jQuery('#filter-list li').removeClass('active');
// 			jQuery(this).addClass('active');
// 		});
// 	});
	
	
	
	
// 	function preloader(){
// 		jQuery(".preloaderimg").fadeOut();
// 		jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
// 			jQuery(this).remove();
// 		});
// 	}
	
	
	
// });	


$(document).ready(function(){
	
	preloader();

	if($('.gallery-outer .gallery-items').length > 0){
		$('.gallery-outer .gallery-items').filterizr();

		

	}
	$('#filter-list li').on("click", function(){
		$('#filter-list li').removeClass('active');
		$(this).addClass('active');
	});
	

  });

  function preloader(){
	$(".preloaderimg").fadeOut();
	$(".preloader").delay(200).fadeOut("slow").delay(200, function(){
		$(this).remove();
	});
}
  