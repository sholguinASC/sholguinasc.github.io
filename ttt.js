function setup(){
  createCanvas(600, 600, WEBGL);
}

function draw(){
  var i
  var a
  for (i = 0; i==3; i++){
    for (a = 0; a==3; a++){
      background(200);
      plane(200,200,[a * 200],[i * 1])
}
