$(document).ready(function(){
	var locked = "img/portfolio/lock.png";
	var unlocked = "img/portfolio/open_lock.png";
	var lock_state = true;
	$("#lock").click(function(){
		if (lock_state == true) {
			$("#lock_img").remove();
			$("#lock").append("<img id='lock_img' src='" + unlocked + "' class='img-responsive'>");
			lock_state = false;
		}
		else {
			$("#lock_img").remove();
			$("#lock").append("<img id='lock_img' src='" + locked + "' class='img-responsive'>");
			lock_state = true;
		}
	});
	//Bedroom 1
	var off1 = "img/portfolio/off.png";
	var on1 = "img/portfolio/on.png";
	var light_state1 = true;
	$("#light1").click(function(){
		if (light_state1 == true) {
			$("#light1_img").remove();
			$("#light1").append("<img id='light1_img' src='" + on1 + "' class='img-responsive switch'>");
			light_state1 = false;
		}
		else {
			$("#light1_img").remove();
			$("#light1").append("<img id='light1_img' src='" + off1 + "' class='img-responsive switch'>");
			light_state1 = true;
		}
	});
	//Bedroom 2
	
	var off2 = "img/portfolio/off.png";
	var on2 = "img/portfolio/on.png";
	var light_state2 = true;
	$("#light2").click(function(){
		if (light_state2 == true) {
			$("#light2_img").remove();
			$("#light2").append("<img id='light2_img' src='" + on2 + "' class='img-responsive switch'>");
			light_state2 = false;
		}
		else {
			$("#light2_img").remove();
			$("#light2").append("<img id='light2_img' src='" + off2 + "' class='img-responsive switch'>");
			light_state2 = true;
		}
	});
	//Living Room
	
	var off3 = "img/portfolio/off.png";
	var on3 = "img/portfolio/on.png";
	var light_state3 = true;
	$("#light3").click(function(){
		if (light_state3 == true) {
			$("#light3_img").remove();
			$("#light3").append("<img id='light3_img' src='" + on3 + "' class='img-responsive switch'>");
			light_state3 = false;
		}
		else {
			$("#light3_img").remove();
			$("#light3").append("<img id='light3_img' src='" + off3 + "' class='img-responsive switch'>");
			light_state3 = true;
		}
	});
	var close = "img/portfolio/close.png";
	var open = "img/portfolio/open.png";
	var door_state = true;
	$("#door").click(function(){
		if (door_state == true) {
			$("#door_img").remove();
			$("#door").append("<img id='door_img' src='" + open + "' class='img-responsive switch'>");
			door_state = false;
		}
		else {
			$("#door_img").remove();
			$("#door").append("<img id='door_img' src='" + close + "' class='img-responsive switch'>");
			door_state = true;
		}
	});
	var closewindow = "img/portfolio/off.png";
	var openwindow = "img/portfolio/on.png";
	var window_state = true;
	$("#window").click(function(){
		if (window_state == true) {
			$("#window_img").remove();
			$("#window").append("<img id='window_img' src='" + openwindow + "' class='img-responsive switch'>");
			window_state = false;
		}
		else {
			$("#window_img").remove();
			$("#window").append("<img id='window_img' src='" + closewindow + "' class='img-responsive switch'>");
			window_state = true;
		}
	});
	
	

});
