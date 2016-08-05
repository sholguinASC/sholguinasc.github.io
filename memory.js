var database = firebase.database().ref();

//function for sending stuff to my databasee
function sendMessage(){
	var name = $("#name").val();
	var message = $("#message").val();
	database.push({
		'NAME':name,
		'MESSAGE':message
	});
}

database.on('child_added',function(dataRow){
	var row = dataRow.val();
	$("#messageBoard").append("<p>" + row.NAME + ":" + row.MESSAGE);
})
