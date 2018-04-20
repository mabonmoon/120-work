

//creating constructor function for ladybug object
function Bug(){
//to count how many bugs the ladybug has eaten
this.full = 0;

this.x = 0;
this.y = 0;
//keep track of speeds
this.xspeed = 1;
this.yspeed = 0;

//check position of the ladybug + food
this.eat = function(pos) {
  var d = dist(this.x,this.y, pos.x,pos.y);
  //if ladybug is in 1 pixel of food return true
  if (d < 1) {
    return true;
  } else {
    return false;
  }
}

this.dir= function (x, y) {

  this.xspeed = x;
  this.yspeed = y;
}

//x and y change by x and y speed
this.update= function(){

  this.x=this.x+this.xspeed*sz;
  this.y=this.y+this.yspeed*sz;
//contraining ladybug to avoid going off of the screen
  this.x = constrain(this.x, 0, width-sz);
  this.y = constrain(this.y, 0, height-sz);

}
//what ladybug looks like
this.show = function (){

  fill(0);
  ellipse(this.x,this.y, sz,sz);

  //antennas
  line(this.x,this.y,this.x+20,this.y-sz);
  line(this.x,this.y,this.x-20,this.y-sz);
  fill(0);
      ellipse(this.x+20,this.y-sz,5,5);
      ellipse(this.x-20,this.y-sz,5,5);
      //ladybug eye ball
        fill(186, 65, 65);
  ellipse(this.x-10,this.y, 20,sz)
  ellipse(this.x+10,this.y, 20,sz)

  fill(20);
  ellipse(this.x-10,this.y, 10,10)
  ellipse(this.x+10,this.y, 10,10)
}


}
