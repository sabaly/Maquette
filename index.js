!(function($) {
	"use strict";

	$(document).on('click', '.menu-item, .scrollto', function(e) {
	      	e.preventDefault();

		    var target = $(this.hash);

		    if (target.length) {

		        var scrollto = target.offset().top;
		        var scrolled = 20;

		      	if ($('#header').length) {
		          scrollto -= $('#header').outerHeight()

		          if (!$('#header').hasClass('header-scrolled')) {
		            scrollto += scrolled;
		          }
		        }

		        if ($(this).attr("href") == '#header') {
		          scrollto = 0;
		        }

		        $('html, body').animate({
		          scrollTop: scrollto
		        }, 1500, 'easeInOutExpo');

		        return false;
		    } else {
		    	if($(this).attr('href') != undefined)
		    		location.assign($(this).attr('href'));
		    }
	});

	// Toggle .header-scrolled class to #header when page is scrolled
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 100) {
	      $('#header').addClass('header-scrolled');
	    } else {
	      $('#header').removeClass('header-scrolled');
	    }
	});

	//Navigation for mobile
	if($('.menu').length) {
		var $nav = $('.menu').clone().prop({
			class: 'nav-menu d-none'
		});

		$('body main').append($nav);
		$('body main').append('<div class="nav-overly"></div>');

	    $(document).on('click', '.menu-toggle', function(e) {
	        $('body main').toggleClass('nav-active');
	        $('.nav-active .nav-menu').fadeIn(1500);
	        $('.menu-toggle i').toggleClass('icofont-navigation-menu icofont-close');
	        $('.menu-toggle i').css('color', 'red');
	        $('.nav-overly').toggle();
	    });

	    $(document).click(function(e) {
	        var container = $(".menu-toggle, .nav-menu");
	        if (!container.is(e.target) && container.has(e.target).length === 0) {
		        if ($('body main').hasClass('nav-active')) {
			        $('body main').removeClass('nav-active');
			        $('.menu-toggle i').toggleClass('icofont-navigation-menu icofont-close');
			        $('.menu-toggle i').css('color', '#ff007a');
	        		$('.nav-overly').fadeOut(1000);
		        }
	      	}
	    });

	}else if ($(".menu, .menu-toggle").length) {
	    $(".menu, .menu-toggle").hide();
	}
})(jQuery);