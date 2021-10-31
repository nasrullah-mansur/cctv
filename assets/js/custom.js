$(document).ready(function() {
    // "use strict";

    $('.header .mobile-menu').on('click', function() {
        $('.header .list').slideToggle(200);
        let iTag = $(this).children('i');
        if(iTag.hasClass('la-bars')) {
            iTag.removeClass('la-bars').addClass('la-times');
        } else {
            iTag.addClass('la-bars').removeClass('la-times');
        }
    });

    let topHeaderHeight = $('.header .top').outerHeight();
    $('.header .main-nav').css({
        top: topHeaderHeight
    });

    $(window).on('load', function() {
        $('.preloader').fadeOut();
    });
    
    $(window).on('scroll', function() {        
        let scrollTop = $(this).scrollTop();
        if(scrollTop > topHeaderHeight) {
            $('.header .main-nav').addClass('fixed-top');
        } else {
            $('.header .main-nav').removeClass('fixed-top');
        }

        if(scrollTop > 300) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });

    $('.back-to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0,
        });
    })

    $('.banner .banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="las la-caret-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="las la-caret-right"></i></button>',
    });

    $('.service-page .mobile-toggle .toggler-btn').on('click', function() {
        $('.service-page .toggler-content').slideToggle();
        let iTag = $(this).children('i');
        if(iTag.hasClass('la-arrow-down')) {
            iTag.removeClass('la-arrow-down').addClass('la-arrow-up');
        } else {
            iTag.addClass('la-arrow-down').removeClass('la-arrow-up');
        }
    })

    $('.current-promotion .slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        responsive: [
            {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
            },
            {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });

    $('.testimonial-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        responsive: [
            {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 2,
            }
            },
            {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 1,
            }
            }
        ]
    });

    $('.faq .item > a').on('click', function() {
        let iTag = $(this).children('i');
        if(iTag.hasClass('la-plus')) {
            iTag.removeClass('la-plus').addClass('la-minus');
        } else {
            iTag.addClass('la-plus').removeClass('la-minus');
        }
        $(this).toggleClass('active');
    });

    if( $('.service-page').length > 0 ) {
        $('.service-page .right-side .content ul li').prepend('<i class="las la-check-circle"></i>')
    }


    // form validation;
    if($('.contact-form').length > 0) {
        let submitBtn = $('.contact-form button');
        let inputs = $('.contact-form input, .contact-form textarea');

        submitBtn.on('click', function(e) {            
            Array.from(inputs).forEach(function(data) {
                console.log(data);
                let dataVal = data.value;

                if(dataVal == '') {
                    data.classList.add('is-invalid');
                    e.preventDefault();
                } 
            })
        });

        inputs.on('keyup', function() {
            $(this).removeClass('is-invalid');
        })
        
    }
});