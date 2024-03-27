$(function(){
    let tb1h = $('.text_box1').offset().top;
    let tb2h = $('.text_box2').offset().top;
    let tb3h = $('.text_box3').offset().top;

    let tc1h = $('.text_cc1').offset().top;
    let tc2h = $('.text_cc2').offset().top;
    let tc3h = $('.text_cc3').offset().top;

    let se3h = $('#section3').offset().top;
    
    let tb1 = 1;
    let tb2 = 1;
    let tb3 = 1;
    let tc1 = 1;
    let tc2 = 1;
    let tc3 = 1;
    let se3 = 1;

    let tbT1 = $('.text_box1').position().top;
    let tbT2 = $('.text_box2').position().top;
    let tbT3 = $('.text_box3').position().top;

    $('.content h1').animate({'opacity':0,'left':'-50px'},0);
    $('.content .bg').animate({'opacity':0,'right':'-50px'},0);
    $('.content .bg2').animate({'opacity':0,'right':'-50px'},0);

    $('.content h1').animate({'opacity':1,'left':'0'},700);
    $('.content .bg').animate({'opacity':1,'right':'0'},700);
    $('.content .bg2').animate({'opacity':1,'right':'0'},700);

    $(window).scroll(function(){
        let st = $(this).scrollTop();

        if(st>tb1h-700){
            if(tb1==1){
                $('.text_box1').animate({'opacity':'1','top':tbT1-30+'px'},1000);
                tb1=0;
            }
        }
        if(st>tb2h-700){
            if(tb2==1){
                $('.text_box2').animate({'opacity':'1','top':tbT2-30+'px'},1000);
                tb2=0;
            }
        }
        if(st>tb3h-700){
            if(tb3==1){
                $('.text_box3').animate({'opacity':'1','top':tbT3-30+'px'},1000);
                tb3=0;
            }
        }
        if(st>tc1h-700){
            if(tc1==1){
                $('.text_cc1').animate({'opacity':'1','top':'375px'},1000);
                tc1=0;
            }
        }
        if(st>tc2h-700){
            if(tc2==1){
                $('.text_cc2').animate({'opacity':'1','top':'795px'},1000);
                tc2=0;
            }
        }
        if(st>tc3h-700){
            if(tc3==1){
                $('.text_cc3').animate({'opacity':'1','top':'1340px'},1000);
                tc3=0;
            }
        }
        if(st>se3h-800){
            if(se3==1){
                $('#section3').animate({'opacity':'1','bottom':'0px'},1000);
                se3=0;
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