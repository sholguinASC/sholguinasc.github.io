$(document).ready(function(){
	var locked = "img/portfolio/lock.png";
	var unlocked = "img/portfolio/open_lock.png";
	var door_state = true;
	$("#door").click(function(){
		if (door_state == true) {
			$( "door_img" ).remove();
			$("#door").append("<img id='door_img' src='" + unlocked + "'>");
			door_state = false;
		}
		else {
			$( "#door_img" ).remove();
			$("#door").append("<img id='door_img' src='" + locked + "'>");
			door_state = true;
		}
	});
});
