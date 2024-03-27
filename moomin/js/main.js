$(function(){
    
    // setInterval(function(){
    //     $('#btnBox').animate({'top':'-10px'},500,'easeOutCirc',function(){
    //         $('#btnBox').animate({'top':'0'},500,'easeOutCirc')
    //     });
    // },1000);
    let i=0;

    var clicks1 = 0;
    var clicks2 = 0;
    var clicks3 = 0;
    var clicks4 = 0;
    $('.btnIn1').click(function(){
        $('#section1Box').stop().animate({'height':'400px','margin-top':'-200px'},1000);
        mainHide();

    });
    $('.btnIn2').click(function(){
        $('#section2Box').stop().animate({'width':'1000px','margin-left':'-500px'},1000);
        mainHide();
    });
    $('.btnIn3').click(function(){
        $('#section3').stop().animate({'width':'1200px','margin-left':'-600px','height':'600px','margin-top':'-300px'},1000);
        mainHide();

        $('.topText').stop().slideUp(500);
            $('.rightText').stop().slideUp(500);
            $('.bottomText').stop().slideUp(500);
            $('.leftText').stop().slideUp(500);

            clicks4=1;
            clicks1=0;
            clicks2=0;
            clicks3=0;
    });
    $('.btnIn4').click(function(){
        $('#section4').fadeIn(1000);
        mainHide();
        menu1Ani();
        $('.sec4_menu li').removeClass('on');
        $('.menu1').addClass('on');

        $('.sec4Box').stop().fadeOut(500);
        $('.sec4Box1').stop().fadeIn(500);
    });
    $('#sec1Close').click(function(){
        $('#section1Box').stop().animate({'height':'0','margin-top':'0'},500);
        mainShow();
        return false;
    });
    $('#sec2Close').click(function(){
        $('#section2Box').stop().animate({'width':'0','margin-left':'0'},500);
        mainShow();
        return false;
    });
    $('#sec3Close').click(function(){
        $('#section3').stop().animate({'width':'0','margin-left':'0','height':'0','margin-top':'0'},500);
        mainShow();
        return false;
    });
    $('#sec4Close').click(function(){
        $('#section4').fadeOut(500);
        mainShow();
        return false;
    });


    function mainHide(){
        $('#logo').stop().animate({'top':'-200px','opacity':0},1000);
        $('.btnLeft').stop().animate({'left':0,'opacity':0},1000,function(){
            $(this).css('display','none');
        });
        $('.btnRight').stop().animate({'right':0,'opacity':0},1000,function(){
            $(this).css('display','none');
        });
        $('#mainImg').animate({'top':'100%','opacity':0},1000);
        $('#ghost').stop().animate({'left':'-200px','opacity':0},1000,function(){
            $(this).css('display','none');
        });
        $('#cloud').stop().animate({'right':'-200px','opacity':0},1000,function(){
            $(this).css('display','none');
        });
    }


    function mainShow(){
        $('#logo').stop().animate({'top':'-50px','opacity':1},1000);
        $('.btnLeft').css('display','block').stop().animate({'left':'140px','opacity':1},1000);
        $('.btnRight').css('display','block').stop().animate({'right':'140px','opacity':1},1000);
        $('#mainImg').stop().animate({'top':'50%','opacity':1},1000);
        $('#ghost').css('display','block').stop().animate({'left':'-100px','opacity':1},1000);
        $('#cloud').css('display','block').stop().animate({'right':'-100px','opacity':1},1000);
    }



    
    $('#next').click(function(){
        if(i==3){
            $(this).css('display','none');
        }
        $('#prev').css('display','block');
        i++;
        $('#charList').stop().animate({'right':i*350+'px'},500);
        
    });
    $('#prev').click(function(){
        if(i==1){
            $(this).css('display','none');
        }
        $('#next').css('display','block');
        i--;
        $('#charList').stop().animate({'right':i*350+'px'},500);
        
    });



    $('#charList li:nth-child(1)').click(function(){
        $('.charInfo0').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('#charList li:nth-child(2)').click(function(){
        $('.charInfo1').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('#charList li:nth-child(3)').click(function(){
        $('.charInfo2').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('#charList li:nth-child(4)').click(function(){
        $('.charInfo3').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('#charList li:nth-child(5)').click(function(){
        $('.charInfo4').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('#charList li:nth-child(6)').click(function(){
        $('.charInfo5').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('#charList li:nth-child(7)').click(function(){
        $('.charInfo6').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('#charList li:nth-child(8)').click(function(){
        $('.charInfo7').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('.infoClose').click(function(){
        $('.charInfo0').fadeOut(500);
        $('.charInfo1').fadeOut(500);
        $('.charInfo2').fadeOut(500);
        $('.charInfo3').fadeOut(500);
        $('.charInfo4').fadeOut(500);
        $('.charInfo5').fadeOut(500);
        $('.charInfo6').fadeOut(500);
        $('.charInfo7').fadeOut(500);
        $('#black').fadeOut(500);
    });

    $('#sec2Book li:nth-child(1)').click(function(){
        $('.bookInfo0').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('#sec2Book li:nth-child(2)').click(function(){
        $('.bookInfo1').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('#sec2Book li:nth-child(3)').click(function(){
        $('.bookInfo2').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('#sec2Book li:nth-child(4)').click(function(){
        $('.bookInfo3').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('#sec2Book li:nth-child(5)').click(function(){
        $('.bookInfo4').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('#sec2Book li:nth-child(6)').click(function(){
        $('.bookInfo5').fadeIn(1000);
        $('#black').fadeIn(500);
    });
    $('.infoClose1').click(function(){
        $('.bookInfo0').fadeOut(500);
        $('.bookInfo1').fadeOut(500);
        $('.bookInfo2').fadeOut(500);
        $('.bookInfo3').fadeOut(500);
        $('.bookInfo4').fadeOut(500);
        $('.bookInfo5').fadeOut(500);
        $('#black').fadeOut(500);
    });

    
    $('#topTh').click(function(){
        if (clicks1 == 0){
            $('.topText').stop().slideDown(500);
            $('.rightText').stop().slideUp(500);
            $('.bottomText').stop().slideUp(500);
            $('.leftText').stop().slideUp(500);
            clicks1=1;
            clicks2=0;
            clicks3=0;
            clicks4=0;
        } else{
            $('.topText').stop().slideUp(500);
            clicks1=0;
        }
    });
    $('#rightTh').click(function(){
        if (clicks2 == 0){
            $('.rightText').stop().slideDown(500);
            $('.topText').stop().slideUp(500);
            $('.bottomText').stop().slideUp(500);
            $('.leftText').stop().slideUp(500);
            clicks2=1;
            clicks1=0;
            clicks3=0;
            clicks4=0;
        } else{
            $('.rightText').slideUp(500);
            clicks2=0;
        }
    });
    $('#bottomTh').click(function(){
        if (clicks3 == 0){
            $('.bottomText').stop().slideDown(500);
            $('.rightText').stop().slideUp(500);
            $('.topText').stop().slideUp(500);
            $('.leftText').stop().slideUp(500);
            clicks3=1;
            clicks1=0;
            clicks2=0;
            clicks4=0;
        } else{
            $('.bottomText').stop().slideUp(500);
            clicks3=0;
        }
    });
    $('#leftTh').click(function(){
        if (clicks4 == 0){
            $('.leftText').stop().slideDown(500);
            $('.rightText').stop().slideUp(500);
            $('.bottomText').stop().slideUp(500);
            $('.topText').stop().slideUp(500);
            clicks4=1;
            clicks1=0;
            clicks2=0;
            clicks3=0;
        } else{
            $('.leftText').stop().slideUp(500);
            clicks4=0;
        }
    });

    $('.menu1').click(function(){
        $('.sec4_menu li').removeClass('on');
        $(this).addClass('on');

        $('.sec4Box').stop().fadeOut(500);
        $('.sec4Box1').stop().fadeIn(500);

        menu1Ani();
    });
    $('.menu2').click(function(){
        $('.sec4_menu li').removeClass('on');
        $(this).addClass('on');

        $('.sec4Box').stop().fadeOut(500);
        $('.sec4Box2').stop().fadeIn(500);
        menu2Ani();
    });
    $('.menu3').click(function(){
        $('.sec4_menu li').removeClass('on');
        $(this).addClass('on');

        $('.sec4Box').stop().fadeOut(500);
        $('.sec4Box3').stop().fadeIn(500);
        menu3Ani();
    });
    $('.menu4').click(function(){
        $('.sec4_menu li').removeClass('on');
        $(this).addClass('on');

        $('.sec4Box').stop().fadeOut(500);
        $('.sec4Box4').stop().fadeIn(500);

        menu4Ani();
    });

    
    function menu1Ani(){
        $('.boxAni1 li:nth-child(1)').animate({'left':'-100px'},0);
        $('.boxAni1 li:nth-child(1)').animate({'left':'50px'},500);
        $('.boxAni1 li:nth-child(2)').animate({'left':'-100px'},0);
        $('.boxAni1 li:nth-child(2)').animate({'left':'387px'},1000);
        $('.boxAni1 li:nth-child(3)').animate({'left':'-500px'},0);
        $('.boxAni1 li:nth-child(3)').animate({'left':'-200px'},700);
        $('.boxAni1 li:nth-child(4)').animate({'right':'-150px'},0);
        $('.boxAni1 li:nth-child(4)').animate({'right':'30px'},700);
        $('.boxAni1 li:nth-child(5)').animate({'bottom':'750px','right':'-80px'},0);
        $('.boxAni1 li:nth-child(5)').animate({'bottom':'10px','right':'150px'},1500,'easeOutSine');
        $('.boxAni1 li:nth-child(6)').animate({'bottom':'750px','right':'-80px'},0);
        $('.boxAni1 li:nth-child(6)').animate({'bottom':'10px','right':'-10px'},1500,'easeOutSine');
    }
    function menu2Ani(){
        $('.boxAni2 li:nth-child(1)').animate({'left':'-100px'},0);
        $('.boxAni2 li:nth-child(1)').animate({'left':'50px'},500);
        $('.boxAni2 li:nth-child(2)').animate({'left':'-100px'},0);
        $('.boxAni2 li:nth-child(2)').animate({'left':'221px'},1000);
        $('.boxAni2 li:nth-child(3)').animate({'left':'-500px'},0);
        $('.boxAni2 li:nth-child(3)').animate({'left':'-150px'},700);
        $('.boxAni2 li:nth-child(4)').animate({'bottom':'-500px','right':'-80px'},0);
        $('.boxAni2 li:nth-child(4)').animate({'bottom':'-150px','right':'-30px'},700);
        $('.boxAni2 li:nth-child(5)').animate({'bottom':'-500px','right':'-80px'},0);
        $('.boxAni2 li:nth-child(5)').animate({'bottom':'-200px','right':'100px'},1500);
        $('.boxAni2 li:nth-child(6)').animate({'bottom':'-300px','right':'-150px'},0);
        $('.boxAni2 li:nth-child(6)').animate({'bottom':'-100px','right':'150px'},1500);
        $('.boxAni2 li:nth-child(7)').animate({'bottom':'-200px','right':'90px'},0);
        $('.boxAni2 li:nth-child(7)').animate({'bottom':'60px','right':'110px'},1500);
    }
    function menu3Ani(){
        $('.boxAni3 li:nth-child(1)').animate({'left':'-100px'},0);
        $('.boxAni3 li:nth-child(1)').animate({'left':'50px'},500);
        $('.boxAni3 li:nth-child(2)').animate({'left':'-100px'},0);
        $('.boxAni3 li:nth-child(2)').animate({'left':'438px'},1000);
        $('.boxAni3 li:nth-child(3)').animate({'left':'-500px'},0);
        $('.boxAni3 li:nth-child(3)').animate({'left':'-150px'},700);
        $('.boxAni3 li:nth-child(4)').animate({'right':'-80px'},0);
        $('.boxAni3 li:nth-child(4)').animate({'right':'-10px'},700);
        $('.boxAni3 li:nth-child(5)').animate({'right':'-80px'},0);
        $('.boxAni3 li:nth-child(5)').animate({'right':'70px'},700);
        $('.boxAni3 li:nth-child(6)').animate({'right':'-150px'},0);
        $('.boxAni3 li:nth-child(6)').animate({'right':'150px'},700);
        $('.boxAni3 li:nth-child(7)').animate({'bottom':'-200px','left':'600px'},0);
        $('.boxAni3 li:nth-child(7)').animate({'bottom':'0','left':'240px'},1000);
        $('.boxAni3 li:nth-child(8)').animate({'bottom':'-200px','left':'600px'},0);
        $('.boxAni3 li:nth-child(8)').animate({'bottom':'-10px','left':'290px'},1000);
    }
    function menu4Ani(){
        $('.boxAni4 li:nth-child(1)').animate({'left':'-100px'},0);
        $('.boxAni4 li:nth-child(1)').animate({'left':'50px'},500);
        $('.boxAni4 li:nth-child(2)').animate({'left':'-100px'},0);
        $('.boxAni4 li:nth-child(2)').animate({'left':'222px'},1000);
        $('.boxAni4 li:nth-child(3)').animate({'left':'-500px'},0);
        $('.boxAni4 li:nth-child(3)').animate({'left':'-150px'},700);
        $('.boxAni4 li:nth-child(4)').animate({'bottom':'-150px','right':'110px'},0);
        $('.boxAni4 li:nth-child(4)').animate({'bottom':'20px','right':'130px'},700);
        $('.boxAni4 li:nth-child(5)').animate({'bottom':'-150px','right':'110px'},0);
        $('.boxAni4 li:nth-child(5)').animate({'bottom':'20px','right':'0px'},700);
        $('.boxAni4 li:nth-child(6)').animate({'bottom':'-100px','right':'-600px'},0);
        $('.boxAni4 li:nth-child(6)').animate({'bottom':'-160px','right':'180px'},1500);
        $('.boxAni4 li:nth-child(7)').animate({'bottom':'-150px'},0);
        $('.boxAni4 li:nth-child(7)').animate({'bottom':'-30px'},1500);
    }
    

});