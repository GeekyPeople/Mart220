

var numberOfCircles = 5;
var circleXArray = [];
var circleYArray = [];
var circleSizeArray = [];



var idle1;
var count = 0;
var idleImages = [];
var walkImages = [];
var jumpImages = [];
var x = 0;
var y = 0;
var speed = 5;

var direction = -1;
var jumpCount = 0;
function preload() {
 

  for (var i = 0; i < 10; i++) {
    idleImages[i] = loadImage("assets/images/Idle (" + (i + 1) + ").png");
   walkImages[i] = loadImage("assets/images/Walk (" + (i + 1) + ").png");
   jumpImages[i] = loadImage("assets/images/Jump (" + (i + 1) + ").png");
 
  }

}

function setup() {
  createCanvas(400, 400);
  // this "i" only exists in this loop
  for (var i = 0; i < numberOfCircles; i++) {

    circleXArray[i] = random(0, 400);
    circleYArray[i] = random(100, 200);
  }

  setInterval(timeIt, 24);
  
  
}

function draw() {
  background(220);

  for (var i = 0; i < idleImages.length; i++) {
    idleImages[i].resize(0, 200);
    walkImages[i].resize(0,200);
    jumpImages[i].resize(0,200);
  }

  

  

  /*console.log(frameCount);
  if (frameCount % speed === 0) {
      count = (count + 1) % idleImages.length;
    }*/

  fill(255, 0, 0);
  // displayed here and it happens every frame
  //for (var i = 0; i < numberOfCircles; i++) {
  //  ellipse(circleXArray[i], circleYArray[i], 50, 50);
  //}

  //circle(x, y, 50);

  if (keyIsPressed) {
    if (key == "a") {

      x -= speed;
     image(walkImages[count], x, y);
    }
    if (key == "w") {
        y -= speed;
     image(walkImages[count], x, y);
    }
    if (key == "d") {
      x += speed;
     image(walkImages[count], x, y);
    }
    if (key == "s") {
         y += speed;
     image(walkImages[count], x, y);
    }

    if(keyCode === 32)
    {
      setInterval(theJump, 24);
     image(jumpImages[jumpCount], x, y);
    }
   
  }
   else
    {
      image(idleImages[count], x, y);
    }
}

function timeIt() {
  count++;
  if (count >= idleImages.length) { 
    count = 0;
  }
}

function theJump() {
 
  if (jumpCount >= idleImages.length || jumpCount == 0) { 
    direction *= -1;
  }
   jumpCount+=direction;

   y+=direction *3;
  //if (count >= idleImages.length) { 
  //  count = 0;
  //}
}