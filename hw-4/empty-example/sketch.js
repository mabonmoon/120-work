
//creating my canvas
function setup () {
  createCanvas ( 600, 800 );
}

//conjuring the draw function!

function draw() {

//backgroung color
  background('rgba(203, 202, 192, 0.77)');


  push();

//face shape
fill('white');
noStroke();
arc( 400,  215,  271,  288,  radians( 90 ), radians( 270 ));


//chin
arc(  360,  340,  100,  100,  QUARTER_PI,  QUARTER_PI );
pop();

//nose
fill( 'rgb( 179,  208,  223 )' );
triangle( 267, 224,  242,  295,  290,  304 );
triangle( 243, 296, 252,  306,  264,  300 );
triangle( 254, 306, 279,  306,  270,  311 );

// lips
fill( 'red' );
triangle( 267, 330, 307, 343, 282, 344 );
triangle( 280, 360, 283, 345, 310, 348 );

//cheek
fill( 'rgb( 179,  208,  223 )' );
triangle( 297, 245, 290, 302, 396, 302 );
triangle( 263, 225, 297, 245, 290, 302 );
triangle( 396, 304, 291, 306, 310, 345 );
triangle( 265, 225, 275, 160, 375, 275 );
triangle( 350, 390, 310, 350, 375, 310 );

//eye
fill( 'white' );
triangle( 297, 245, 290, 220, 340, 225 );
fill( 'black' );
ellipse( 300, 235, 15, 15 );

//eyelashes
line(  290, 225, 340, 225  );
line(  290, 220, 340, 225  );
line(  290, 215, 340, 225  );
line(  290, 210, 340, 225  );
line(  297, 250, 337, 225  );
line(  297, 255, 337, 225  );
line(  297, 260, 337, 225  );



//body
fill('black')
triangle( 400, 400, 400, 800, 550, 800 );
arc(  475,  515,  200,  188,  radians( 90 ), radians( 270 ) );

//hair

fill( 'rgb( 103,  106,  113 )');
triangle(  250,  100,  445,  9,  425,  305  );
triangle(  445,  9,  425,  305,  550,  200  );
triangle(  550,  200,  500,  350,  550,  750  );
triangle(  425,  305,  550,  200,  500,  750  );
triangle(  400,  500,  425,  300,  500,  775  );

triangle(  400,  275,  425,  300,  425,  790  );

triangle(  400,  275,  400,  500,  425,  700  );



//horn **THIS TOOK FOREVER PLEASE OH PLEASE HELP WITH A SHORTCUT FOR THIS KIND  OF A THING! AHHH**
fill( 'white' );

ellipse( 440, 180, 100, 100 );
ellipse( 441, 181, 100, 100 );
ellipse( 442, 182, 100, 100 );
ellipse( 443, 183, 100, 100 );
ellipse( 444, 184, 100, 100 );
ellipse( 445, 185, 100, 100 );
ellipse( 446, 186, 100, 100 );
ellipse( 447, 187, 100, 100 );
ellipse( 448, 188, 100, 100 );
ellipse( 449, 189, 100, 100 );
ellipse( 450, 190, 100, 100 );
ellipse( 451, 191, 100, 100 );
ellipse( 452, 192, 100, 100 );
ellipse( 453, 193, 100, 100 );
ellipse( 454, 194, 100, 100 );
ellipse( 455, 195, 100, 100 );
ellipse( 456, 196, 100, 100 );
ellipse( 457, 197, 100, 100 );
ellipse( 458, 198, 100, 100 );
ellipse( 459, 199, 100, 100 );
ellipse( 460, 200, 100, 100 );
ellipse( 461, 201, 100, 100 );
ellipse( 461, 202, 100, 100 );
ellipse( 461, 203, 100, 100 );
ellipse( 461, 204, 100, 100 );
ellipse( 461, 205, 100, 100 );
ellipse( 461, 206, 100, 100 );
ellipse( 461, 207, 100, 100 );
ellipse( 461, 208, 100, 100 );
ellipse( 461, 209, 100, 100 );
ellipse( 461, 210, 100, 100 );
ellipse( 461, 211, 100, 100 );
ellipse( 461, 212, 100, 100 );
ellipse( 461, 213, 100, 100 );
ellipse( 461, 214, 100, 100 );
ellipse( 461, 215, 100, 100 );
ellipse( 461, 216, 100, 100 );
ellipse( 461, 217, 100, 100 );
ellipse( 461, 218, 100, 100 );
ellipse( 461, 219, 100, 100 );
ellipse( 461, 220, 100, 100 );
ellipse( 461, 221, 100, 100 );
ellipse( 461, 222, 100, 100 );
ellipse( 461, 223, 100, 100 );
ellipse( 461, 224, 100, 100 );
ellipse( 461, 225, 100, 100 );
ellipse( 461, 226, 100, 100 );
ellipse( 461, 227, 100, 100 );
ellipse( 461, 228, 100, 100 );
ellipse( 461, 229, 100, 100 );
ellipse( 461, 230, 100, 100 );
ellipse( 461, 231, 100, 100 );
ellipse( 461, 232, 100, 100 );
ellipse( 461, 233, 100, 100 );
ellipse( 461, 234, 100, 100 );
ellipse( 461, 235, 100, 100 );
ellipse( 461, 236, 100, 100 );
ellipse( 461, 237, 100, 100 );
ellipse( 461, 238, 100, 100 );
ellipse( 461, 239, 100, 100 );
ellipse( 461, 240, 100, 100 );
ellipse( 461, 241, 100, 100 );
ellipse( 461, 242, 100, 100 );
ellipse( 461, 243, 100, 100 );
ellipse( 461, 244, 100, 100 );
ellipse( 461, 245, 100, 100 );
ellipse( 461, 246, 100, 100 );
ellipse( 461, 247, 100, 100 );
ellipse( 461, 248, 100, 100 );
ellipse( 461, 249, 100, 100 );
ellipse( 461, 250, 100, 100 );
ellipse( 461, 251, 100, 100 );
ellipse( 461, 252, 100, 100 );
ellipse( 461, 253, 100, 100 );
ellipse( 461, 254, 100, 100 );
ellipse( 461, 255, 100, 100 );
ellipse( 461, 256, 100, 100 );
ellipse( 461, 257, 100, 100 );
ellipse( 461, 258, 100, 100 );
ellipse( 461, 259, 100, 100 );
ellipse( 461, 260, 100, 100 );
ellipse( 461, 261, 100, 100 );
ellipse( 461, 262, 100, 100 );
ellipse( 461, 263, 100, 100 );
ellipse( 461, 264, 100, 100 );
ellipse( 461, 265, 100, 100 );
ellipse( 461, 266, 100, 100 );
ellipse( 461, 267, 100, 100 );
ellipse( 461, 268, 100, 100 );
ellipse( 461, 269, 100, 100 );
ellipse( 461, 270, 100, 100 );
ellipse( 461, 271, 99, 100 );
ellipse( 461, 272, 98, 100 );
ellipse( 460, 273, 97, 99 );
ellipse( 459, 274, 96, 98 );
ellipse( 458, 275, 95, 97 );
ellipse( 457, 276, 94, 96 );
ellipse( 456, 277, 93, 95 );
ellipse( 455, 278, 92, 94 );
ellipse( 454, 279, 91, 93 );
ellipse( 453, 280, 90, 92 );
ellipse( 452, 281, 89, 91 );
ellipse( 451, 282, 88, 90 );
ellipse( 450, 283, 87, 89 );
ellipse( 449, 284, 86, 88 );
ellipse( 448, 285, 85, 87 );
ellipse( 447, 286, 84, 86 );
ellipse( 446, 287, 83, 85 );
ellipse( 445, 288, 82, 84 );
ellipse( 444, 289, 81, 83 );
ellipse( 443, 290, 80, 82 );
ellipse( 442, 291, 79, 81 );
ellipse( 441, 292, 78, 80 );
ellipse( 440, 293, 77, 79 );
ellipse( 439, 294, 76, 78 );
ellipse( 438, 295, 75, 77 );
ellipse( 437, 296, 74, 76 );
ellipse( 436, 297, 73, 75 );
ellipse( 435, 298, 72, 74 );
ellipse( 434, 299, 71, 73 );
ellipse( 433, 300, 70, 72 );
ellipse( 432, 301, 69, 71 );
ellipse( 431, 302, 68, 70 );
ellipse( 430, 303, 67, 69 );
ellipse( 429, 304, 66, 68 );
ellipse( 428, 305, 65, 67 );
ellipse( 427, 306, 64, 66 );
ellipse( 426, 307, 63, 65 );
ellipse( 425, 308, 62, 64 );
ellipse( 424, 309, 61, 63 );
ellipse( 423, 310, 60, 62 );
ellipse( 422, 311, 59, 61 );
ellipse( 421, 312, 58, 60 );
ellipse( 420, 313, 57, 59 );
ellipse( 419, 314, 56, 58 );
ellipse( 418, 315, 55, 57 );
ellipse( 417, 316, 54, 56 );
ellipse( 416, 317, 53, 55 );
ellipse( 415, 318, 52, 54 );
ellipse( 414, 319, 51, 53 );
ellipse( 413, 320, 50, 52 );
ellipse( 412, 321, 49, 51 );
ellipse( 411, 322, 48, 50 );
ellipse( 410, 323, 47, 49 );
ellipse( 409, 324, 46, 48 );
ellipse( 408, 325, 45, 47 );
ellipse( 407, 326, 44, 46 );
ellipse( 406, 327, 43, 45 );
ellipse( 405, 328, 42, 44 );
ellipse( 404, 329, 41, 43 );
ellipse( 403, 330, 40, 42 );
ellipse( 402, 331, 39, 41 );
ellipse( 401, 332, 38, 40 );
ellipse( 400, 332, 38, 39 );
ellipse( 399, 333, 37, 38 );
ellipse( 398, 334, 36, 37 );
ellipse( 397, 335, 35, 36 );
ellipse( 396, 336, 34, 35 );
ellipse( 395, 337, 33, 34 );
ellipse( 394, 338, 32, 33 );
ellipse( 393, 339, 31, 32 );
ellipse( 392, 340, 30, 31 );
ellipse( 391, 341, 29, 30 );
ellipse( 390, 342, 28, 29 );
ellipse( 389, 343, 27, 28 );
ellipse( 388, 344, 26, 27 );
ellipse( 387, 345, 25, 26 );
ellipse( 386, 346, 24, 25 );
ellipse( 385, 347, 23, 24 );
ellipse( 384, 348, 22, 23 );
ellipse( 383, 349, 21, 22 );
ellipse( 382, 350, 20, 21 );
ellipse( 381, 351, 19, 20 );
ellipse( 380, 352, 18, 19 );
ellipse( 379, 353, 17, 18 );
ellipse( 378, 354, 16, 17 );
ellipse( 377, 355, 15, 16 );
ellipse( 376, 356, 14, 15 );
ellipse( 375, 357, 13, 14 );
ellipse( 374, 358, 12, 13 );
ellipse( 373, 359, 11, 12 );
ellipse( 372, 360, 10, 11 );
ellipse( 371, 361, 9, 10 );

ellipse( 370, 362, 8, 9 );
ellipse( 369, 363, 7, 8 );
ellipse( 368, 364, 6, 7 );
ellipse( 367, 365, 5, 6 );
ellipse( 366, 366, 4, 5 );
ellipse( 365, 367, 3, 4 );
ellipse( 364, 368, 2, 3 );
ellipse( 363, 369, 1, 2 );

}
