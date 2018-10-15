
var space;
var hulk;
var ironman;
var thor;
var thanos;


function preload() {
  space = loadImage('space.jpg');
  hulk= loadImage('hulk.png');
  ironman= loadImage('ironman.png');
  thor= loadImage('thor.png');
  thanos= loadImage('thanos.png');

}
function setup() {
  createCanvas(1000, 1000);
  background(204);
}

function draw() {
  image(space, 0, 0, 1000, 1000);
  image(hulk, mouseX-250, mouseY-120, 500, 500);
  image(ironman, mouseX+300, mouseY+200, 500, 500);
  image(thanos,50, 700, 300, 300);
  if(keyIsPressed) {
    if(key == 'd') {
        tint (0,191,255);
    }
  } else {
    tint (255);
  }
  image(thor,650,70,300, 300);




  //creature
  fill(255,255,0);
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
  ellipse(145, 50, 16, 16);










}
