$(document).ready(function() {

  /* For the sticky navigation */
  $('.js--section-about').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  
  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--scroll-start').click(function () {
    $('html, body').animate({scrollTop: $('.js--here-at').offset().top}, 1000); 
 });
 
 /** nav auto scroll */
 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

  /* Mobile navigation */
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    nav.slideToggle(200);
    
    if (icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }        
  });

});