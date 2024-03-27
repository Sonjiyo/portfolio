$(function(){
    // main
    function main(){
        $('.gnb a').click(function(){
            $(this).addClass('on');
        });
    
        //메인메뉴 텍스트 배경크기 변화
        $('.section1_text').animate({'opacity':'1','top':'50%'},1000);
        // $('.section1_bg').animate({'width':'100vw','height':'100vh'},5000);
        $('#section1').animate({'background-size':'110vw'},0,function(){
            $('#section1').animate({'background-size':'100vw'},5000)
        })
    
        //효능탭
        $('.section1_down img').hover(function(){
            $(this).attr('src','img/index/section_down_hover.png')
        },
        function(){
            $(this).attr('src','img/index/section_down.png')
        });
        $('.section2_down img').hover(function(){
            $(this).attr('src','img/index/section_down_hover.png')
        },
        function(){
            $(this).attr('src','img/index/section_down.png')
        });
        $('.section3_down img').hover(function(){
            $(this).attr('src','img/index/section_down_hover.png')
        },
        function(){
            $(this).attr('src','img/index/section_down.png')
        });
        $('.section3_down img').hover(function(){
            $(this).attr('src','img/index/section_down_hover.png')
        },
        function(){
            $(this).attr('src','img/index/section_down.png')
        });
        $('.section4_down img').hover(function(){
            $(this).attr('src','img/index/section_down_hover.png')
        },
        function(){
            $(this).attr('src','img/index/section_down.png')
        });
        $('.section5_down img').hover(function(){
            $(this).attr('src','img/index/section_down_hover.png')
        },
        function(){
            $(this).attr('src','img/index/section_down.png')
        });
    
        $('.section2_show').click(function(){
            $(this).fadeOut();
            $('.sectino2_tab').animate({'top':'0','margin-top':'0','height':'100%', 'width':'359px'},600);
            $('.section2_hide').fadeIn(600);
        });
        $('.section2_fold').click(function(){
            $('.section2_hide').fadeOut();
            $('.sectino2_tab').animate({'top':'50%','margin-top':'-78px','height':'155px', 'width':'209px'},600,function(){
                $('.section2_show').fadeIn();
            });
        });
        $('.section3_show').click(function(){
            $(this).fadeOut();
            $('.sectino3_tab').animate({'top':'0','margin-top':'0','height':'100%', 'width':'359px'},600);
            $('.section3_hide').fadeIn(600);
        });
        $('.section3_fold').click(function(){
            $('.section3_hide').fadeOut();
            $('.sectino3_tab').animate({'top':'50%','margin-top':'-78px','height':'155px', 'width':'209px'},600,function(){
                $('.section3_show').fadeIn();
            });
        });
        $('.section4_show').click(function(){
            $(this).fadeOut();
            $('.sectino4_tab').animate({'top':'0','margin-top':'0','height':'100%', 'width':'359px'},600);
            $('.section4_hide').fadeIn(600);
        });
        $('.section4_fold').click(function(){
            $('.section4_hide').fadeOut();
            $('.sectino4_tab').animate({'top':'50%','margin-top':'-78px','height':'155px', 'width':'209px'},600,function(){
                $('.section4_show').fadeIn();
            });
        });
        $('.section5_show').click(function(){
            $(this).fadeOut();
            $('.sectino5_tab').animate({'top':'0','margin-top':'0','height':'100%', 'width':'359px'},600);
            $('.section5_hide').fadeIn(600);
        });
        $('.section5_fold').click(function(){
            $('.section5_hide').fadeOut();
            $('.sectino5_tab').animate({'top':'50%','margin-top':'-78px','height':'155px', 'width':'209px'},600,function(){
                $('.section5_show').fadeIn();
            });
        });
    
        
        //스크롤
        let sec1 = $('#section2').offset().top;
        let sec2 = $('#section3').offset().top;
        let sec3 = $('#section4').offset().top;
        let sec4 = $('#section5').offset().top;
    
        function removeClass(){
            $('.quick_menu a').removeClass('on');
        }
        function addClass(btn){
            $(btn).addClass('on');
        }
    
        $(window).on('scroll',function(){
            let scrollBar = $(this).scrollTop();
            
            if(scrollBar == sec1){
                $('.section2_text').animate({'opacity':'1','top':'50%'},800);
                $('.section3_text').animate({'opacity':'0','top':'52%'},800);
                $('.section4_text').animate({'opacity':'0','top':'52%'},800);
                $('.section5_text').animate({'opacity':'0','top':'52%'},800);
                removeClass();
                addClass('.btn1');
    
                $('.gnb a:first').addClass('on');
            }else if(scrollBar < sec1){
                $('.gnb a:first').removeClass('on');
            }
            if(scrollBar == sec2){
                $('.section3_text').animate({'opacity':'1','top':'50%'},800);
                $('.section2_text').animate({'opacity':'0','top':'52%'},800);
                $('.section4_text').animate({'opacity':'0','top':'52%'},800);
                $('.section5_text').animate({'opacity':'0','top':'52%'},800);
                removeClass();
                addClass('.btn2');
                
                $('.gnb a:first').addClass('on');
            }
            if(scrollBar == sec3){
                $('.section4_text').animate({'opacity':'1','top':'50%'},800);
                $('.section2_text').animate({'opacity':'0','top':'52%'},800);
                $('.section3_text').animate({'opacity':'0','top':'52%'},800);
                $('.section5_text').animate({'opacity':'0','top':'52%'},800);
                removeClass();
                addClass('.btn3');
                
                $('.gnb a:first').addClass('on');
            }
            if(scrollBar == sec4){
                $('.section5_text').animate({'opacity':'1','top':'50%'},800);
                $('.section2_text').animate({'opacity':'0','top':'52%'},800);
                $('.section3_text').animate({'opacity':'0','top':'52%'},800);
                $('.section4_text').animate({'opacity':'0','top':'52%'},800);
                removeClass();
                addClass('.btn4');
                
                $('.gnb a:first').addClass('on');
            }
        });
    
        //퀵메뉴 클릭
        $('.section1_down a').click(function(e){
            e.preventDefault();
            let target = $(this).attr('href');
            let targetPosition = $(target).offset().top;
            removeClass();
            addClass('.btn1');
            $('html,body').stop().animate({'scrollTop':targetPosition},1000);
        });
        $('.btn1,.section2_down a').click(function(e){
            e.preventDefault();
            let target = $(this).attr('href');
            let targetPosition = $(target).offset().top;
            removeClass();
            addClass('.btn1');
            $('html,body').stop().animate({'scrollTop':targetPosition},1000);
        });
        $('.btn2,.section3_down a').click(function(e){
            e.preventDefault();
            let target = $(this).attr('href');
            let targetPosition = $(target).offset().top;
            removeClass();
            addClass('.btn2');
            $('html,body').stop().animate({'scrollTop':targetPosition},1000);
        });
        $('.btn3,.section4_down a').click(function(e){
            e.preventDefault();
            let target = $(this).attr('href');
            let targetPosition = $(target).offset().top;
            removeClass();
            addClass('.btn3');
            $('html,body').stop().animate({'scrollTop':targetPosition},1000);
        });
        $('.btn4,.section5_down a').click(function(e){
            e.preventDefault();
            let target = $(this).attr('href');
            let targetPosition = $(target).offset().top;
            removeClass();
            addClass('.btn4');
            $('html,body').stop().animate({'scrollTop':targetPosition},1000);
        });
    
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
    
        //badge
        $('.fixed').hover(function(){
            $(this).addClass('on');
            $('.effect1').addClass('on');
            $('.effect2').addClass('on');
            $('.effect3').addClass('on');
            $('.effect4').addClass('on');
        },
        function(){
            $(this).removeClass('on');
            $('.effect1').removeClass('on');
            $('.effect2').removeClass('on');
            $('.effect3').removeClass('on');
            $('.effect4').removeClass('on');
        });
        function actEffect(){
            $('.effect1').animate({'opacity':'1'},function(){
                $('.effect2').animate({'opacity':'1'},function(){
                    $('.effect3').animate({'opacity':'1'},function(){
                        $('.effect4').animate({'opacity':'1'})
                    })
                });
            });
            $('.effect1').animate({'opacity':'0'},function(){
                $('.effect2').animate({'opacity':'0'},function(){
                    $('.effect3').animate({'opacity':'0'},function(){
                        $('.effect4').animate({'opacity':'0'});
                    })
                });
            })
        }
        setInterval(actEffect,1800);
        return false;
    }

    //모바일
    function mobile(){
        $('.hiden_icon i').click(function(e){
            e.preventDefault();
            $('.m_nav').slideDown(600);
        });
        $('.menu_icon').click(function(e){
            e.preventDefault();
            $('.m_nav').slideUp(600);
        });
        $('.m_section2_show').click(function(){
            $(this).fadeOut();
            $('.m_section2_tab').stop().animate({'height':'300px'},600);
            $('.m_section2_hide').fadeIn(600);
        });
        $('.m_section2_hide').click(function(){
            $('.m_section2_hide').fadeOut();
            $('.m_section2_tab').stop().animate({'height':'62px'},600);
            $('.m_section2_show').fadeIn(600);
        });
        $('.m_section3_show').click(function(){
            $(this).fadeOut();
            $('.m_section3_tab').stop().animate({'height':'300px'},600);
            $('.m_section3_hide').fadeIn(600);
        });
        $('.m_section3_hide').click(function(){
            $('.m_section3_hide').fadeOut();
            $('.m_section3_tab').stop().animate({'height':'62px'},600);
            $('.m_section3_show').fadeIn(600);
        });
        $('.m_section4_show').click(function(){
            $(this).fadeOut();
            $('.m_section4_tab').stop().animate({'height':'300px'},600);
            $('.m_section4_hide').fadeIn(600);
        });
        $('.m_section4_hide').click(function(){
            $('.m_section4_hide').fadeOut();
            $('.m_section4_tab').stop().animate({'height':'62px'},600);
            $('.m_section4_show').fadeIn(600);
        });
        $('.m_section5_show').click(function(){
            $(this).fadeOut();
            $('.m_section5_tab').stop().animate({'height':'300px'},600);
            $('.m_section5_hide').fadeIn(600);
        });
        $('.m_section5_hide').click(function(){
            $('.m_section5_hide').fadeOut();
            $('.m_section5_tab').stop().animate({'height':'62px'},600);
            $('.m_section5_show').fadeIn(600);
        });
        return false;
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