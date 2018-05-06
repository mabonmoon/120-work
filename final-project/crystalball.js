//constructor function

function crystalBall(x,y) {
  //attaching property to function
this.x = x;
this.y = y;
//the way I want my objects to look attaching display function
this.display = function() {

//gold tone
  fill(255,215,0,10);
  noStroke();
//my crystal ball sphere wasn't completely centered in photoshop so a little adjustment here to make it perfect on the canvas
  ellipse(this.x, this.y+8, 290, 290);


  }


  //creating movement for my crystall ball
  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

    }


  }
