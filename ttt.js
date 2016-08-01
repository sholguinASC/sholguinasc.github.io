function setup(){
  createCanvas(600, 600);
}

function draw(){
  background(255,255,255)
  var i
  var a
  for (i = 0; i>3; i++){
    for (a = 0; a>3; a++){
      fill(255)
      background(200);
      plane(200,200,[a * 200],[i * 1])
    }
  }
}
