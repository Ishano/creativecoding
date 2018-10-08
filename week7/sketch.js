
var roof;
var spiderman;

function preload() {
  roof = loadImage('rooftop.jpeg');
  spiderman= loadImage('spiderman.png');
}
function setup() {
  createCanvas(480, 240);
  background(204);
}

function draw() {
  image(roof, 0, 0, 480, 240);
    tint(128,0,128);
  image(spiderman, mouseX-250, mouseY-120, 250, 120);
  tint(0,255,0);
}
