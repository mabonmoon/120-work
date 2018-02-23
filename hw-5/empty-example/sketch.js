//creating a variable to work with

var circle = {

  x: 0,
  y: 0,
  diameter: 1

  }




//setting up my canvas with a black background

function setup() {
createCanvas(800, 800);
background(0);


}


function draw () {


//hiding the cursor and making small white dots to trickle like stars
  noCursor();
  fill(255);
  ellipse( mouseX, mouseY, 1);



  //horizontal meteor shower

  //no outline
noStroke();

//make white
fill (255);

//using variable declared earlier, and making the shape move by adding a value to the coordinate that I want it to fall from
ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

ellipse(circle.x+50, circle.y+50, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;


ellipse(circle.x+100, circle.y+100, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+200, circle.y +200, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+300, circle.y +300, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+400, circle.y +400, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+500, circle.y +500, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+600, circle.y +600, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+700, circle.y+700, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+800, circle.y+800, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;


fill (255);
ellipse(circle.x+150, circle.y, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+250, circle.y, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+350, circle.y, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+450, circle.y, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+550, circle.y, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+650, circle.y, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+750, circle.y, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;

fill (255);
ellipse(circle.x+850, circle.y, circle.diameter, circle.diameter);
circle.y = circle.y + .1 ;




}//when canvas is clicked meteors disappear and you can just draw.

function mousePressed() {

  background(0);

}
