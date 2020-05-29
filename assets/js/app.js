
let distance = $(".header-nav-bottom").offset().top;

$(window).scroll( function() {
      if($(window).scrollTop() >= distance){
          $(".weather-info").removeClass("d-lg-flex").addClass('d-lg-none');
          $(".header-nav-bottom").removeClass('d-lg-block');
          $(".header-top").addClass('fixed');
          $(".header-react").removeClass('align-self-end');
          $(".header-humberger").removeClass('d-lg-none');
      }
      else {
        $(".weather-info").removeClass("d-lg-none").addClass('d-lg-flex');
        $(".header-nav-bottom").addClass('d-lg-block');
        $(".header-top").removeClass('fixed');
        $(".header-react").addClass('align-self-end');
        $(".header-humberger").addClass('d-lg-none');
      }
    });