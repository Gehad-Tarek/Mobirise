$(document).ready(function(){
    $(window).on("scroll",function(){
        if($(window).scrollTop()>0){
        $("header").addClass("heightByScroll");
        $("header").addClass("colorByScroll");
        $("header").addClass("sticky");
        $("#mobiriseIcon").addClass("mobiriseIconByScroll");
        $("#mobirise").addClass("mobiriseMargin");
        $("#headerLink1, #headerLink2, #headerLink3, #headerLink4").addClass("headerLinksByScroll");
        $("button").addClass("buttonBositionByScroll");
        $("#menus-dropdown, #blocks-dropdown").addClass("dropdownPositionByScroll");
        $("#animating-border").addClass(".animatingBorderByScroll");
        }else {
            $("header").removeClass("heightByScroll");
            $("header").removeClass("colorByScroll");
            $("header").removeClass("sticky");
            $("#mobiriseIcon").removeClass("mobiriseIconByScroll");
            $("#mobirise").removeClass("mobiriseMargin");
            $("#headerLink1, #headerLink2, #headerLink3, #headerLink4").removeClass("headerLinksByScroll");
            $("button").removeClass("buttonBositionByScroll");
            $("#menus-dropdown, #blocks-dropdown").removeClass("dropdownPositionByScroll");
            $("animating-border").removeClass(".animatingBorderByScroll");
        }
    })

});