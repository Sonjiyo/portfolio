$(document).ready(function(){
    let speed10 = 1000;
    let speed12 = 1200;
    let speed15 = 1500;
    let speed20 = 2000;

    $('#section1 p').stop().animate({'opacity':'1','top':'20%'}, speed12);
    // check not moved
    /* e.section1 */

    $(window).on('scroll', function(){
        let scroll = $(this).scrollTop();
        let $section2 = $('#section2').offset().top;
        let $section4 = $('#section4').offset().top;
        let $section5 = $('#section5').offset().top;
        let $section3Box1 = $('.section3_box1').offset().top;
        let $section3Box2 = $('.section3_box2').offset().top;
        let $section3Box3 = $('.section3_box3').offset().top;
        let $section3Box4 = $('.section3_box4').offset().top;

        if(scroll >= $section2-200){
            $('.size1').animate({'opacity':'1', 'right':'0'}, speed12);
            $('.size2').animate({'opacity':'1', 'bottom':'0'}, speed12);
        }
        if(scroll >= $section2+100){
            $('.section2_text').animate({'opacity':'1', 'bottom':'100px'}, speed15);
        }
        /* e.section2 */

        if(scroll >= $section3Box1-200){
            $('.water2').animate({'bottom':'300px', 'left':'350px'}, speed20);
            $('.section3_text1').animate({'opacity':'1', 'right':'50px'}, speed15);
        }
        /* e.section3_box1 */

        if(scroll >= $section3Box2-220){
            $('.capbox2').animate({'bottom':'-25px', 'right':'309px'}, speed20);
            $('.section3_text2').animate({'opacity':'1', 'left':'90px'}, speed15);
        }
        /* e.section3_box2 */

        if(scroll >= $section3Box3-200){
            $('.prop2').animate({'bottom':'70px'}, speed20);
            $('.section3_text3').animate({'opacity':'1', 'top':'250px'}, speed15);
        }
        /* e.section3_box3 */

        if(scroll >= $section3Box4-200){
            $('.cover').addClass('act2');
            $('.cover').animate({'bottom':'0', 'right':'0'}, speed20);
            $('.section3_text4').animate({'opacity':'1', 'left':'102px'}, speed15);
        }
         /* e.section3_box4 */

         if(scroll >= $section4-800){
             $('.capsule1').animate({'opacity':'1'}, speed12);
             $('.capsule2').animate({'opacity':'1'}, speed12);
             $('.section4_box span').animate({'opacity':'1', 'left':'0'}, speed15)
         }
         /* e.section4 */

         if(scroll >= $section5-500){
            $('.teaBox1').animate({'opacity':'1', 'left':'-170px'}, speed15);
            $('.teaBox2').animate({'opacity':'1', 'right':'-70px'}, speed15);
         }
    });

    $('.top').click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
    $(window).scroll(function() {
        let st = $(this).scrollTop();
                    if (st> 500) {
                        $('.top').fadeIn();
                    } else {
                        $('.top').fadeOut();
                    }
    });
    //top 버튼
});