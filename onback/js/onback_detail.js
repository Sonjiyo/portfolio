$(function(){
    let plusIcon = $('.plus');
    let minusIcon = $('.minus');
    let changeNumber = $('.change_number');
    let changePrice = $('.price li:nth-child(2)');

    let i=1;

    plusIcon.click(function(){
        if(i<=19){
            i++;
            changeNumber.html(i);
            let itemPrice = (12500*i).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            changePrice.html(itemPrice+'원');
            $('.waring').remove();

        } else if(i==20){

            $('.cart').append("<li class='waring'><span>20개 이상 담을 수 없습니다.</span></li>");
        }
        return false;
    });
    minusIcon.click(function(){
        if(i>1){
            i--;
            changeNumber.html(i);
            let itemPrice = (12500*i).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            changePrice.html(itemPrice+'원');
            $('.waring').remove();
        } else if(i==1){
            $('.cart').append("<li class='waring'><span>1개 이상 담을 수 있습니다.</span></li>");
        }
        return false;
    });

    // cart

    // let art1h = $('.info>li:nth-child(1)').offset().top;
    // let art2h = $('.info>li:nth-child(2)').offset().top;
    // let art3h = $('.info>li:nth-child(3)').offset().top;

    // let art1 =1;
    // let art2 =1;
    // let art3 =1;

    // $(window).scroll(function(){
    //     let st = $(this).scrollTop();

    //     if(st>art1h-800){
    //         if(art1==1){
    //             $('.info>li:nth-child(1)').animate({'opacity':'1','bottom':'0'},300);
    //             art1=0;
    //         }
    //     }
    //     if(st>art2h-800){
    //         if(art2==1){
    //             $('.info>li:nth-child(2)').animate({'opacity':'1','bottom':'0'},300);
    //             art2=0;
    //         }
    //     }
    //     if(st>art3h-800){
    //         if(art3==1){
    //             $('.info>li:nth-child(3)').animate({'opacity':'1','bottom':'0'},300);
    //             art3=0;
    //         }
    //     }
    // });

    let nav = 1;

    $('.menu_bar').click(function(e){
        e.preventDefault();
        if(nav==1){
            $('.nav').animate({'width':'61%'},500);
            $('.top, .bottom').fadeOut(500);
            $('.middle1, .middle3').addClass('on');

            nav =0;
        } else if(nav==0){
            $('.nav').animate({'width':0},500);
            $('.top, .bottom').fadeIn(500);
            $('.middle1, .middle3').removeClass('on');
            nav=1;
        }
        
    });
});