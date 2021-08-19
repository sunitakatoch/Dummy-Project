$( document ).ready(function() {
    console.log( "hey I'm Ready!" );
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
          $("nav").addClass("fixed");
        } else {
          $("nav").removeClass("fixed");
        }
      });
});