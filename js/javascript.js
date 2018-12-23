//==============================
// GLOBAL VARIABLES
//==============================
let menuHeight = $('.main-menu').outerHeight();


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


  // HAMBURGER MENU
  hamburgerMenu: function() {
    $('.hamburger').on('click', function() {
      $(this).toggleClass('is-active');
    });
  },


  // SIDE MENU
  sideMenu: function() {
    $('.side-menu .items > li > a').on('click', function(event) {
      if ($(this).next().length > 0) {
        event.preventDefault();
        $(this).toggleClass('active').parent().siblings().find('.active').removeClass('active');
      }
    });
  },


  // INIT
  init: function() {
    this.tooltips();
    this.hamburgerMenu();
    this.sideMenu();
  }

}


//==============================
// THEME FUNCTIONS CALL
//==============================
$(document).ready(function() {
  themeFunctions.init();
});
