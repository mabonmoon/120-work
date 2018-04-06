
//creating array

var words = ["sun", "mercury", "venus","earth","mars","jupiter","saturn","uranus","neptune"];
var index = 0;

//creating an empty array
var planets = [];
//creating my canvas
function setup(){
createCanvas(windowWidth,windowHeight);
//putting objects into my array + creating a loop for many planets
  for( var i = 0; i < 1000; i++){
//new Planet creates new object + attaches properties defined in below function returning my object that was created in the below function Planet
  planets[i] = new Planet(width/2,height/2);
}


}
function draw(){
background(0);


//displaying my word array randomizing where they appear
fill(255);
textSize(50);
text(words[index], random(width), random(height));
index=index+1;

if (index==words.length){

index=0;
}




//looping through the length of my array
//no matter how many planets in array loop will display every object until it reaches the array's length
for (var i=0; i < planets.length; i++){
planets[i].move();
planets[i].display();
  }



//removing shapes from my array with splice function
  if(planets.length>1000){
    planets.splice(0,1)
  }

}


//defining my constructor function for Planet object and creating parameters

function Planet(x,y) {
  //attaching property to function
this.x = x;
this.y = y;
//the way I want my objects to look attaching display function
this.display = function() {
  //randomizing colors
  stroke(random(0,255));
  strokeWeight(.2);
  //slowing my frame rate so its less chaotic!
  frameRate(3);
    line(this.x,this.y,random(width), random(height));
    //further intense randomization of RGB values
    fill(random(255),random(255),random(255), 50);
  ellipse(this.x, this.y, 100, 100);


}
//creating movement for my object
this.move = function() {
  this.x = this.x + random(-2, 2);
  this.y = this.y + random(-2, 2);

  }

}
//adding more planets to where the mouse is pressed with push function
function mousePressed() {
planets.push(new Planet(mouseX,mouseY));
}
