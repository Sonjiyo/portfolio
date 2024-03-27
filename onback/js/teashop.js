$(function(){
    
    $('.main_txt').animate({'opacity':'1', 'left':'430px'}, 1500);

    $('#tab2, #tab3, #tab4').fadeOut(0);
    $('.tab_h li').click(function(e){
        e.preventDefault();
        $('.tab_h li').children('a').removeClass('on');
        $(this).children('a').addClass('on');

        let tabin = $(this).children('a').attr('href');
        $('.tab').fadeOut(300);
        $(tabin).fadeIn(300);
    });

    let t1h = $('.tab1_1').offset().top;
    let t2h = $('.tab1_2').offset().top;
    let t3h = $('.tab1_3').offset().top;
    let t4h = $('.tab1_4').offset().top;
    let t5h = $('.tab1_5').offset().top;
    let t6h = $('.tab1_6').offset().top;
    let t7h = $('.tab1_7').offset().top;

    $('.tab1_1').animate({'opacity':'0','bottom':'-50px'},0);
    $('.tab1_2').animate({'opacity':'0','bottom':'-50px'},0);
    $('.tab1_3').animate({'opacity':'0','bottom':'-50px'},0);
    $('.tab1_4').animate({'opacity':'0','bottom':'-50px'},0);
    $('.tab1_5').animate({'opacity':'0','bottom':'-50px'},0);
    $('.tab1_6').animate({'opacity':'0','bottom':'-50px'},0);
    $('.tab1_7').animate({'opacity':'0','bottom':'-50px'},0);

    let t1 = 1;
    let t2 = 1;
    let t3 = 1;
    let t4 = 1;
    let t5 = 1;
    let t6 = 1;
    let t7 = 1;

    $(window).scroll(function(){
        let st = $(this).scrollTop();

        if(st>t1h-650){
            if(t1==1){
                $('.tab1_1').animate({'opacity':'1','bottom':0},300);
                t1=0;
            }
        }
        if(st>t2h-650){
            if(t2==1){
                $('.tab1_2').animate({'opacity':'1','bottom':0},300);
                t2=0;
            }
        }
        if(st>t3h-650){
            if(t3==1){
                $('.tab1_3').animate({'opacity':'1','bottom':0},300);
                t3=0;
            }
        }
        if(st>t4h-650){
            if(t4==1){
                $('.tab1_4').animate({'opacity':'1','bottom':0},300);
                t4=0;
            }
        }
        if(st>t5h-650){
            if(t5==1){
                $('.tab1_5').animate({'opacity':'1','bottom':0},300);
                t5=0;
            }
        }
        if(st>t6h-650){
            if(t6==1){
                $('.tab1_6').animate({'opacity':'1','bottom':0},300);
                t6=0;
            }
        }
        if(st>t7h-650){
            if(t7==1){
                $('.tab1_7').animate({'opacity':'1','bottom':0},300);
                t7=0;
            }
        }
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
    //top 버튼
});