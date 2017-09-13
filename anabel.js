$(document).ready(function(){
	var correct_code = 00000000;
  var response= "<h1>No Bitch Your Wrong</h1>";
	//create click event for submit button
	$("#submit").click(function(){
    		var first = $("#code").val();
		if (first == correct_code) {
			$("#response").empty();
		        $("#response").append("<h6>"+ first +"</h6>");
                 } 
	         else {
		     	$("#top_text").replaceWith(response);
          $("#response").css("background-color","#00CD00");
	         }
	
	});
});
