$(function(){
    $('.hiden_icon i').click(function(e){
        e.preventDefault();
        $('.m_nav').stop().animate({'width':'50vw'});
    });
    $('.menu_icon').click(function(e){
        e.preventDefault();
            $('.m_nav').stop().animate({'width':'0vw'});
    });

    $('.topbox>h1').animate({'left':'-100px','opacity':'0'},0);
    $('.topbox>p').animate({'left':'-100px','opacity':'0'},0);

    $('.zoneG1').animate({'left':'-300px','opacity':'0'},0);
    $('.zoneG2').animate({'left':'-300px','opacity':'0'},0);

    $('.zoneG1').animate({'left':'0','opacity':'1'},700,function(){
        $('.zoneG2').animate({'left':'0','opacity':'1'},700);
    });


    $('.rightbox').animate({'opacity':'0','right':'-400px'},0);
    
    $('.topbox>h1').animate({'left':'0','opacity':'1'},700);
    $('.topbox>p').animate({'left':'0','opacity':'1'},700);

    let spotT1 = $('.spot1').position().top;
    let spotL1 = $('.spot1').position().left;

    let spotT2 = $('.spot2').position().top;
    let spotL2 = $('.spot2').position().left;

    let spotT3 = $('.spot3').position().top;
    let spotL3 = $('.spot3').position().left;

    let spotT4 = $('.spot4').position().top;
    let spotL4 = $('.spot4').position().left;

    let spotT5 = $('.spot5').position().top;
    let spotL5 = $('.spot5').position().left;

    let spotT6 = $('.spot6').position().top;
    let spotL6 = $('.spot6').position().left;

    let spotT7 = $('.spot7').position().top;
    let spotL7 = $('.spot7').position().left;

    $('.rightbox').animate({'opacity':'1','right':'0'},1400,function(){
        $('.spot1').animate({'top':spotT1-50+'px','left':spotL1-15+'px','height':'5%'},300,'easeOutBounce',function(){
            $('.spot2').animate({'top':spotT2-50+'px','left':spotL2-15+'px','height':'5%'},300,'easeOutBounce',function(){
                $('.spot3').animate({'top':spotT3-50+'px','left':spotL3-15+'px','height':'5%'},300,'easeOutBounce',function(){
                    $('.spot4').animate({'top':spotT4-50+'px','left':spotL4-15+'px','height':'5%'},300,'easeOutBounce',function(){
                        $('.spot5').animate({'top':spotT5-50+'px','left':spotL5-15+'px','height':'5%'},300,'easeOutBounce',function(){
                            $('.spot6').animate({'top':spotT6-50+'px','left':spotL6-15+'px','height':'5%'},300,'easeOutBounce',function(){
                                $('.spot7').animate({'top':spotT7-50+'px','left':spotL7-15+'px','height':'5%'},300,'easeOutBounce');
                            });
                        });
                    });
                });
            });
        });

    let sp1 = 1;
    let sp2 = 1;
    let sp3 = 1;
    let sp4 = 1;
    let sp5 = 1;
    let sp6 = 1;
    let sp7 = 1;

    $('.spot1').hover(function(){
        if(sp1==1){
            $('.zone1 h2').css('color','var(--point_color)');

            $('.spot1').stop().animate({'top':spotT1+'px','left':spotL1+'px','height':'0'},0);
            $('.spot1').stop().animate({'top':spotT1-50+'px','left':spotL1-15+'px','height':'5%'},300,'easeOutBounce');
            sp1=0;
        }
    }, function(){
        $('.zone1 h2').css('color','var(--font-color)');
        sp1=1;
    });
    $('.spot2').hover(function(){
        if(sp2==1){
            $('.zone3 h2').css('color','var(--point_color)');
            
            $('.spot2').stop().animate({'top':spotT2+'px','left':spotL2+'px','height':'0'},0);
            $('.spot2').stop().animate({'top':spotT2-50+'px','left':spotL2-15+'px','height':'5%'},300,'easeOutBounce');
            sp2=0;
        }
    }, function(){
        $('.zone3 h2').css('color','var(--font-color)');
        sp2=1;
    });
    $('.spot3').hover(function(){
        if(sp3==1){
            $('.zone2 h2').css('color','var(--point_color)');

            $('.spot3').stop().animate({'top':spotT3+'px','left':spotL3+'px','height':'0'},0);
            $('.spot3').stop().animate({'top':spotT3-50+'px','left':spotL3-15+'px','height':'5%'},300,'easeOutBounce');
            sp3=0;
        }
    }, function(){
        $('.zone2 h2').css('color','var(--font-color)');
        sp3=1;
    });
    $('.spot4').hover(function(){
        if(sp4==1){
            $('.zone5 h2').css('color','var(--point_color)');

            $('.spot4').stop().animate({'top':spotT4+'px','left':spotL4+'px','height':'0'},0);
            $('.spot4').stop().animate({'top':spotT4-50+'px','left':spotL4-15+'px','height':'5%'},300,'easeOutBounce');
            sp4=0;
        }
    }, function(){
        $('.zone5 h2').css('color','var(--font-color)');
        sp4=1;
    });
    $('.spot5').hover(function(){
        if(sp5==1){
            $('.zone4 h2').css('color','var(--point_color)');

            $('.spot5').stop().animate({'top':spotT5+'px','left':spotL5+'px','height':'0'},0);
            $('.spot5').stop().animate({'top':spotT5-50+'px','left':spotL5-15+'px','height':'5%'},300,'easeOutBounce');
            sp5=0;
        }
    }, function(){
        $('.zone4 h2').css('color','var(--font-color)');
        sp5=1;
    });
    $('.spot6').hover(function(){
        if(sp6==1){
            $('.zone6 h2').css('color','var(--point_color)');

            $('.spot6').stop().animate({'top':spotT6+'px','left':spotL6+'px','height':'0'},0);
            $('.spot6').stop().animate({'top':spotT6-50+'px','left':spotL6-15+'px','height':'5%'},300,'easeOutBounce');
            sp6=0;
        }
    }, function(){
        $('.zone6 h2').css('color','var(--font-color)');
        sp6=1;
    });
    $('.spot7').hover(function(){
        if(sp7==1){
            $('.zone7 h2').css('color','var(--point_color)');

            $('.spot7').stop().animate({'top':spotT7+'px','left':spotL7+'px','height':'0'},0);
            $('.spot7').stop().animate({'top':spotT7-50+'px','left':spotL7-15+'px','height':'5%'},300,'easeOutBounce');
            sp7=0;
        }
    }, function(){
        $('.zone7 h2').css('color','var(--font-color)');
        sp7=1;
    });
        
        
        
        
        
        
    });
});