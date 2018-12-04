$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.main-nav').addClass('sticky');
            $('.mobile-nav-icon').addClass('sticky-del');
            $('.mobile-nav-icon i').css('color','#676767');
        } else {
            $('.main-nav').removeClass('sticky');
            $('.mobile-nav-icon').removeClass('sticky-del');
            $('.mobile-nav-icon i').css('color','#fff');
        }
    });
});