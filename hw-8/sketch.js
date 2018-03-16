
//creating global variable

let ruffle = {};
ruffle.x= 0 ;


//creating my canvas
function setup () {
  createCanvas ( 1000, 1000 );
}

//calling draw fucntion
function draw() {
  background(30);


//windy random lines of chaos for my ghost lady
var vx=ruffle.x;
//color of lines
  stroke(240, 233, 233,);
 for(var i = 0; i<=width; i++){
   vx = ruffle.x+i
  line(vx,0, random(height), random(height));

}


 //hair behind face
push();
fill(220);
triangle(500,600,460,78,400,500)
triangle(500,600,460,78,650,500)
triangle(650,500,460,78,520,40)
pop();


  //face shape
  push();
  fill(190)
ellipse(512, 170, 175,300);
pop();


//left shut eye
  push();
  fill(219, 200, 134)
  stroke(0);
    let zz = 150;
  while(zz<170){
    triangle( 470, zz, 450, 170, 490, 170);
    zz = zz+5;
  }
//right shut eye
  let z = 150;
while(z<170){
  triangle( 550, z, 530, 170, 570, 170);
  z = z+5;
}
pop();

//eye brows
push();
fill(175);
for (let i = 440; i < 500; i++) {

      triangle(i, 120, i, 120, 430, 115);
      i=i+1;

  }
//this eyebrow side isn't slanting exactly how I want it, but her bangs are coming it up anyways, hrmph
  for (let i = 520; i < 580; i++) {

        triangle(i, 120, i, 120, 510, 115);
        i=i+1;

      }

pop();

//hair in front of face (did separate from previous hair due to order of overlap)
push();
fill(200);
triangle(435,60,460,78,400,500);
triangle(500,0,600,30,650,500);
triangle(435,60,500,0,630,200);
pop();



  //nose shape
  push();
  stroke(219, 200, 134);
    let y = 170;
while(y<235){
  triangle( 495, 225, 530, 225,505,y);
  y = y+5;
}
pop();


//lips
push();
fill('pink');
triangle(480,270,540,270,510,280);

triangle(480,270,510,270,500,260);

triangle(510,270,540,270,520,260);
pop();


}
