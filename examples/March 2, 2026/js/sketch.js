

var numberOfCircles = 5;
var direction = -1;
var myNewShape;
var myShapeArray = [];
var count = 0;
var speed = 5;
var myTimer;
var myAnimator;
var collided = false;

function preload() {
  // do something with our class here
  let x = random(0, 300);
  let y = random(0, 300);
  myAnimator = new animations(x, y, 5);

}

function setup() {
  createCanvas(400, 400);
   makeOurShapes();
  myTimer = setInterval(timeIt, 100);
}

function draw() {
  background(220);
  myAnimator.resizeImages();
  myAnimator.moveAround();

  for(var i = 0; i < myShapeArray.length; i++) {
    {
      collided = myAnimator.collision(myShapeArray[i]);
      console.log(collided);
      if(collided) {
        myShapeArray.splice(i, 1);
        i--; // Adjust index after removal
      }

    }
  }


  displayShapes();

} // end of draw

function timeIt() {

  //console.log(count);
  count++;
  if (count >= myAnimator.idleImages.length) {
    count = 0;
    //clearInterval(myTimer);
  }

}

function makeOurShapes() {

  for (var i = 0; i < 5; i++) {
    myNewShape = new makeShapes(random(0, 400), random(0, 400), 50, 50, 0, random(20, 100), random(0, 255), random(0, 255), random(0, 255));
    myShapeArray.push(myNewShape);

  }
}

function displayShapes() {
  for (var i = 0; i < myShapeArray.length; i++) {

    myShapeArray[i].drawStuff();
  }
}

