$(function(){

    py();
    $(window).on('scroll',function(){
       py();
    })

    function py(){
        if($(window).scrollTop()>=$('.main').offset().top){
            $('.yc').slideDown();
            $('.dh').css({
                position:'fixed',
                top:100,
                right:5

            })
        }
        else{
            $('.yc').slideUp();
            $('.dh').css({
                position:'absolute',
                top:400,
                right:5

            })
        }
    }
    $('.yc').on('click',function(){
        $('HTML,body').stop().animate({
            scrollTop:0
        })
    })
})