$(function(){

    $('.subNav').stop().slideUp(0);
    $('.navWarp').hover(function(){
        $('.subNav').stop().slideDown();
    },
    function(){
        $('.subNav').stop().slideUp();
    });
    //nav

    let se1 = $('.section1').offset().top;
    let se2 = $('.section2').offset().top;
    let se3 = $('.section3').offset().top;
    let se4 = $('.section4').offset().top;
    let se5 = $('.section5').offset().top;
    let se6 = $('.section6').offset().top;
    let se7 = $('.section7').offset().top;
    let se8 = $('.section8').offset().top;
    let se9 = $('.section9').offset().top;
    let sel = $('.sectionLast').offset().top;

    let se2h = $('.section2').height();
    let se3h = $('.section3').height();
    let se4h = $('.section4').height();
    let se5h = $('.section5').height();
    let se6h = $('.section6').height();
    let se7h = $('.section7').height();
    let se8h = $('.section8').height();
    let se9h = $('.section9').height();

    let sch = $('.sec2Left').height();

    let sec1 = se1-sch;

    let sec2 = se3-sch;
    let sec2t = se2h-sch;

    let sec8 = se9-sch;
    let sec8t = se8h-sch;

    let sec9 = sel-sch;
    let sec9t = se9h-sch;

    $('.main a').click(function(){
        $('html, body').stop().animate({'scrollTop':se1},800);
        return false;
    });
    //main 버튼

    $('.mainNav_s li a').click(function(){
        $('.mainNav_s li').removeClass('on');
        $(this).parents('li').addClass('on');

        let num = $(this).attr('href');
        let numH = $(num).offset().top;

        $('html, body').stop().animate({'scrollTop':numH},800);

        return false;
    });

    $('.subNav1 li').click(function(){
        let num = $(this).index();

        $('.subNav ul li').removeClass('on');
        $(this).addClass('on');
        
        numH = $('.section'+(num+2)).offset().top;

        $('html, body').stop().animate({'scrollTop':numH},800);

        return false;
    });

    $('.subNav2 li').click(function(){
        let num = $(this).index();

        $('.subNav ul li').removeClass('on');
        $(this).addClass('on');
        
        numH = $('.section'+(num+9)).offset().top;

        $('html, body').stop().animate({'scrollTop':numH},800);

        return false;
    });
    //menu이동

    $(window).scroll(function(){
        let st = $(this).scrollTop();
        let sw = $(this).width();

        $('.mainNav').css({'background':'#fff'});
        $('.mainNav_s li a').css('color','var(--point-color)');
        

        if(st<10){
            $('.mainNav').css({'background':'none'});
            $('.mainNav_s li a').css('color','#fff');
        }
        //nav 변경
        
        
        // if(st<se1){
        //     $('.mainNav_s li').removeClass('on');
        //     $('.mainNav_s li:nth-child(1)').addClass('on');

        // }

        // if(st>=se1){
        //     $('.mainNav_s li').removeClass('on');
        //     $('.mainNav_s li:nth-child(2)').addClass('on');
        // }

        // if(st>se2 && st<=sec2){
        //     $('.sec2Left').css({'position':'fixed','top':0});
        // } else if(st>sec2){
        //     $('.sec2Left').css({'position':'relative','top':sec2t+'px'});
        // } else{
        //     $('.sec2Left').css({'position':'relative'});
        // }
        // //sction2

        // if(st>=se2 && st<se9){
        //     $('.mainNav_s li').removeClass('on');
        //     $('.mainNav_s li:nth-child(3)').addClass('on');
        // }

        // if(st>se8 && st<=sec8){
        //     $('.mainNav_s li').removeClass('on');
        //     $('.mainNav_s li:nth-child(3)').addClass('on');
        // }

        // if(st>se9 && st<=sec9){
        //     $('.sec9Left').css({'position':'fixed','top':0});
        // } else if(st>sec9){
        //     $('.sec9Left').css({'position':'relative','top':sec9t+'px'});
        // } else{
        //     $('.sec9Left').css({'position':'relative'});
        // }
        // //setcion9

        // if(st>se9){
        //     $('.mainNav_s li').removeClass('on');
        //     $('.mainNav_s li:nth-child(4)').addClass('on');
        // }

        // if(sw<950){
        //     $('.sec2Left').css({'position':'relative','top':0});
        //     $('.sec9Left').css({'position':'relative','top':0});
        // }
    });
//scroll event

    $('.main h1').animate({'top':'50%','opacity':'0'},0);
    $('.main h1').animate({'top':'45%','opacity':'1'},800);
//main animation
        
    let moveV =  $('.wordMove li').height()+5;
    let i = 1;

    setInterval(wordMove,2000);

    function wordMove(){
        if(i<3){
            $('.wordMove ul').animate({'margin-top':-moveV*i+'px'},600);
            i++;
        }else{
            i=0;
        }
    }
});