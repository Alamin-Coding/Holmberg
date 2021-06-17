$(function(){
    // 'use strict'
    // VanoBox JS
    $('.venobox').venobox(); 


    // Tesmonials Slider Js
    $('.testi_img_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testi_text_slider',
        arrows:false,
        fade: true,
      });
    $('.testi_text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding:'0px',
        focusOnSelect: true,
        asNavFor: '.testi_img_slider'
      });

})