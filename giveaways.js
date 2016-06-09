$(document).ready(function(){
        $("#p4").mouseover(function(){
                $("#p4_pic").css("display","block").fadeIn(500);
                $("body").css("background-color","#00b2ee");
        });
        $("#p4").mouseout(function(){
                $("#p4_pic").css("display","none");
                $("body").css("background-color","#ff6666");
        });
        $("#xone").mouseover(function(){
                $("#xone_pic").css("display","block").fadeIn(500);
                $("body").css("background-color","#00aa50");
        });
            
        $("#xone").mouseout(function(){
                $("#xone_pic").css("display","none");
                $("body").css("background-color","#ff6666");
        });
        $("#6s").mouseover(function(){
                $("#iphone").css("display","block").fadeIn(500);
                $("body").css("background-color","#5f68a3");
        });
            
        $("#6s").mouseout(function(){
                $("#iphone").css("display","none");
                $("body").css("background-color","#ff6666");
        });
})
