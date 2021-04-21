$(function () {
	'use strict';

	bsCustomFileInput.init();

	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	$('select').niceSelect();

    $(".offers .owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
            	items:4
			}
        }
    });
	$(".specialises .owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
		autoplayTimeout:5500,
        dots:false,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
            	items:4
			}
        }
    });
	$(".doctor-detail .owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
		autoplayTimeout:5500,
        dots:false,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
            	items:4
			}
        }
    });

	// header carousel
	let header_carousel = setInterval(function (){
		let random_image_number = Math.floor(Math.random() * 5) + 1, header = $('header .header');
		header.fadeOut(1000);
		setTimeout(function (){
			header.css('background-image', `url('images/header/header-` + random_image_number + `.jpg')`);
		}, 1000);
		setTimeout(function (){
			header.fadeIn(1000);
		}, 1100);
	}, 5000);

    $('.angle-down a').on('click', function (){
        document.querySelector('.offers').scrollIntoView({behavior: 'smooth'});
    });

    // rotate filter svg on click
    $('.doctors .accordion ul li').on('click', function (){
        $('.doctors .accordion ul li .arrow').removeClass('rotate--90');
        $(this).children('.arrow').toggleClass('rotate--90');
    });


	// show current year on footer
	$('#current-year').text(new Date().getFullYear());

	// replace email input with tel if start by number
    $('.login-form #email-input').on('keyup', function (){
        if(!isNaN($(this).val()[0])){
            this.type = 'tel';
        }
        else {
            this.type = 'email';
        }
    });

});