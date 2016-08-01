function setup(){
  createCanvas(600, 600);
}

function draw(){
  background(155,255,200)
  var i
  var a
  for (i = 0; i<3; i++){
    for (a = 0; a<3; a++){
      fill(252)
      rect([a * 200],[i * 1],199,199)
    }
  }
}
