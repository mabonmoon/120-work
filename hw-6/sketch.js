
// creating object variables

let disco = {};
disco.size = 20;
disco.x= 0 ;
disco.y=0 ;


// creating my canvas
function setup() {
createCanvas(1000, 1000);

}

function draw () {
  background(0);

//slowing the frame rate
  frameRate (5)

  // loop for celestial sand particles

  for (var sand=0; sand < width; sand= sand + 1) {
    stroke(random(0,255));
    point(sand,random(height));
    point(sand, random(width));
  }
//nesting loop for floating orbs
push();
for (var x = 0; x <= width; x = x + 50 ) {
  for (var y= 0; y <= height; y+=50 ) {
    //random colors within yellowish-gold range
  fill(random(200,255),random(175,225),random(0,100), random(0,150));
  noStroke();

//  orb mouse interaction
  var xn = random(x, mouseX);
  var yn = random(y, mouseY);
  //creating upper and lower limits for the size of the orbs controlled by the mouseX and mouseY
  var snx = mouseX%50;
  var sny = mouseY%2;
  var sn = random(constrain(snx,3,40),constrain(sny,3,20));
 ellipse(xn, yn, sn, sn);


}
}
 pop();

//move to center of canvas
translate (width/2, height/2);


  var vx=disco.x;
  var vy=disco.y;
  stroke(191, 138, 47);
  strokeWeight(1);
//loop for sun rays ... could not figure out how to make it go completely around sun circle uhghhghghghhg
  for(var i = 0; i<=90; i++){
    vy = disco.y+i;
    line(disco.x, disco.y, random(width/2-150, width/2-50), vy);

  }
  for(var i = 0; i<=90; i=i+1){
    vy = disco.y-i;
    line(disco.x, disco.y, random(width/2-150, width/2-50), vy);

  }
  for(var i = 0; i<=90; i=i+1){
    vy = disco.y+i;
    line(disco.x, disco.y, -random(width/2-150, width/2-50), vy);

  }
  for(var i = 0; i<=90; i=i+1){
    vy = disco.y-i;
    line(disco.x, disco.y, -random(width/2-150, width/2-50), vy);

  }
  //creating central sun
  fill(209, 178, 84,200);
  stroke(0);
  noStroke();
  ellipse(disco.x,disco.y, 200, 200);



}
