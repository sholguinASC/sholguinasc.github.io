$(document).ready(function(){
	$("#response").empty();
	var random_num = Math.floor((Math.random()*100) + 1);
	//create click event for submit button
	var count = 0;
	$("#submit").click(function(){
    		var first = $("#guess").val();
    		var response= "<p>" + first + "</p>";
    		var count = count +1;
    		var guesses = "<h5>So far "+ count +" guesses</h5>"
    		$("#guess_list").append(response);
    		$('#guess').val('');
    		$( "h5" ).remove();
    		$("#main_part").append(guesses);
		if (first == random_num) {
			$("#response").empty();
		        $("#response").append("<h6>"+ first +"</h6>");
		        $("#response").append("<h1>Good Job you guessed my number!</h1>");
		        $("#response").delay(600).append("<h3>Do you want a cookie??</h3>");
		        $("#response").css("background-color","#00CD00");
                 } 
		 else if (first < random_num) {
		       	$("#response").empty();
		        $("#response").append("<h6>"+ first +"</h6>");
	                $("#response").append("<h1>Your Guess is too low</h1>");
		        $("#response").css("background-color","#FF3232");
                 } 
	         else {
		     	$("#response").empty();
	                $("#response").append("<h6>"+ first +"</h6>");
		        $("#response").append("<h1>Your Guess is too high</h1>");
		        $("#response").css("background-color","#FF3232");
	         }
	
	});
});


	//create click event for clear button



