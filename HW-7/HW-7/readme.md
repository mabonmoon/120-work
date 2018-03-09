Your Name, Your Section Number

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

First we create a global object and initialize its elements.
Then we setting up our canvas + direct its background color.
Then we call the draw function.

Delta is the direction of change, and scale is the amount of change. If these parameters change then x and y positions will be affected.

Within the conditional statements we are stating that if ball x or ball y is greater than or equal to the width or height of the canvas, then delta (the direction of change)  will be multiplied by -1 which will keep the ball within the canvas by changing direction when it hits either end.

We then create the ellipse or the ball with fill color and assigned elements

In the map function changing the parameters of the target range will make the ball move to a greater or lesser degree depending on the range!





## How did you alter the sketch?

Made the canvas windowWidth and windowHeight for full effect, of course!  I played with randomizing the color elements in a specified number of frames, and when the mouse is pressed turning it into some lovely opalescent celestial worm thing. Also increasing the size of the ellipse with each frame. Experimented with the scale ranges within the map function. That was confusing as hell, but I finally understood my goal was to alter its target range when the mouse is clicked, which is the amount of change from its current position.
