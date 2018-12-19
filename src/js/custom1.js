import React, { Component } from 'react';
import $ from 'jquery';

class Custom extends Component {
	state = {  }

	componentDidMount() {
		/* ----------------------------------------------------------- */
	/*  Mobile Menu
	/* ----------------------------------------------------------- */

	$(".nav.navbar-nav li a").on("click", function() { 
		$(this).parent("li").find(".dropdown-menu").slideToggle();
		$(this).find("li i").toggleClass("fa-angle-down fa-angle-up");
	});


	$('.nav-tabs[data-toggle="tab-hover"] > li > a').hover( function(){
    	$(this).tab('show');
	});


	/* ----------------------------------------------------------- */
  	/*  Site search
  	/* ----------------------------------------------------------- */



	 $('.nav-search').on('click', function () {
		 $('.search-block').fadeIn(350);
	});

	 $('.search-close').on('click', function(){
			  $('.search-block').fadeOut(350);
	 });



  	/* ----------------------------------------------------------- */
  	/*  Owl Carousel
  	/* ----------------------------------------------------------- */

  	//Trending slide

  	$(".trending-slide").owlCarousel({

			loop:true,
			animateIn: 'fadeIn',
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			nav:true,
			margin:30,
			dots:false,
			mouseDrag:false,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 1,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:1
			  }
			}

		});


  	//Featured slide

		$(".featured-slider").owlCarousel({

			loop:true,
			animateOut: 'fadeOut',
			autoplay:false,
			autoplayHoverPause:true,
			nav:true,
			margin:0,
			dots:false,
			mouseDrag:true,
			touchDrag:true,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 1,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:1
			  }
			}

		});

		//Latest news slide

		$(".latest-news-slide").owlCarousel({

			loop:false,
			animateIn: 'fadeInLeft',
			autoplay:false,
			autoplayHoverPause:true,
			nav:true,
			margin:30,
			dots:false,
			mouseDrag:false,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 3,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:3
			  }
			}

		});

		//Latest news slide


		//Latest news slide

		$(".more-news-slide").owlCarousel({

			loop:false,
			autoplay:false,
			autoplayHoverPause:true,
			nav:false,
			margin:30,
			dots:true,
			mouseDrag:false,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 1,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:1
			  }
			}

		});

		$(".post-slide").owlCarousel({

			loop:true,
			animateOut: 'fadeOut',
			autoplay:false,
			autoplayHoverPause:true,
			nav:true,
			margin:30,
			dots:false,
			mouseDrag:false,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 1,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:1
			  }
			}

		});

		

	/* ----------------------------------------------------------- */
	/*  Popup
	/* ----------------------------------------------------------- */
	  $(document).ready(function(){

			$(".gallery-popup").colorbox({rel:'gallery-popup', transition:"fade", innerHeight:"500"});

			$(".popup").colorbox({iframe:true, innerWidth:600, innerHeight:400});

	  });

	
	/* ----------------------------------------------------------- */
	/*  Contact form
	/* ----------------------------------------------------------- */

	$('#contact-form').submit(function(){

		var $form = $(this),
			$error = $form.find('.error-container'),
			action  = $form.attr('action');

		$error.slideUp(750, function() {
			$error.hide();

			var $name = $form.find('.form-control-name'),
				$email = $form.find('.form-control-email'),
				$subject = $form.find('.form-control-subject'),
				$message = $form.find('.form-control-message');

			$.post(action, {
					name: $name.val(),
					email: $email.val(),
					subject: $subject.val(),
					message: $message.val()
				},
				function(data){
					$error.html(data);
					$error.slideDown('slow');

					if (data.match('success') != null) {
						$name.val('');
						$email.val('');
						$subject.val('');
						$message.val('');
					}
				}
			);

		});

		return false;

	});


	/* ----------------------------------------------------------- */
	/*  Back to top
	/* ----------------------------------------------------------- */

		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				 $('#back-to-top').fadeIn();
			} else {
				 $('#back-to-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-to-top').on('click', function () {
			 $('#back-to-top').tooltip('hide');
			 $('body,html').animate({
				  scrollTop: 0
			 }, 800);
			 return false;
		});
		
		$('#back-to-top').tooltip('hide');
	}

	render() {
		return (
			<>
			</>
		);
	}
}

export default Custom;


