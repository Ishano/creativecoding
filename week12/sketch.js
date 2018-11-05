/*
pacman

var x = 0;
var speed = 5;
var radius= 40;
var direction =1;

function setup(){
createCanvas(480,120);
angleMode(DEGREES);
}
function draw() {
background(0);
fill (255,255,0);
if(direction==1){
x += speed;
arc (x,60, radius, radius, 45, 315);
if (x> width) {
  direction=-1;
}
}else{
  x-=speed;
  arc (x,60, radius, radius, 225, 135);
if(x<0){
  direction =1;
}
}
}


var x= 80;
var y = 0;
var speed = 5;

function setup(){
createCanvas(500,500);

}
function draw() {
background(0);
stroke(255);
currentTime= millis();
if(currentTime >2000) {
  y+= speed;
  line (x,y,x,y+20);
  line (2*x,y-30,2*x,y+20-30);
  line (3*x,y+50,3*x,y+20+50);
  line (4*x,y-10,4*x,y+20-10);
  if (y> height) {
  y=0;
  x=random(0,width);
  if(y>height) {
    y=0;
  }
}

}
}

//trajectory
var angle= 0;
var x= 0;
function setup() {
  createCanvas(480,120);
  angleMode(DEGREES);
}
function draw() {
  background(0);
  var y =sin(angle);
  ellipse(x,height/2+y*height/3,20,20);
  angle +=20;
  x+=10;
  if(x>width) {
    x=0;
  }
}
*/
function Smiley(initX, initY, size,r,g,b) {
  this.x = initX;
  this.y = initY;
  this.size = size;
  this.r = (r);
  this.g = (g);
  this.b = (b);

  this.smile = function() {
    fill(this.r,this.g, this.b)
    ellipse(this.x, this.y, this.size, this.size);
    ellipse(this.x-this.size/4, this.y-this.size/4, 2,2);
    ellipse(this.x+this.size/4, this.y-this.size/4, 2,2);
    arc(this.x, this.y,this.size/2,this.size/2,45,135);

  }
  }

var smiley1;
var smiley2;
var smiley3;
function setup() {
  createCanvas(480,240);
  background(204);
  angleMode(DEGREES);
  smiley1= new Smiley(width/2, height/2,80,200,200,0);
  smiley2= new Smiley(width/2,height/4,20,150,100,0);
  smiley3= new Smiley(width/2,height/6,40,50,50,0);
}

function draw() {
  smiley1.smile();
  smiley2.smile();
  smiley3.smile();
}
