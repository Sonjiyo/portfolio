$(function(){
    $('.notice li a').click(function(){
        let pos = $(this).attr('href');

        $('.notice li a').removeClass('on');
        $(this).addClass('on');
        $('#nBox1, #nBox2, #nBox3').stop().fadeOut(0);
        $(pos).stop().fadeIn(600);

        return false;
    });
    let i=0;
    
    $('.hideMenu').click(function(){
        if(i==0){
            $('#mainMenu').fadeIn(600);
            i=1;
        } else{
            $('#mainMenu').fadeOut(600);
            i=0;
        }
        
    });

    setInterval(mainBanner,3000);

    function mainBanner(){
        if(i<4){
        $('.mainBtn li').removeClass('on');
        $('.mainBtn li').eq(i).addClass('on');

        let box = '.liBox'+(i+1);

        $('.list>div').removeClass('on').fadeOut(600);
        $(box).addClass('on').fadeIn(600);
        i++;
    }else{i=0;}
    }

    $('.mainBtn li').click(function(){
        $('.mainBtn li').removeClass('on');
        $(this).addClass('on');

        let index = $(this).index();
        let box = '.liBox'+(index+1);

        $('.list>div').removeClass('on').fadeOut(600);
        $(box).addClass('on').fadeIn(600);
    });


});