$(function () {
    //手机滑动效果
    var swiptleft = 0;
    var $header =$(".mobile-header-outer");
    var $menu= $header.find("ul");

    var ulwidth=0;
    $menu.find("li").each(function(){
    	ulwidth+=$(this).width() +30;

    });

    var swiptw = $header.width() - ulwidth;
    console.log(swiptw);
    $header.swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            swiptleft = swiptleft - distance;
            console.log(swiptleft);
            if (swiptleft > swiptw) {
                $menu.animate({
                    left: swiptleft + 'px'
                }, 1)
            }
            else {
                swiptleft = swiptw;
                $menu.animate({
                    left: swiptw + 'px'
                }, 1)
            }
             
        },
 
        swipeRight : function (event, direction, distance, duration, fingerCount) {
                swiptleft = swiptleft + distance;
                if (swiptleft < 0) {
                    $menu.animate({
                        left: swiptleft + 'px'
                    }, 10)
                }
                else {
                    swiptleft = 0;
                    $menu.animate({
                        left: 0 + 'px'
                    }, 10)
                }
             
    }
    });
 
})