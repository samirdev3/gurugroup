/** hamburger */
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("overlay");
let open = false;
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

$(document).ready(function(){
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
    if($(window).width() < 768){
        var winHeight = $(window).height();
        $('.hero_video').css({'height': winHeight+'px', 'width': (winHeight*1.8)+'px'});
    }
});