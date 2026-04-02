

var numberOfCircles = 5;

var direction = -1;

var myNewShape;

var myShapeArray = [];

var myAnimations;

function preload() {

  // do something with our class here
  myAnimations = new animations(random(0,400), random(0,400), 5);
}

function setup() {
  createCanvas(400, 400);
  makeOurShapes();
  setInterval(timeIt, 100);
}

function draw() {
  background(220);
  displayShapes();

myAnimations.resizeImages();

  //console.log(frameCount);
  //if (frameCount % myAnimations.idleImages.length == 0) {
  //   count = (count + 1) % myAnimations.idleImages.length;
  //}

myAnimations.moveAround(); 

}

function timeIt() {
  myAnimations.count++;
  if (myAnimations.count >= myAnimations.idleImages.length) {
    myAnimations.count = 0;
  }
}

function makeOurShapes(){

  for (var i = 0; i < 50; i++) {
    myNewShape = new makeShapes(random(0, 400), random(0, 400), 50, 50, 0, random(20,100), random(0,255), random(0,255), random(0,255));
    myShapeArray.push(myNewShape);

  }
}

function displayShapes(){
  for (var i = 0; i < myShapeArray.length; i++) {
  
    myShapeArray[i].drawStuff();
  }
}

