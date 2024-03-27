$(function(){
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