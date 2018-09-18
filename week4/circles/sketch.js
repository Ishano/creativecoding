var x = 150;
var y = 70;
var d = 20;
var s = 290;


function setup() {
createCanvas(1000, 500);
background(204);
noFill();
}

function draw() {
  ellipse(x,y,d,d);
  ellipse(x,y,2*d, 2*d);
  ellipse(x,y,3*d, 3*d)
  ellipse(x,y,4*d, 4*d)
  ellipse(x,y,5*d, 5*d);
  ellipse(x,y,6*d, 6*d);
  ellipse(s,y,d,d);
  ellipse(s,y,2*d, 2*d);
  ellipse(s,y,3*d, 3*d);
  ellipse(s,y,4*d, 4*d);
  ellipse(s,y,5*d, 5*d);
  ellipse(s,y,6*d, 6*d);
}
