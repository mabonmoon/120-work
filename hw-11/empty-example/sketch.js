

//creating arrays + empty arrays

var words = ["ALIEN ICE CREAM"]
var index = 0;
var icecream = [];
//creating my canvas
function setup(){
createCanvas(1000,1000);
//putting objects into my array + creating a loop
  for( var i = 0; i < 100; i++){
//new Icecreamscoop creates new object + attaches properties defined
  icecream[i] = new Icecreamscoop(700,350);

}

}
function draw(){
  //backround color pinkish
background(207, 167, 168);

//loop for icecreamcone shape
let cone=300
while(cone<500){
fill(116, 173, 92,1);
stroke(0);
    triangle( 550, cone, 700, 950, 850, cone);
cone=cone + 2;
}



//displaying my word array advertising alien icecreammmmmmmmm
stroke(189, 223, 192);
fill(0,random(0,255),0);
textSize(40);
textStyle(BOLD);
text(words, 100, 100);



//looping through the length of my array
for (var i=0; i < icecream.length; i++){
icecream[i].move();
icecream[i].display();
  }




//removing shapes from my array with splice function
  if(icecream.length>50){
    icecream.splice(0,1)
  }

}


//defining my constructor function for Icecreamscoop object and creating parameters

function Icecreamscoop(x,y) {
  //attaching property to function
this.x = x;
this.y = y;
//the way I want my objects to look attaching display function
this.display = function() {
  //randomizing colors
//slowingframe rate
frameRate(3);
    //alien ice cream is shades of grey. I don't know why. what color is alien ice cream?
    fill(random(0,200));
  stroke(189, 223, 192);
  ellipse(this.x, this.y, 350, 350);



}


//creating movement for my object
this.move = function() {
  this.x = this.x + random(-5, 5);
  this.y = this.y + random(-5, 5);

  }

//new constructor for my alien guys when you click the mouse!
}
function Alien(x,y) {
  //attaching property to function
this.x = x;
this.y = y;
//the way I want my objects to look attaching display function
this.display = function() {

    noStroke();
    fill(116, 181, 120);
  ellipse(this.x, this.y, 175, 275);
  //alien eye balls
fill(0);
    ellipse(this.x-25,this.y-25,60,70);
    ellipse(this.x+25,this.y-25,60,70);
    fill(255)
        ellipse(this.x-25,this.y-25,40,40);
        ellipse(this.x+25,this.y-25,40,40);
        fill(0);
            ellipse(this.x-25,this.y-25,10,10);
            ellipse(this.x+25,this.y-25,10,10);

            //alien smile
    arc(this.x, this.y+70, 80, 80, 0, PI);

    //alien saying yum
    textSize(32);
    text('YUM!',this.x,this.y+200);

}


//creating movement for my object
this.move = function() {
  this.x = this.x + random(-10, 10);
  this.y = this.y + random(-10, 10);

}

}
//aliens
function mousePressed() {
icecream.push(new Alien(mouseX,mouseY));
}
