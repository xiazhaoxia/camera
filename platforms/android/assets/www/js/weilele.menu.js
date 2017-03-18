
$(function(){

    var startX, startY, endX, endY;  
    var $header =$(".mobile-header-outer");


    var $menu= $("#nav-bar-filter");
    $menu.on("touchstart", touchStart);  
    $menu.on("touchmove", touchMove);  
    $menu.on("touchend", touchEnd);  


 

    console.log("header:"+$header.width()+";ul:"+$menu.width());
    var swiptw = $header.width() - $menu.width();

    var swiptleft = 0;
       

    function touchStart(event) { 

        var touch = event.originalEvent.targetTouches[0];  
        startY = touch.pageY;  
        startX = touch.pageX;  
        console.log(startX);
    }  
    function touchMove(event) { 
         
        var touch = event.originalEvent.targetTouches[0];  
        endX = touch.pageX;  

        var distance=startX - endX;


      
           
        if(distance>0){ 
            //move left     
            swiptleft = swiptleft -distance; 
            if(swiptleft <swiptw ){
                swiptleft=swiptw;
            }  
            console.log("swiptleft:" +swiptleft+"startX:" +startX +";endX:"+endX+";distance:"+distance);

            $menu.animate({
                left:swiptleft},0);  
        }else{
            swiptleft = swiptleft + Math.abs(distance);  
            if(swiptleft>0){
                swiptleft=0;
            } 
            console.log("swiptleft:" +swiptleft+"startX:" +startX +";endX:"+endX+";distance:"+distance);

            $menu.animate({
                left:swiptleft},0);  
        }
    }  
    function touchEnd(event) {  
       console.log(event);
    }  


});


