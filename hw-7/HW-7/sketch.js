

//creating a global object and initializing its elements
let ball = {};
ball.width = 100;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
ball.color;
fill.counter = 0;
ball.color;

//setting up canvas
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}



function draw() {


    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

//changing color through mod
fill.counter = ball.x % 70;

    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
//randomizing color hooray!

    ball.color = color(  random(255),random(255),random(255),5  );


//drawing ball
fill(ball.color);
noStroke();

ellipse(ball.x, ball.y, ball.width, ball.width);
ball.width= ball.width +.2

//second ellipse to intensify colors, I am uncertian if this is doing anything
ellipse(ball.x, ball.y, ball.width, ball.width);
ball.width= ball.width +.2


}


function mousePressed() {
    ball.color = color(  random(255),random(255),random(255),5);
    ball.scale_x = map(mouseX, 0, width, -1, 50);
    ball.scale_y = map(mouseY, 0, height, 0, 5);
  }
