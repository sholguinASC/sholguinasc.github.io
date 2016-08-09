$(document).ready(function(){
	var locked = "img/portfolio/lock.png";
	var unlocked = "img/portfolio/open_lock.png";
	var door_state = true;
	$("#door").click(function(){
		if (door_state == true) {
			$("#door_img").remove();
			$("#door").append("<img id='door_img' src='" + unlocked + "' class='img-responsive'>");
			door_state = false;
		}
		else {
			$("#door_img").remove();
			$("#door").append("<img id='door_img' src='" + locked + "' class='img-responsive'>");
			door_state = true;
		}
	});
});
