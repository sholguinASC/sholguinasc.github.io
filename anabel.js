$(document).ready(function(){
	var correct_code = 00000000;
        var response= "<h1>No Bitch Your Wrong</h1>";
	//create click event for submit button
	$("#submit").click(function(){
    		var first = $("#code").val();
		if (first == correct_code) {
		        window.location = "sholguinasc.github.io/anabel19992309.html";
                 } 
	         else {
		     	$("#top_text").replaceWith(response);
          		$("body").css("background-color","red");
	         }
	
	});
});
