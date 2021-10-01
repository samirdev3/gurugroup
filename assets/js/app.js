/**
 * Mobile Detection
 */
let isMobile=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(isMobile=!0);

/**
 * change video source on mobile
 */
const videosSource = document.querySelectorAll('video source');
videosSource.forEach(item => {
    let $url = item.getAttribute('src');
    if(isMobile){
        $url = $url.replace('.mp4', '-mobile.mp4');
    }
    item.setAttribute('src', $url);
});

/**
 * video width & height logic
 */
const videosList = document.querySelectorAll('video');
const videoStyling = () => {
    const docWidth = window.innerWidth;
    const docHeight = window.innerHeight;
    console.log(`${docWidth} ${docHeight}`);
    videosList.forEach(item => {
        if(item.clientWidth <= docWidth){
            item.style.width = `${docWidth}px`;
            item.style.height = 'auto';
        }else{
            item.style.width = 'auto';
            item.style.height = `${docHeight}px`;
        }  
    });
}
window.addEventListener("load", videoStyling);
window.addEventListener("resize", videoStyling);

/**
 * variables
 */
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu-fullscreen");
let open = false;

$(document).ready(function(){

    /** preloader */
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2000);

    /** sticky header */
    $(window).scroll(function(){
        if($(this).scrollTop() > 120){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
    });

    /** hamburger */
    const change = () => {
        if (!open) {
            hamburger.classList.add("open");
            menu.classList.add("menu");
        } else {
            hamburger.classList.remove("open");
            menu.classList.remove("menu");
        }
        open = !open;
    };
    hamburger.addEventListener("click", change);

    /** menu hover logic */
    var $menuLi = $('#landing .main-menu li');
    $($menuLi).mouseover(function(){
        var $getData = $(this).attr('data-video');
        $menuLi.addClass('dull');
        $(this).removeClass('dull').addClass('hover');
        if($getData){
            $('#landing').find('.landing__cover').removeClass('video-active');
            $('#landing').find('.landing__cover.'+$getData).addClass('video-active');
        }
    });
    $($menuLi).mouseout(function(){
        $menuLi.removeClass('dull').removeClass('hover');
        $('#landing').find('.landing__cover').removeClass('video-active');
        $('#landing').find('.landing__cover.default').addClass('video-active');
    });

    /** slider */
    $('#discover-slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('section.two .prev__arrow'),
        nextArrow: $('section.two .next__arrow')
    });
    $('#colab-slide').slick({
        autoplay: true,
        autoplaySpeed: 1800,
        dots: true,
        arrows: false
    });
    $('#gallery-slide').slick({
        autoplay: false,
        autoplaySpeed: 1800,
        prevArrow: $('section.seven .prev__arrow'),
        nextArrow: $('section.seven .next__arrow'),
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });

});