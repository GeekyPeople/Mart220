

let myIdleStrings = [];
let myIdleImages = [];
let myWalkStrings = [];
let myWalkImages = [];
let count = 0;
let x = 300, y = 200;
let isLeft = false;
function preload() {

  myIdleStrings = loadStrings("assets/text/idle.txt", showCount);
  myWalkStrings = loadStrings("assets/text/walk.txt", showCount);

}

function setup() {
  createCanvas(800, 600);
  setInterval(timeIt, 100);
}

function draw() {
  background(100, 200, 100);
  myWalkImages[count].resize(200, 0);
  if (keyIsPressed) {

    if (key === 'w') {
      y -= 5;
      if (isLeft) {

        push();
        translate(200, 0);

        scale(-1, 1);

        image(myWalkImages[count], -x, y);
        pop();
      }
      else {
        image(myWalkImages[count], x, y);

      }

    }
    if (key === 's') {
      y += 5;
      if (isLeft) {

        push();
        translate(200, 0);

        scale(-1, 1);

        image(myWalkImages[count], -x, y);
        pop();
      }
      else {
        image(myWalkImages[count], x, y);

      }

    }
    if (key === 'a') {

      push();
      // moves the origin to the right edge of the image
      translate(200, 0);
      // flips the image horizontally
      scale(-1, 1);
      // draws the image at the new origin
      image(myWalkImages[count], -x, y);
      pop();
      x -= 5;
      isLeft = true;
    }
    if (key === 'd') {
      x += 5;
      image(myWalkImages[count], x, y);
      isLeft = false;
    }
    //image(myWalkImages[count], x, y);

  }
  else {
    myIdleImages[count].resize(200, 0);

    if (isLeft) {

      push();
      translate(200, 0);

      scale(-1, 1);

      image(myIdleImages[count], -x, y);
      pop();
    }
    else {
      image(myIdleImages[count], x, y);
    }
  }



}

function showCount() {
  for (let i = 0; i < myIdleStrings.length; i++) {
    myIdleImages[i] = loadImage(myIdleStrings[i]);
  }
  for (let i = 0; i < myWalkStrings.length; i++) {
    myWalkImages[i] = loadImage(myWalkStrings[i]);
  }

}

function timeIt() {
  count++;
  if (count >= myIdleStrings.length) {
    count = 0;
  }
}