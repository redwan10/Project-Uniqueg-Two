(function($){
    "use strict";


    // Mobile menu
    jQuery('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    // main slider
    $('.slider-active').owlCarousel({
        loop:true,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // testimonial slider
    $('.testimonial-slider').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        margin: 60,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })



})(jQuery);