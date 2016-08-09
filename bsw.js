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
	var on = "img/portfolio/light_on.png";
	var off = "img/portfolio/light_off.png";
	var light1_state = true;
	$("#light1").click(function(){
		if (light1_state == true) {
			$("#light1_img").remove();
			$("#light1").append("<img id='door_img' src='" + on + "' class='img-responsive'>");
			light1_state = false;
		}
		else {
			$("#light1_img").remove();
			$("#light1").append("<img id='door_img' src='" + off + "' class='img-responsive'>");
			light1_state = true;
		}
	});
});
