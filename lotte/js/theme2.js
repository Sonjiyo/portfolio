$(function(){
    $('.mainNav ul li a').click(function(){
        let val = $(this).attr('href');
        let pos = $(val).offset().top;

        $('html, body').animate({'scrollTop':pos},600);

        return false;
    });
    //nav 이동

    let sec1 = $('.section1').offset().top;
    let sec2 = $('.section2').offset().top;
    let sec3 = $('.section3').offset().top;
    let sec4 = $('.section4').offset().top;
    let sec6 = $('.section6').offset().top;
    let sec7 = $('.section7').offset().top;
    let sec8 = $('.section8').offset().top;

    $(window).scroll(function(){
        let st = $(this).scrollTop();

        if(st<sec1){
            $('.mainNav ul li').removeClass('on');
        }

        if(st>=sec1-300 && st<sec2){
            $('.mainNav ul li').removeClass('on');
            $('.mainNav ul li').eq(0).addClass('on');
        }
        if(st>=sec2-300 && st<sec3){
            $('.mainNav ul li').removeClass('on');
            $('.mainNav ul li').eq(1).addClass('on');
        }
        if(st>=sec3-300 && st<sec4){
            $('.mainNav ul li').removeClass('on');
            $('.mainNav ul li').eq(2).addClass('on');
        }
        if(st>=sec4-300 && st<sec7){
            $('.mainNav ul li').removeClass('on');
            $('.mainNav ul li').eq(4).addClass('on');
        }
        if(st>sec6-200){
            setInterval(sec6Move,2000);
        }
        if(st>=sec7-300 && st<sec8){
            $('.mainNav ul li').removeClass('on');
            $('.mainNav ul li').eq(5).addClass('on');
        }
        if(st>=sec8-300){
            $('.mainNav ul li').removeClass('on');
            $('.mainNav ul li').eq(6).addClass('on');
        } 
    });
    //nav class on

    $('.mainImg li').eq(2).animate({'color':'#fff'},5000,function(){
        $('.mainImg li').eq(2).fadeOut(800,function(){
            $('.mainImg li').eq(1).animate({'color':'#fff'},5000,function(){
                $('.mainImg li').eq(1).fadeOut(800);
            });
        });
    });
    //main animation

    let liw = $('.sec6con li').width();

    function sec6Move(){
        $('.sec6con').animate({'margin-left':-liw+'px'},800,function(){
            $('.section6 img').animate({'color':'#fff'},2000,function(){
                $('.sec6con').animate({'margin-left':'0px'},800);
            });
        });
    }
    //section6 slide
  
    let sw = $(window).width();

    if(sw<991){
        $('.mainNav').slideUp(0);
    }

    let i = 0;
    $('.hideNav i').click(function(){
        if(i==0){
            $('.mainNav').stop().slideDown(600);
            i=1;
        } else{
            $('.mainNav').stop().slideUp(600);
            i=0;
        }

    });

});