$(function(){
    $('.top').click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
    $(window).scroll(function() {
        let st = $(this).scrollTop();
                    if (st> 500) {
                        $('.top').fadeIn();
                    } else {
                        $('.top').fadeOut();
                    }
    });
    //e.top_bt

    $('.hiden_icon i').click(function(e){
        e.preventDefault();
        $('.m_nav').stop().animate({'width':'50vw'});
    });
    $('.menu_icon').click(function(e){
        e.preventDefault();
            $('.m_nav').stop().animate({'width':'0vw'});
    });
    //e.header
});