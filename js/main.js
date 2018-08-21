$(document).ready(function () {

	$(window).resize(function() {
		$('body').innerWidth($('html').innerWidth());
		$('#sidenav-overlay').innerHeight($('html').innerHeight());
	});
	
		
	
	// dropdown init 
	$(".dropdown-button").dropdown({ hover: true });
	


	// init modals
	$('.modal-trigger').leanModal({
		starting_top: '20%'
	});

	$('.modal-saperavi__close').on('click', function() {
		$('#modal-saperavi').closeModal();
	}); 




	// collapse button init
  	$(".nav-mobile__btn").sideNav({
  		closeOnClick: true
  	});
  	
  	// collapsible init
  	$('.collapsible').collapsible();



	 // slick init
  	$('.masters__slider').slick({
	  	// slidesToShow: 4,
	  	draggable: false,
	  	prevArrow: '<span class="slick-prev"></span>',
	  	nextArrow: '<span class="slick-next"></span>',
	  	adaptiveHeight: true
	 //  	responsive: [
		//     {
		//       breakpoint: 1300,
		//       settings: {
		//         slidesToShow: 3
		//       }
		//     },
		//     {
		//       breakpoint: 820,
		//       settings: {
		//         slidesToShow: 2
		//       }
		//     },
		//     {
		//       breakpoint: 420,
		//       settings: {
		//         slidesToShow: 1
		//       }
		//     }
		// ]
  	});

  	$('.all-work__gallery').slick({
	  	// slidesToShow: 4,
	  	draggable: false,
	  	prevArrow: '<span class="slick-prev"></span>',
	  	nextArrow: '<span class="slick-next"></span>',
	  	responsive: [
		    {
		      breakpoint: 750,
		      settings: 1
		    },
		    {
		      breakpoint: 10000,
		      settings: {
		        slidesToShow: 'unslick'
		      }
		    }
		]
  	});



	 // swipeBox init
	var mastersItem = $('.masters__item');

  	for (var i = 0; i < mastersItem.length; i++) {

	  	$('.masters__item--' + i + ' .masters__item__work__photo').swipebox({
	  		hideBarsDelay: 10000,
	  		loopAtEnd: true
	  	});
  	}


  	$('.all-work__photo').swipebox({
  		hideBarsDelay: 10000,
  		loopAtEnd: true
  	});


  	// matchHeight init
  	$(function() {
	    $('.category__item').matchHeight();
	});

	$(function() {
	    $('.sub-category__item').matchHeight();
	});
	

});