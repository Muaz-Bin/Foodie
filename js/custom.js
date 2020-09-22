$(document).ready(function(){
  // pre loader
  $('#pre-loader').delay(2500).fadeOut(1000);
  // navigation bar animation
  $('.navbar-brand').click(function() {
    $('.navigation-menu,#navigation-bg').addClass('open');
  });
  $('.close-menu,.nav-link').click(function() {
    $('.navigation-menu,#navigation-bg').removeClass('open');
  });
  // carousel
  $('.header-slider').owlCarousel({
    items:1,
    autoplay:true,
    loop:true,
    autoplayTimeout:5000,
    animateOut: "fadeOut",
  });
  $('.testimonial-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    autoplayTimeout:3000,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
      0:{
        items:1,
      },
      576:{
        items:2,
      },
    },
  });
  // wow js initialize
	new WOW().init();
  // mixit up plugin activate
var config = document.querySelector('.my-mix');
 var mixer = mixitup(config);
})
