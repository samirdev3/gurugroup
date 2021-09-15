const preloader = document.getElementById('preloader');
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu-fullscreen");
const videosSource = document.querySelectorAll('.pre__video');
let open = false;

/** Mobile Detection */
let isMobile=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(isMobile=!0);

videosSource.forEach(item => {
    let $url = item.getAttribute('data-src');
    if(isMobile){
        $url = $url.replace('.mp4', '-mobile.mp4');
    }
    item.innerHTML = `<video loop="" muted="" playsinline="" autoplay="autoplay"><source src="${$url}" type="video/mp4"></video>`;
});

document.addEventListener("DOMContentLoaded", function(event) {
    const videosList = document.querySelectorAll('.pre__video video');
    const videoStyling = () => {
        const docWidth = document.body.clientWidth;
        const docHeight = `${document.body.clientHeight}px`;
        videosList.forEach(item => {
            item.style.height = docHeight;
            if(item.clientWidth < docWidth){
                item.style.width = `${docWidth}px`;
                item.style.height = 'auto';
            }else{
                item.style.width = 'auto';
            }
            console.log(item);    
        });
    }
    videosList[0].onloadeddata = function(){
        window.addEventListener("load", videoStyling);
    }
    window.addEventListener("resize", videoStyling);
});


$(document).ready(function(){

    /**
     * hamburger 
    */
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

    /**
     * menu hover logic
     */
    var $menuLi = $('#landing .main-menu li');
    $($menuLi).mouseover(function(){
        var $getData = $(this).attr('data-video');
        $menuLi.addClass('dull');
        $(this).removeClass('dull');
        if($getData){
            $('#landing').find('.landing__cover').removeClass('video-active');
            $('#landing').find('.landing__cover.'+$getData).addClass('video-active');
        }
    });
    $($menuLi).mouseout(function(){
        $menuLi.removeClass('dull');
        $('#landing').find('.landing__cover').removeClass('video-active');
        $('#landing').find('.landing__cover.default').addClass('video-active');
    });


});