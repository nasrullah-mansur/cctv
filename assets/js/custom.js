$(document).ready(function() {
    "use strict";

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

    $('.current-promotion .slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
    });

    $('.testimonial-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
    });

    $('.faq .item > a').on('click', function() {
        let iTag = $(this).children('i');
        if(iTag.hasClass('la-plus')) {
            iTag.removeClass('la-plus').addClass('la-minus');
        } else {
            iTag.addClass('la-plus').removeClass('la-minus');
        }
        $(this).toggleClass('active');
    })
});