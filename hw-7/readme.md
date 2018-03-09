Kimberly Pierson, group C

[Live Sketch Link](https://mabonmoon.github.io/120-work/hw-7)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

First we create a global object and initialize its elements. Then we set up our canvas + choose its background color, and call the draw function.

Delta is the *direction* of change, and scale is the *amount* of change. If these parameters change then x and y positions will be effected.

Within the two conditional statements we are stating that if ball x or ball y is greater than or equal to the width or height of the canvas, then delta (the direction of change)  will be multiplied by -1 which will keep the ball within the canvas by changing its direction when the ball hits either end.

We then create the ellipse (the ball) with the assigned elements.

In the map function changing the parameters of the target range will make the ball move to a greater or lesser degree depending on the range.





## How did you alter the sketch?

First I made the canvas windowWidth and windowHeight for full effect. I increased the size of the ellipse with each frame, and I played with randomizing the color elements in a specified number of frames. When the mouse is pressed it continues to randomize colors and turns it into some lovely opalescent celestial worm thing. Also I experimented with the scale ranges within the map function. That was confusing as heck, but I finally understood my goal was to alter its target range when the mouse is clicked, which is the amount of change from its current position.
