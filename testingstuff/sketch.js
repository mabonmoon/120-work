

var circle = {

  x: 0,
  y: 100,
  diameter: 50,

}


function setup() {
createCanvas(600,400);
background(0);


}

function draw () {

noStroke();
fill (250, 200, 200,50);
ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
circle.x = circle.x + 1 ;

}

function mousePressed() {

  background(0);

}


function mousePressed() {

  background(0);
