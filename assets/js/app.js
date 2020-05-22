window.onscroll = function() { stickToTop()}
let bottom_nav = document.querySelector('.header-nav-bottom'),
    header_top = document.querySelector('.header-top'),
    navbar_logo = document.querySelector('.header-logo'),
    weather_info = document.querySelector('.weather-info');
let sticky = bottom_nav.offsetTop;

function stickToTop() {
    if(window.pageYOffset > sticky) {
       weather_info.classList.add('d-none');
       bottom_nav.classList.add('d-none');
       navbar_logo.classList.add('fixed');
    }
    else {
        weather_info.classList.add('d-none');
        bottom_nav.classList.add('d-none');
        navbar_logo.classList.add('fixed');
    }
}