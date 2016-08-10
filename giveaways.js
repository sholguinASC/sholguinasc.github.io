$(document).ready(function(){
        $("#p4_pic").hide();
        $("#xone_pic").hide();
        $("#iphone").hide();
        $("#p4").mouseover(function(){
                $("#p4_pic").slideDown();
                $("body").css("background-color","#4d94ff");
        });
        $("#p4").mouseout(function(){
                $("#p4_pic").slideUp();
        });
        $("#xone").mouseover(function(){
                $("#xone_pic").slideDown();
                $("body").css("background-color","#47d147");
        });
            
        $("#xone").mouseout(function(){
                $("#xone_pic").slideUp();
        });
        $("#6s").mouseover(function(){
                $("#iphone").slideDown();
                $("body").css("background-color","#ffcce6");
        });
            
        $("#6s").mouseout(function(){
                $("#iphone").slideUp();

        });
})
