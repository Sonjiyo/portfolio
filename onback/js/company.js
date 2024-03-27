$(function(){
    // main
    function main(){
        //스크롤
        function actWheel(){
            let height = $(window).height();
            $('.contain').each(function(index){
                $(this).attr("data-index",height * index);
            });
            $('.contain').on('mousewheel',function(e){
                let sectionPos = parseInt($(this).attr('data-index'));
                if(e.originalEvent.wheelDelta >= 0) {
                    $('html, body').stop().animate({scrollTop:sectionPos - height},1500);
                    return false;
                } else if (e.originalEvent.wheelDelta < 0) {
                    $('html, body').stop().animate({scrollTop:sectionPos + height},1500);
                    return false;
                }
            });
        }
        actWheel();

        let sec1 = $('#section1').offset().top;
        let sec2 = $('#section2').offset().top;
        let sec3 = $('#section3').offset().top;
        let sec4 = $('#section4').offset().top;
        let sec5 = $('#section5').offset().top;
        let sec6 = $('#section6').offset().top;

        function removeClass(){
            $('.side a').removeClass('on');
        }
        function addClass(btn){
            $(btn).addClass('on');
        }

        $('.section1_text').stop().animate({'opacity':'1'},1000);
        $(window).on('scroll',function(){
            let scrollBar = $(this).scrollTop();
            function ciReset(){
                $('.section3_ci_1').animate({'width':'0'},0,function(){
                    $('.ci1').animate({'opacity':'0'},0,function(){
                        $('.section3_ci_2').animate({'height':'0'},0,function(){
                            $('.ci2').animate({'opacity':'0'},0,function(){
                                $('.section3_ci_3').animate({'width':'0'},0,function(){
                                    $('.ci3').animate({'opacity':'0'},0)
                                })
                            })
                        })
                    })
                });
            }
            function visionReset(){
                $('.section5_honesty, .section5_happy, .section5_trust').removeClass('on');
                $('.honesty p, .happy p, .trust p').stop().animate({'opacity':'0', 'margin-top':'12%'},0)
            }
            function biReset(){
                $('.section4_bi_logo').fadeOut();
                $('.section4_bi_logo').fadeOut(0,function(){
                    $('.bi1').animate({'opacity':'0'},0);
                    $('.section4_bi_1').animate({'opacity':'0'},0);
                    $('.bi2').animate({'opacity':'0'},0);
                    $('.section4_bi_2').animate({'opacity':'0'},0);
                    $('.bi3').animate({'opacity':'0'},600);
                    $('.section4_bi_3').animate({'opacity':'0'},0);
                });
            }

            if(scrollBar == sec1){
                $('.section1_text').stop().animate({'opacity':'1'},1000);
                ciReset();
                visionReset();
                biReset();

                removeClass();
                addClass('.btn1');
            }
            if(scrollBar == sec2){
                ciReset();
                visionReset();
                biReset();

                removeClass();
                addClass('.btn2');
                $('.section1_text').stop().animate({'opacity':'0'});
            }
            if(scrollBar == sec3){
                $('.section3_ci_1').stop().animate({'width':'228px'},600,function(){
                    $('.ci1').stop().animate({'opacity':'1'},600,function(){
                        $('.section3_ci_2').stop().animate({'height':'228px'},600,function(){
                            $('.ci2').stop().animate({'opacity':'1'},600,function(){
                                $('.section3_ci_3').stop().animate({'width':'228px'},600,function(){
                                    $('.ci3').stop().animate({'opacity':'1'},600)
                                })
                            })
                        })
                    })
                });
                visionReset();
                biReset();

                removeClass();
                addClass('.btn3');
            }
            if(scrollBar == sec4){
                ciReset();
                visionReset();
                $('.section4_bi_logo').fadeIn(600,function(){
                    $('.bi1').animate({'opacity':'1'},600);
                    $('.section4_bi_1').animate({'opacity':'1'},600);
                    $('.bi2').animate({'opacity':'1'},600);
                    $('.section4_bi_2').animate({'opacity':'1'},600);
                    $('.bi3').animate({'opacity':'1'},600);
                    $('.section4_bi_3').animate({'opacity':'1'},600);
                });

                removeClass();
                addClass('.btn3');
            }
            if(scrollBar == sec5){
                ciReset();
                biReset();
                $('.section5_honesty, .section5_happy, .section5_trust').addClass('on');
                $('.honesty p, .happy p, .trust p').stop().animate({'opacity':'1', 'margin-top':'10%'},800)
                removeClass();
                addClass('.btn4');
            }
            if(scrollBar == sec6){
                ciReset();
                visionReset();
                biReset();
                
                removeClass();
                addClass('.btn5');
            }
        });

        //퀵메뉴 클릭
        $('.btn1').click(function(e){
            e.preventDefault();
            let target = $(this).attr('href');
            let targetPosition = $(target).offset().top;
            removeClass();
            addClass('.btn1');
            $('html,body').stop().animate({'scrollTop':targetPosition},1000);
        });
        $('.btn2').click(function(e){
            e.preventDefault();
            let target = $(this).attr('href');
            let targetPosition = $(target).offset().top;
            removeClass();
            addClass('.btn2');
            $('html,body').stop().animate({'scrollTop':targetPosition},1000);
        });
        $('.btn3').click(function(e){
            e.preventDefault();
            let target = $(this).attr('href');
            let targetPosition = $(target).offset().top;
            removeClass();
            addClass('.btn3');
            $('html,body').stop().animate({'scrollTop':targetPosition},1000);
        });
        $('.btn4').click(function(e){
            e.preventDefault();
            let target = $(this).attr('href');
            let targetPosition = $(target).offset().top;
            removeClass();
            addClass('.btn4');
            $('html,body').stop().animate({'scrollTop':targetPosition},1000);
        });
        $('.btn5').click(function(e){
            e.preventDefault();
            let target = $(this).attr('href');
            let targetPosition = $(target).offset().top;
            removeClass();
            addClass('.btn5');
            $('html,body').stop().animate({'scrollTop':targetPosition},1000);
        });

        //section2 slider
        let s1 = 0;
        let s2 = 0;
        slider1();
        function slider1(){
            s1 = 1;
            s2 = 0;
            $('.slide1').animate({'left':'0'},1000);
            $('.slide2').animate({'left':'100%'},1000);
        }
        function slider2(){
            s1 = 0;
            s2 = 1;
            $('.slide1').animate({'left':'-100%'},1000);
            $('.slide2').animate({'left':'0%'},1000);
        }

        $('.btn_left').click(function(e){
            e.preventDefault();
            if(s2 == 1){
                slider1();
            }
            $('.btn_right').fadeIn();
            $(this).fadeOut();
        });
        $('.btn_right').click(function(e){
            e.preventDefault();
            if(s1 == 1){
                slider2();
            }
            $('.btn_left').fadeIn();
            $(this).fadeOut();
        });
    }
    // mobile
    function mobile(){
        // 모바일
        $('.hiden_icon i').click(function(e){
            e.preventDefault();
            $('.m_nav').slideDown(600);
        });
        $('.menu_icon').click(function(e){
            e.preventDefault();
            $('.m_nav').slideUp(600);
        });

        //section2 slider
        let s1 = 0;
        let s2 = 0;
        slider1();
        function slider1(){
            s1 = 1;
            s2 = 0;
            $('.slide1').animate({'left':'0'},1000);
            $('.slide2').animate({'left':'100%'},1000);
        }
        function slider2(){
            s1 = 0;
            s2 = 1;
            $('.slide1').animate({'left':'-100%'},1000);
            $('.slide2').animate({'left':'0%'},1000);
        }
        $('.btn_left').click(function(e){
            e.preventDefault();
            if(s2 == 1){
                slider1();
            }
            $('.btn_right').fadeIn();
            $(this).fadeOut();
        });
        $('.btn_right').click(function(e){
            e.preventDefault();
            if(s1 == 1){
                slider2();
            }
            $('.btn_left').fadeIn();
            $(this).fadeOut();
        });
    }

    //윈도우크기
    let width = $(window).width();
    if(width > 414){
        main();
        $('.m_nav').css('display','none');
    }else{
        mobile();
    }
});