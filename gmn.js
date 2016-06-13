$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	//create click event for submit button
	$("#submit").click(function(){
    		var first = $("#guess").val();
    		var response= "<p>" + first + "</p>";
    		$("#guess_list").append(response);
    		$('#guess').val('');
	});
	
});


	//create click event for clear button



