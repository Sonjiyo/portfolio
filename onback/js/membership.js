$(function(){
    $('#section2_con2_wrap').fadeOut(0);
    $('.section2_tit li').click(function(e){
        e.preventDefault();
        $('.section2_tit li a').removeClass('on');
        $(this).children('a').addClass('on');

        $('.section2_container').children('div').fadeOut(0);
        let tg = $(this).children('a').attr('href');
        $(tg).fadeIn();
    });
    // e.tab

    let que = 1;

    $('.answer').slideUp();
    $('.que').click(function(e){
        var q = $(this).children('a').attr('href');
        e.preventDefault();
        if(que==1){
            $('.answer').slideUp(500);
            $(q).slideDown(500);

            que=0;
        } else if(que==0){
            $('.answer').slideUp(500);
            que=1;
        }
        
        
        
    });
    $('.answer').click(function(){
        $(this).slideUp();
    });
    let nav = 1;

    $('.menu_bar').click(function(e){
        e.preventDefault();
        if(nav==1){
            $('.nav').animate({'width':'61%'},500);
            $('.top, .bottom').fadeOut(500);
            $('.middle1, .middle3').addClass('on');

            nav =0;
        } else if(nav==0){
            $('.nav').animate({'width':0},500);
            $('.top, .bottom').fadeIn(500);
            $('.middle1, .middle3').removeClass('on');
            nav=1;
        }
        
    });
});