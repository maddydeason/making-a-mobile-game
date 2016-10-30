//initial position
var x = 10;
var y = 10;

//rectangle dimensions
var w = 20;
var h = 30;

//speed at which it moves
var xSpeed = 2;
var ySpeed = 0;

//grab the canvas and context
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

//color zones
var blueZone, greenZone;

//update the rectangle position

/*
///////////////

CHALLENGE: Conditional movement

Make the following happen (inside of update):

1-the rectange only has a speed on X. Give it also a speed on Y and update it's position on Y

2-if the rectangle is located on x between 100 and 150, give it a speed on Y of 1, otherwise
the speed in Y is 0 (the speed on X remains 2 at all times)

///////////////////////////////////
*/

var update = function() {

  var crossedRightLimit = x >= 270;
  var crossedLeftLimit = x <= 10;

  //check if x surpases a certain value
  if(crossedRightLimit) {

    //if so, push back and reverse movement
    x = 270;
    xSpeed = -xSpeed;
  }

  //check if x is getting too close to the left border
  else if(crossedLeftLimit) {

    //if so, push back and reverse movement
    x = 10;
    xSpeed = -xSpeed;
  }

  if(x > 99 && x < 151) {
    ySpeed = 1;
  } else {
    ySpeed = 0;
  }


  x = x + xSpeed;
  y = y + ySpeed;

  //define color
  blueZone = x > 0 && x < 100;
  greenZone = !blueZone && x < 200;
};

//show it on the screen
var draw = function() {
  ctx.clearRect(0,0,500,300);

  if(blueZone) {
    ctx.fillStyle = "#3333FF";
  }
  else if(greenZone) {
    ctx.fillStyle = "#00CC66";
  }
  else {
    ctx.fillStyle = "rgb(200, 0, 100)";
  }

  
  ctx.fillRect(x, y, w, h);
};

//gets executed multiple times per second
var step = function() {

  update();
  draw();

  window.requestAnimationFrame(step);
};

//initial kick
step();