$(function(){

    main();
    function main(){
        $('.main_inner').animate({'top': '100%'},0);
        $('.main_inner').animate({'top': '8%'},1500);
    }
    //e.main

    let s1 = 0;
    let s2 = 0;
    let s3 = 0;
    
    $('.slide1').animate({'left':'0'},0);
    $('.slide2').animate({'left':'100%'},0);
    $('.slide3').animate({'left':'200%'},0);
    slide_move1();
    function slide_move1(){
        s1 = 1;
        s2 = 0;
        s3 = 0;

        $('.slide1').animate({'left':'0'},1500);
        $('.slide2').animate({'left':'100%'},1500);
        $('.slide3').animate({'left':'200%'},1500);
    }
    function slide_move2(){
        s1 = 0;
        s2 = 1;
        s3 = 0;

        $('.slide1').animate({'left':'-100%'},1500);
        $('.slide2').animate({'left':'0'},1500);
        $('.slide3').animate({'left':'100%'},1500);
    }
    function slide_move3(){
        s1 = 0;
        s2 = 0;
        s3 = 1;

        $('.slide1').animate({'left':'-200%'},1500);
        $('.slide2').animate({'left':'-100%'},1500);
        $('.slide3').animate({'left':'0'},1500);
    }
    $('.slide_left').click(function(e){
        e.preventDefault();
        if(s1 == 1){
            slide_move3();
        }else if(s2 == 1){
            slide_move1();
        }else if(s3 == 1){
            slide_move2();
        }
    });
    $('.slide_right').click(function(e){
        e.preventDefault();
        if(s1 == 1){
            slide_move2();
        }else if(s2 == 1){
            slide_move3();
        }else if(s3 == 1){
            slide_move1();
        }
    });
    //e.slide

    bar_ani1();
    function bar_ani1(){
        $('.g_in1 .bar1').animate({'width': '0'},0);
        $('.g_in1 .bar1').animate({'width': '50px'},1500);
        $('.g_in1 .bar2').animate({'width': '0'},0);
        $('.g_in1 .bar2').animate({'width': '150px'},1500);
        $('.g_in1 .bar3').animate({'width': '0'},0);
        $('.g_in1 .bar3').animate({'width': '200px'},1500);
        $('.g_in1 .bar4').animate({'width': '0'},0);
        $('.g_in1 .bar4').animate({'width': '200px'},1500);
        $('.g_in1 .bar5').animate({'width': '0'},0);
        $('.g_in1 .bar5').animate({'width': '50px'},1500);
    }
    function bar_ani2(){
        $('.g_in2 .bar1').animate({'width': '0'},0);
        $('.g_in2 .bar1').animate({'width': '200px'},1500);
        $('.g_in2 .bar2').animate({'width': '0'},0);
        $('.g_in2 .bar2').animate({'width': '100px'},1500);
        $('.g_in2 .bar3').animate({'width': '0'},0);
        $('.g_in2 .bar3').animate({'width': '220px'},1500);
        $('.g_in2 .bar4').animate({'width': '0'},0);
        $('.g_in2 .bar4').animate({'width': '100px'},1500);
        $('.g_in2 .bar5').animate({'width': '0'},0);
        $('.g_in2 .bar5').animate({'width': '80px'},1500);
    }
    function bar_ani3(){
        $('.g_in3 .bar1').animate({'width': '0'},0);
        $('.g_in3 .bar1').animate({'width': '100px'},1500);
        $('.g_in3 .bar2').animate({'width': '0'},0);
        $('.g_in3 .bar2').animate({'width': '80px'},1500);
        $('.g_in3 .bar3').animate({'width': '0'},0);
        $('.g_in3 .bar3').animate({'width': '150px'},1500);
        $('.g_in3 .bar4').animate({'width': '0'},0);
        $('.g_in3 .bar4').animate({'width': '190px'},1500);
        $('.g_in3 .bar5').animate({'width': '0'},0);
        $('.g_in3 .bar5').animate({'width': '20px'},1500);
    }
    function bar_ani4(){
        $('.g_in4 .bar1').animate({'width': '0'},0);
        $('.g_in4 .bar1').animate({'width': '30px'},1500);
        $('.g_in4 .bar2').animate({'width': '0'},0);
        $('.g_in4 .bar2').animate({'width': '180px'},1500);
        $('.g_in4 .bar3').animate({'width': '0'},0);
        $('.g_in4 .bar3').animate({'width': '190px'},1500);
        $('.g_in4 .bar4').animate({'width': '0'},0);
        $('.g_in4 .bar4').animate({'width': '250px'},1500);
        $('.g_in4 .bar5').animate({'width': '0'},0);
        $('.g_in4 .bar5').animate({'width': '90px'},1500);
    }
    function bar_ani5(){
        $('.g_in5 .bar1').animate({'width': '0'},0);
        $('.g_in5 .bar1').animate({'width': '130px'},1500);
        $('.g_in5 .bar2').animate({'width': '0'},0);
        $('.g_in5 .bar2').animate({'width': '150px'},1500);
        $('.g_in5 .bar3').animate({'width': '0'},0);
        $('.g_in5 .bar3').animate({'width': '10px'},1500);
        $('.g_in5 .bar4').animate({'width': '0'},0);
        $('.g_in5 .bar4').animate({'width': '20px'},1500);
        $('.g_in5 .bar5').animate({'width': '0'},0);
        $('.g_in5 .bar5').animate({'width': '30px'},1500);
    }
    function bar_ani6(){
        $('.g_in6 .bar1').animate({'width': '0'},0);
        $('.g_in6 .bar1').animate({'width': '130px'},1500);
        $('.g_in6 .bar2').animate({'width': '0'},0);
        $('.g_in6 .bar2').animate({'width': '70px'},1500);
        $('.g_in6 .bar3').animate({'width': '0p'},0);
        $('.g_in6 .bar3').animate({'width': '80px'},1500);
        $('.g_in6 .bar4').animate({'width': '0'},0);
        $('.g_in6 .bar4').animate({'width': '50px'},1500);
        $('.g_in6 .bar5').animate({'width': '0'},0);
        $('.g_in6 .bar5').animate({'width': '250px'},1500);
    }
    function bar_ani7(){
        $('.g_in7 .bar1').animate({'width': '0'},0);
        $('.g_in7 .bar1').animate({'width': '30px'},1500);
        $('.g_in7 .bar2').animate({'width': '0'},0);
        $('.g_in7 .bar2').animate({'width': '90px'},1500);
        $('.g_in7 .bar3').animate({'width': '0p'},0);
        $('.g_in7 .bar3').animate({'width': '50px'},1500);
        $('.g_in7 .bar4').animate({'width': '0'},0);
        $('.g_in7 .bar4').animate({'width': '50px'},1500);
        $('.g_in7 .bar5').animate({'width': '0'},0);
        $('.g_in7 .bar5').animate({'width': '130px'},1500);
    }
    function bar_ani8(){
        $('.g_in8 .bar1').animate({'width': '0'},0);
        $('.g_in8 .bar1').animate({'width': '130px'},1500);
        $('.g_in8 .bar2').animate({'width': '0'},0);
        $('.g_in8 .bar2').animate({'width': '200px'},1500);
        $('.g_in8 .bar3').animate({'width': '0p'},0);
        $('.g_in8 .bar3').animate({'width': '60px'},1500);
        $('.g_in8 .bar4').animate({'width': '0'},0);
        $('.g_in8 .bar4').animate({'width': '150px'},1500);
        $('.g_in8 .bar5').animate({'width': '0'},0);
        $('.g_in8 .bar5').animate({'width': '70px'},1500);
    }
    function bar_ani9(){
        $('.g_in9 .bar1').animate({'width': '0'},0);
        $('.g_in9 .bar1').animate({'width': '20px'},1500);
        $('.g_in9 .bar2').animate({'width': '0'},0);
        $('.g_in9 .bar2').animate({'width': '90px'},1500);
        $('.g_in9 .bar3').animate({'width': '0p'},0);
        $('.g_in9 .bar3').animate({'width': '110px'},1500);
        $('.g_in9 .bar4').animate({'width': '0'},0);
        $('.g_in9 .bar4').animate({'width': '50px'},1500);
        $('.g_in9 .bar5').animate({'width': '0'},0);
        $('.g_in9 .bar5').animate({'width': '70px'},1500);
    }
    function bar_ani10(){
        $('.g_in10 .bar1').animate({'width': '0'},0);
        $('.g_in10 .bar1').animate({'width': '80px'},1500);
        $('.g_in10 .bar2').animate({'width': '0'},0);
        $('.g_in10 .bar2').animate({'width': '110px'},1500);
        $('.g_in10 .bar3').animate({'width': '0p'},0);
        $('.g_in10 .bar3').animate({'width': '190px'},1500);
        $('.g_in10 .bar4').animate({'width': '0'},0);
        $('.g_in10 .bar4').animate({'width': '200px'},1500);
        $('.g_in10 .bar5').animate({'width': '0'},0);
        $('.g_in10 .bar5').animate({'width': '250px'},1500);
    }
    function bar_ani11(){
        $('.g_in11 .bar1').animate({'width': '0'},0);
        $('.g_in11 .bar1').animate({'width': '160px'},1500);
        $('.g_in11 .bar2').animate({'width': '0'},0);
        $('.g_in11 .bar2').animate({'width': '100px'},1500);
        $('.g_in11 .bar3').animate({'width': '0p'},0);
        $('.g_in11 .bar3').animate({'width': '105px'},1500);
        $('.g_in11 .bar4').animate({'width': '0'},0);
        $('.g_in11 .bar4').animate({'width': '50px'},1500);
        $('.g_in11 .bar5').animate({'width': '0'},0);
        $('.g_in11 .bar5').animate({'width': '140px'},1500);
    }
    function bar_ani12(){
        $('.g_in12 .bar1').animate({'width': '0'},0);
        $('.g_in12 .bar1').animate({'width': '20px'},1500);
        $('.g_in12 .bar2').animate({'width': '0'},0);
        $('.g_in12 .bar2').animate({'width': '50px'},1500);
        $('.g_in12 .bar3').animate({'width': '0p'},0);
        $('.g_in12 .bar3').animate({'width': '160px'},1500);
        $('.g_in12 .bar4').animate({'width': '0'},0);
        $('.g_in12 .bar4').animate({'width': '100px'},1500);
        $('.g_in12 .bar5').animate({'width': '0'},0);
        $('.g_in12 .bar5').animate({'width': '80px'},1500);
    }


    $('.slide_ul li').click(function(e){
        e.preventDefault();

        let tit = $(this).children('a').attr('href');
        $('.graphG').removeClass('on');
        $(tit).addClass('on');

        $('.p_in li').fadeOut(0);
        $('.p_in li').fadeIn(1500);

        bar_ani1();
        bar_ani2();
        bar_ani3();
        bar_ani4();
        bar_ani5();
        bar_ani6();
        bar_ani7();
        bar_ani8();
        bar_ani9();
        bar_ani10();
        bar_ani11();
        bar_ani12();
    });
    //e.slide tab

    $('.pattern li').click(function(e){
        e.preventDefault();
        $('.package').fadeOut(0);
        let pat = $(this).children('a').attr('href');
        $(pat).fadeIn(500);
    });

    $('.naming_btn').click(function(e){
        e.preventDefault();
        let nb= $('input.name').val();
        $('.value').html("<p>"+nb+"</p>");
    });
    //package
    
    $(window).on('scroll',function(){
        let art = $('.article2').offset().top;
        let set2 = $('.section2_inner').offset().top;
        let set3 = $('.section3_inner').offset().top;
        let set4 = $('#section4').offset().top;
        let arth = $('.section1_article1').offset().top;

        let st = $(this).scrollTop();  //내현재 스크롤

        if(st>=art-750){
            $('.graph_bg1').animate({'opacity':'1','top':'0'},800);
            $('.graph_bg2').animate({'opacity':'1','top':'0'},800);
        }
        if(st>=set2-300){
            $('.packageG1').animate({'opacity':'1','left':'0'},800);
            $('.packageG2').animate({'opacity':'1','left':'0'},800);
        }

        if(st>=set3-400){
            $('.section3_inner h2').animate({'opacity':'1','top':'0'},800);
            $('.section3_inner p').animate({'opacity':'1','top':'0'},800);
        }
        if(st>=set4-500){
            $('.teammelier_img').animate({'opacity':'1','left':'0'},800);
            $('.store_txt').animate({'opacity':'1','right':'0'},800);
        }
        if(st>=arth-500){
            $('.section1_article1 h2').animate({'opacity':'1','top':'0'},800);
        }

    });
    // scroll

    function bthov_w(){
        $('.slideG_in ul li').mouseleave(function(){
            var sl_p = $(this).children('p');
            $(sl_p).css('background', '#fff').css('border','1px solid #ff7a58').css('color','#ff7a58');
        });
        $('.slideG_in ul li').mouseenter(function(){
            var sl_p = $(this).children('p');
            $(sl_p).css('background','#ff7a58').css('color','#fff');    
        });
    }
    function bthov_m(){
        $('.slideG_in ul li').mouseleave(function(){
            var sl_p = $(this).children('p');
            $(sl_p).css('boder','0').css('color','#444');
        });
        $('.slideG_in ul li').mouseenter(function(){
            var sl_p = $(this).children('p');
            $(sl_p).css('color','#ff7a58').css('border','0');    
        });
    }
    //slide bt

    //윈도우크기
    let width = $(window).width();
    if(width > 414){
        bthov_w();
        $('.bthov_m').css('display','none');
    }else{
        bthov_m();
    }

});