function setup(){
  createCanvas(400, 200);
  background(204);
  angleMode(DEGREES);
}

function draw() {
fill(178,34,34)
beginShape();
vertex(70,120);
vertex(75,90);
vertex(50,100);
vertex(150,20);
vertex(350,90);
vertex(200,90);
vertex(350,150);
vertex(140,100);
vertex(140,150);
endShape();
fill(0, 128, 0);
ellipse(145, 50, 8, 8);
}
