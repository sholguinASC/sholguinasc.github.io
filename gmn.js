$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	//create click event for submit button
	$("#submit").click(function(){
    		var first = $("#guess").val();
    		var response= "<li>first</li>";
    		$("#guesses").append(response);
    		$('#guess').val('');
	});
	$('#guess').keypress(function(e) {
        	if(e.which == 13) {
        	    jQuery('#submit').focus().click();
        	}
	 });
});


	//create click event for clear button



