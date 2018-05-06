

//empty arrays for my objects
//var freeSpirit;

var crystalball = [];
var spirits = [];
// creating variables for my image, song, and twinkly sound
var img;
var song;
var freethespirit;
//preloading my image and background song and sound
function preload() {
  img = loadImage('images/hand.png');
  song = loadSound('sounds/the-whistled-air.mp3');
  freethespirit = loadSound('sounds/magic-twinkle.mp3');
}


function setup() {
  //creating my canvas
  createCanvas(1000, 1000);
  //song = loadSound('the-whistled-air.mp3');
  //loop background song
    song.loop();
  //loading image
  img = loadImage("images/hand.png");
  //displaying my crystal ball object
   for( var i = 0; i < 100; i++){
      crystalball[i] = new crystalBall(width/2,height/2);
    }



}


function draw() {
  background(200);
  //placing image
    image(img, 0, 0);

    //array for all possible spirits
  for (var i = 0; i < spirits.length; i++) {
    //object update + display
    spirits[i].update();
    spirits[i].show();
  }
//movement and display for crystal ball
  for (var i=0; i < crystalball.length; i++){
crystalball[i].move();
crystalball[i].display();
  }

//removing shapes from my array with splice function
  if(crystalball.length>50) {
    crystalball.splice(0,1);

}

//////CENTRAL CLOCK///////// ignore this code i just want to save it
/*push();
translate(500,500);
angleMode(DEGREES);
rotate(-90);
let secondz = second();

//seconds arc

stroke(255);
strokeWeight(1);
noFill();
let secondAngle= map(secondz, 0, 60, 0, 360);

for (var c=0; c < 300; c= c+10 ) {
arc(0, 0,c,c,0,secondAngle);

}
pop();
*/

}
//when the mouse is pressed a spirit is freed + a magical sound happens
function mousePressed() {
  //new spirit object when mouse pressed & at mouse's position
  spirits.push(new Spirit(mouseX, mouseY));
  //spirit sound when mouse pressed
  freethespirit.play();
}
