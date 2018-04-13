
//creating array


var index = 0;

//creating an empty array
var tears = [];
//creating my canvas
function setup(){
createCanvas(1000,1000);
//putting objects into my array + creating a loop for many tears
  for( var i = 0; i < 100; i++){
//new Tear creates new object + attaches properties defined in below function returning my object that was created in the below function Tear
  tears[i] = new Tear(700,350);



}

}
function draw(){
background(255);


let pyramid=300
while(pyramid<500){
fill(50,150,0,1)
stroke(0)
    triangle( 550, pyramid, 700, 950, 850, pyramid);
pyramid=pyramid + 2;


}



//displaying my word array randomizing where they appear
/*fill(255);
textSize(50);
text(words[index], random(width), random(height));
index=index+1;

if (index==words.length){

index=0;
}*/




//looping through the length of my array
//no matter how many tears in array loop will display every object until it reaches the array's length
for (var i=0; i < tears.length; i++){
tears[i].move();
tears[i].display();
  }



//removing shapes from my array with splice function
  if(tears.length>100){
    tears.splice(0,1)
  }

}


//defining my constructor function for Tear object and creating parameters

function Tear(x,y) {
  //attaching property to function
this.x = x;
this.y = y;
//the way I want my objects to look attaching display function
this.display = function() {
  //randomizing colors

  //slowing my frame rate so its less chaotic!
  frameRate(3);

    //further intense randomization of RGB values
    fill(random(0,100),random(0,100),0);
    noStroke();
  ellipse(this.x, this.y, 250, 250);

}


//creating movement for my object
this.move = function() {
  this.x = this.x + random(-10, 10);
  this.y = this.y + random(-10, 10);

  }

}
//adding more tears to where the mouse is pressed with push function
function mousePressed() {
tears.push(new Tear(mouseX,mouseY));
}
