/*var nums = [100, 25, 46, 72];
var words = ["witch", "wizard", "mountain","moon"];
var index = 0;
var num = 23;
*/

var bubbles = [];
var img;

function preload(){
img = loadImage('images/hand.png');

}

function setup(){
  createCanvas(600,400);
  for( var i = 0; i < 5; i++){
  bubbles[i] = new Bubble(width/2,height/2);

}
}
function draw(){
background(0);
for (var i=0; i < bubbles.length; i++){
bubbles[i].move();
bubbles[i].display();
  }

//removing shapes from my array
  if(bubbles.length>10){
    bubbles.splice(0,1)
  }
}


//making a constructor function

function Bubble(x,y) {
this.x = x;
this.y = y;
//the way I want my objects to look
this.display = function() {
  //stroke(random(0,255));
  //fill(random(255),random(255),random(255));
  image(img,this.x,this.y);
  //ellipse(this.x, this.y, 24, 24);
  //line(this.x,this.y,random(width), random(height));
}

this.move = function() {
  this.x = this.x + random(-1, 1);
  this.y = this.y + random(-1, 1);

  }

}
//adding shapes to where the mouse is pressed
function mousePressed() {
bubbles.push(new Bubble(mouseX,mouseY));

}

/*for(var i=0; i < 4; i++){
stroke(255);
noFill();
  ellipse(i*100 +100,200,nums[i], nums[i]);
}



/*fill(255);
textSize(32);
text(words[index], random(width), random(height));
frameRate(12)*/

//}

/*function mousePressed(){
  index = index + 1;
//resetting my index so that the code cycles through
  if(index==words.length){

    index=0;
  }
}

x: width/2,
y: height/2,
display: function() {
  stroke(random(0,255));
  noFill();
  ellipse(this.x, this.y, 24, 24);
  line(this.x,this.y,random(width), random(height));
},
move: function() {
  this.x = this.x + random(-1, 1);
  this.y = this.y + random(-1, 1);
}*/
//}
