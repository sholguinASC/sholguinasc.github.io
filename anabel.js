$(document).ready(function(){
	var correct_code = "19992309";
        var response= "<center><h2>No Bitch Your Wrong</h2></center>";
	var tryAgain = "<center><h5>Try again my fren</h5></center>";
	//create click event for submit button
	$("#submit").click(function(){
    		var first = $("#code").val();
		var second = first.toString();
		if (second == correct_code) {
		        window.location = "sholguinasc.github.io/anabel.html/#";
                 } 
	         else {
		     	$("#top_text").replaceWith(response);
          		$("body").css("background-color","#f71b1b");
			$( "h5" ).replaceWith(tryAgain);
			 $( "#code" ).blur();
 
	         }
	
	});
});
