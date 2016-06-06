$(document).ready(function(){
    $("#p4").mouseover(function(){
        $("#p4_pic").css("display","block");
        console.log("#p4 element mouseover");
    });
    
    $("#p4").mouseout(function(){
        $("#p4_pic").css("display","none");
    });
    $("#xone").mouseover(function(){
        $("#xone_pic").css("display","block");
    });
    
    $("#xone").mouseout(function(){
        $("#xone_pic").css("display","none");
    });
    $("#6s").mouseover(function(){
        $("#6s_pic").css("display","block");
    });
    
    $("#6s").mouseout(function(){
        $("#6s_pic").css("display","none");
    });
});
