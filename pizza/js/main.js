$(function(){

    $('#btns input').click(function(){
        let mainStr = $(this).attr('id');
        mainBanner(mainStr.substr(3, 1));
        $('#btns input').removeClass('on');
        $(this).addClass('on');
    });

    function mainBanner(n){
        let pos = -1920*(n-1);
        $('#box1_1').stop().animate({'left':pos+'px'},500);
    }
//mainbanner

$('#arrow_2').click(function(){
    boxMove();
    console.log(i);
});
$('#arrow_1').click(function(){
    boxMove2();
    console.log(i);
});


let i = 1;

function boxMove(){
    if(i<3){
        let move = -(36*i)+'%';

        $('#box2').animate({'margin-left':move});
        i++;
    } 
}
function boxMove2(){
    if(i>0){
        i--;
        let move = -(36*i)+'%';
        $('#box2').animate({'margin-left':move});
        
    } 
}

$('#sub_menu>li>a').click(function(){

    $('#sub_menu li>a').removeClass('on');
    $(this).addClass('on');

    $('.sub_menu_s li').removeClass('on');
    $(this).parents('li').children('ul').children('li').eq(0).addClass('on');
    
    $('.sub_menu_s').css({'opacity':'0','height':'0'});
    $(this).next('ul').css({'opacity':'1','height':'auto'});

    let route = $(this).attr('href');

    $('.piz_menu').css('display','none');
    $(route).css('display','flex');
    
    return false;
});

$('.sub_menu_s li a').click(function(){
    let route = $(this).attr('href');

    $('.sub_menu_s li').removeClass('on');
    $(this).parents('li').addClass('on');

    $('.piz_menu').css('display','none');
    $(route).css('display','flex');

    return false;
});
//탭 menu


$('#top').click(function(){
    $('html, body').animate({'scrollTop':0},600);
});
//top버튼

});