
// creating global variables

var timer;
var timerSet = false;
var words = ["Hungry Ladybug Game \n eat 10 bugs in 30 seconds"]
var hungry;
var sz = 50;
var food;

//creating createCanvas
function setup(){
createCanvas(800,500);
//creating object of Bug named hungry
hungry = new Bug();
//slowing framerate
frameRate(10);
//creating the food
pickLocation();
}

//randomizing location as food is eaten
function pickLocation(){

  var cols = floor(width/sz);
  var rows = floor(height/sz);
//create a spot on the canvas for the food to fill
  food= createVector(floor(random(cols)),floor(random(rows)));
  food.mult(sz);
  }

function draw(){
  //background greenish
background(126, 186, 164);
//display text
textSize(20);
textStyle(BOLD);
text(words, 100, 20);

hungry.update();
hungry.show();
//if ladybug and food are within 1px ladybug gets to eat and move the food
if (hungry.eat(food)) {
pickLocation();
hungry.full++ ;

}
//lady bug foooood
fill(0);
 ellipse(food.x, food.y, random(sz),random(sz));



}
//both initilizing the timer and/or movin the ladybug with arrow keys
function keyPressed() {
  if (!timerSet) {
    timerSet = true;
timer = setTimeout(bugTimer, 30000 );
  }
  if(keyCode === UP_ARROW) {
hungry.dir(0, -1);
  } else if (keyCode=== DOWN_ARROW){
    hungry.dir(0, 1);
  } else if (keyCode=== RIGHT_ARROW) {
    hungry.dir(1, 0);
  } else if (keyCode=== LEFT_ARROW){
    hungry.dir(-1, 0);
  }
}
//when the timer runs out checking the win/lose conditions and display appropriate text
function bugTimer() {
food = false;

var wordz = "YOU HAVE EATEN " + hungry.full + " BUGS" ;

if (hungry.full >=10) {
  wordz+="\n YOU WIN";

} else {
  wordz+="\n YOU LOSE";
}
  words = wordz;
}
