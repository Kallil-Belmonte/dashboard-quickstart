//==============================
// GLOBAL VARIABLES
//==============================
var menuHeight = $('.main-menu').outerHeight();


//==============================
// THEME FUNCTIONS
//==============================
const themeFunctions = {

  // TOOLTIPS
  tooltips: function() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    })
  },


  // TOP MENU
  topMenu: function() {
    var menuItem = $('.top-menu .menu > li > a');

    $(menuItem).click(function() {
      $(this).parent().toggleClass('active').siblings().removeClass('active').parent().next().find('.profile-area').removeClass('active');
    });

    $('.top-menu .profile-area a').click(function() {
      $(this).parent().parent().prev().find('li').removeClass('active');
    });

    $(window).click(function(event) {
      var target = $(event.target);

      if(!target.is(menuItem)) {
        $('.top-menu .menu li').removeClass('active');
      }
    });
  },


  // HAMBURGER MENU
  hamburgerMenu: function() {
    $('.hamburger').click(function() {
      $(this).toggleClass('is-active');

      $('.side-menu').toggleClass('open-side-menu');
    });

    // Menu
    $('.side-menu .menu > li > a').click(function() {
      $(this).toggleClass('active');
    });
  },


  // INIT
  init: function() {
    this.tooltips();
    this.topMenu();
    this.hamburgerMenu();
  }

}


//==============================
// THEME FUNCTIONS CALL
//==============================
$(document).ready(function() {
  themeFunctions.init();
});
