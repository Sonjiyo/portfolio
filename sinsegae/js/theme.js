$(function(){
    $('.leftNavBt').click(function(){
        $('.leftNav').animate({'left':'65px'},300);
        return false;
    });
    $('.close').click(function(){
        $('.leftNav').animate({'left':'-245px'},300);
        return false;
    });
    //왼쪽 메뉴

    let se1 = $('.section1').offset().top;
    let se2 = $('.section2').offset().top;
    let se3 = $('.section3').offset().top;
    let se4 = $('.section4').offset().top;
    let se5 = $('.section5').offset().top;
    let se6 = $('.section6').offset().top;

    $('.leftmenu li').eq(0).click(function(){
        $('html, body').animate({scrollTop : se1}, 600);
    });
    $('.leftmenu li').eq(1).click(function(){
        $('html, body').animate({scrollTop : se2}, 600);
    });
    $('.leftmenu li').eq(2).click(function(){
        $('html, body').animate({scrollTop : se3}, 600);
    });
    $('.leftmenu li').eq(3).click(function(){
        $('html, body').animate({scrollTop : se4}, 600);
    });
    $('.leftmenu li').eq(4).click(function(){
        $('html, body').animate({scrollTop : se5}, 600);
    });
    $('.leftmenu li').eq(5).click(function(){
        $('html, body').animate({scrollTop : se6}, 600);
    });


    let i = 0;
    $('.bannerBtn li').click(function(){
        $('.bannerBtn li').removeClass('on');
        $(this).addClass('on');

        let eq = $(this).index();
        
        i=eq;

        $('.bannerMove').animate({'margin-left':i*-100+'%'},1000);
    });
    let bannerMove = setInterval(banner,3000);
    function banner(){
        if(i<3){
            $('.bannerMove').animate({'margin-left':i*-100+'%'},1000);

            $('.bannerBtn li').removeClass('on');
            $('.bannerBtn li').eq(i).addClass('on');
            i++;
        }
    };
    //슬라이드
    

    $('.sec1List li a').click(function(){
        let boxNum = $(this).attr('href');

        $('.sec1List li').removeClass('on');
        $(this).parent().addClass('on');

        $('.sec1Box1').fadeOut(0);
        $('.sec1Box2').fadeOut(0);
        $('.sec1Box3').fadeOut(0);
        $(boxNum).fadeIn(300);

        return false;
    });
    //탭메뉴

    $('.sec3con li').hover(function(){
        $(this).children('.sec3black').stop().fadeIn(600);

    },
    function(){
        $('.sec3black').stop().fadeOut(600);
    });
    //검은 박스

    $('.sec3teb li a').click(function(){
        let filter = $(this).attr('href');

        $('.sec3teb li').removeClass('on');
        $(this).parent().addClass('on');

        $('.sec3con li').fadeOut(0);
        $(filter).fadeIn(600);

        return false;
    });



    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;

    function plusNum(){
        let numTimer1 = setInterval(plusNum1,100);
        let numTimer2 = setInterval(plusNum2,100);
        let numTimer3 = setInterval(plusNum3,100);
        let numTimer4 = setInterval(plusNum4,100);

        function plusNum1(){
            if(num1<780){
                num1 += 20;
                $('.number1').text(num1);
            } else{
                clearInterval(numTimer1);
            } 
        }
        function plusNum2(){
            if(num2<987){
                num2 += 27;
                $('.number2').text(num2);
            } else{
                clearInterval(numTimer2);
            } 
        }
        function plusNum3(){
            if(num3<350){
                num3 += 8;
                $('.number3').text(num3);
            } else{
                clearInterval(numTimer3);
            } 
        }
        function plusNum4(){
            if(num4<166){
                num4 += 4;
                $('.number4').text(num4);
            } else{
                clearInterval(numTimer4);
            } 
        }
    }
    //올라가는 숫자 



    let sc2 = $('.sec4con2').offset().top;
    let sc1 = $('.section1').offset().top;

    $(window).scroll(function(){
        let st = $(this).scrollTop();

        if(st>sc2-600){
            plusNum();
        }
        if(st>sc1-600){
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    $('.top').click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 600);
        return false;
    });
    
});