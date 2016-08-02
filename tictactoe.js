function checkPosition(a,c){
    if list[a][c] == 1{
        fill(200,55,123)
        rect([a * 200],[c * 200],199,199)
    }
    else{
        fill(255,0,0)
        rect([a * 200],[c * 200],199,199)
    }
}

function setup(){
  createCanvas(600, 600);
  background(155,255,200)
  var i
  var a
  for (i = 0; i<3; i++){
    for (a = 0; a<3; a++){
      fill(252)
      rect([a * 200],[i * 200],199,199)
    }
  }
}

function draw(){
  var list = [[0,0,0],[0,1,0],[0,0,0]]
  checkPosition(mouseX/200,mouseY/200);
}
