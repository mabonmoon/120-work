//constructor function to store object history's path

function Spirit(x, y) {
  //variable for x +y
  this.x = x;
  this.y = y;

//creating property with history variable for object
// empty array
  this.history = [];

  this.update = function() {
    //move randomly
    this.x += random(-10, 10);
    this.y += random(-10, 10);

//loop through entire array + move randomly
//objects location moves + its history moves

    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-2, 2);
      this.history[i].y += random(-2, 2);
    }
//create vector to store history of object using push to add
    var v = createVector(this.x, this.y);
    this.history.push(v);
    //limiting stored history by pulling out from array
    if (this.history.length > 30) {
      this.history.splice(0, 1);
    }
  }
//function to display
  this.show = function() {

  push();
  stroke(255);
 //strokeWeight(.2);
 //lines for eminating light from crystal ball
line(width/2,height/2,random(height), random(height));

//ghosts should be white, eh?
fill(255);
//loop to go through array and history
//new shape made of history
    beginShape();
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      curveVertex(pos.x,pos.y);
    }
    endShape();


  }

}
