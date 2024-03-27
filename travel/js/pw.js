$(document).ready(function(){
    $('#gnb li').mouseenter(function(){
        $(this).children('div').stop().fadeIn();
        $(this).children('a').addClass('on');
    });
    $('#gnb li').mouseleave(function(){
        $(this).children('div').stop().fadeOut();
        $(this).children('a').removeClass('on');
    });

    $('.tab ul li').click(function(e){
        e.preventDefault();

        let value = $(this).children('a').attr('href');

        $('.tab ul li a').removeClass('on');
        $(this).children('a').addClass('on');

        $('.tab div').fadeOut();
        $(value).fadeIn();
    });

    let i=0;
    let speed = 600;
    let timing = 2000;
    let $slider = $('.slider');
    let $pannel = $('.pannel');
    let $navi = $('.navi li');

    let wid = $slider.width();
    let num = $navi.length;


    function doSlider(){
        $navi.click(function(e){
            e.preventDefault();
            let index = $(this).index();
        });
    };


    $('.navi li:nth-child(1)').click(function(){
        $navi.children('a').removeClass('on');
        $(this).children('a').addClass('on');

        $pannel.animate({'margin-left':0},500);
    });
    $('.navi li:nth-child(2)').click(function(){
        $navi.children('a').removeClass('on');
        $(this).children('a').addClass('on');

        $pannel.animate({'margin-left':-wid},500);
    });
    $('.navi li:nth-child(3)').click(function(){
        $navi.children('a').removeClass('on');
        $(this).children('a').addClass('on');

        $pannel.animate({'margin-left':-wid*2},500);
    });
    $('.navi li:nth-child(4)').click(function(){
        $navi.children('a').removeClass('on');
        $(this).children('a').addClass('on');

        $pannel.animate({'margin-left':-wid*3},500);
    });

    setInterval(autoPlay,timing);
    function autoPlay(){
        $navi.children('a').removeClass('on');
        
        i++;
        if(i<num){
            $('.navi li:nth-child('+(i+1)+')').children('a').addClass('on');
            $pannel.animate({'margin-left':-wid*i},speed);
            
        } else {
            $('.navi li:nth-child(1)').children('a').addClass('on');
            $pannel.animate({'margin-left':0},speed);
            i=0;
        }
    };
    
    
});