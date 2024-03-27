$(function(){
    let s1 = 0;
    let s2 = 0;
    let s3 = 0;
    let s4 = 0;
    slide_move1();
    function slide_move1(){
        s1 = 1;
        s2 = 0;
        s3 = 0;
        s4 = 0;

        $('.slide').animate({'left':'0'},500);
    }
    function slide_move2(){
        s1 = 0;
        s2 = 1;
        s3 = 0;
        s4 = 0;
        $('.slide').animate({'left':'-330px'},500);
    }
    function slide_move3(){
        s1 = 0;
        s2 = 0;
        s3 = 1;
        s4 = 0;
        $('.slide').animate({'left':'-660px'},500);
    }
    function slide_move4(){
        s1 = 0;
        s2 = 0;
        s3 = 0;
        s4 = 1;
        $('.slide').animate({'left':'-990px'},500);
    }

    $('.left').click(function(e){
        e.preventDefault();
        if(s1 == 1){
            slide_move4();
        }else if(s2 == 1){
            slide_move1();
        }else if(s3 == 1){
            slide_move2();
        }else if(s4 == 1){
            slide_move3();
        }
    });
    $('.right').click(function(e){
        e.preventDefault();
        if(s1 == 1){
            slide_move2();
        }else if(s2 == 1){
            slide_move3();
        }else if(s3 == 1){
            slide_move4();
        }else if(s4 == 1){
            slide_move1();
        }
    });
//e.slide

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
})