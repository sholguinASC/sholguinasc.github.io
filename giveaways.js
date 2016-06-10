$(document).ready(function(){
        $("#p4_pic").hide();
        $("#xone_pic").hide();
        $("#iphone").hide();
        $("#p4").mouseover(function(){
                $("#p4_pic").fadeIn();
                $("body").css("background-color","#0000A3");
        });
        $("#p4").mouseout(function(){
                $("#p4_pic").fadeOut();
        });
        $("#xone").mouseover(function(){
                $("#xone_pic").fadeIn();
                $("body").css("background-color","#00aa50");
        });
            
        $("#xone").mouseout(function(){
                $("#xone_pic").fadeOut();
        });
        $("#6s").mouseover(function(){
                $("#iphone").fadeIn();
                $("body").css("background-color","#C96E6E");
        });
            
        $("#6s").mouseout(function(){
                $("#iphone").fadeOut();

        });
})
