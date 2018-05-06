var birdlady;  // Declare variable 'img'.


function preload(){
  birdlady = loadImage ("./images/birdlady.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
backgroung(255);
imageMode(CENTER);
image(birdlady,width/2, height/2, 100, 100);
}
