$(document).ready(function(){
	var locked = "img/portfolio/lock.png";
	var unlocked = "img/portfolio/open_lock.png";
	var lock_state = true;
	$("#lock").click(function(){
		if (lock_state == true) {
			$("#lock_img").remove();
			$("#lock").append("<img id='lock_img' src='" + unlocked + "' class='img-responsive'>");
			lock_state = false;
			dweetio.dweet_for("steven", {some:"9"}, function(err,dweet){
			});
		}
		else {
			$("#lock_img").remove();
			$("#lock").append("<img id='lock_img' src='" + locked + "' class='img-responsive'>");
			lock_state = true;
			dweetio.dweet_for("steven", {some:"10"}, function(err, dweet){
			});
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
			dweetio.dweet_for("steven", {some:"3"}, function(err,dweet){
			});
		}
		else {
			$("#light1_img").remove();
			$("#light1").append("<img id='light1_img' src='" + off1 + "' class='img-responsive switch'>");
			light_state1 = true;
			dweetio.dweet_for("steven", {some:"4"}, function(err,dweet){
			});
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
			dweetio.dweet_for("steven", {some:"5"}, function(err,dweet){
			});
		}
		else {
			$("#light2_img").remove();
			$("#light2").append("<img id='light2_img' src='" + off2 + "' class='img-responsive switch'>");
			light_state2 = true;
			dweetio.dweet_for("steven", {some:"6"}, function(err,dweet){
			});
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
			dweetio.dweet_for("steven", {some:"1"}, function(err,dweet){
			});
		}
		else {
			$("#light3_img").remove();
			$("#light3").append("<img id='light3_img' src='" + off3 + "' class='img-responsive switch'>");
			light_state3 = true;
			dweetio.dweet_for("steven", {some:"2"}, function(err,dweet){
			});
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
			dweetio.dweet_for("steven", {some:"7"}, function(err,dweet){
			});
		}
		else {
			$("#door_img").remove();
			$("#door").append("<img id='door_img' src='" + close + "' class='img-responsive switch'>");
			door_state = true;
			dweetio.dweet_for("steven", {some:"8"}, function(err,dweet){
			});
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
			dweetio.dweet_for("steven", {some:"11"}, function(err,dweet){
			});
		}
		else {
			$("#window_img").remove();
			$("#window").append("<img id='window_img' src='" + closewindow + "' class='img-responsive switch'>");
			window_state = true;
			dweetio.dweet_for("steven", {some:"12"}, function(err,dweet){
			});
		}
	});
	
	

});
