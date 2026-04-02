
var numberOfSteaks = 3;
var steakXArray = [];
var steakYArray = [];
var steakSizeArray = [];
var steak;

var myAnimations;
var SingleImage;
var myFoodArray = [];

var idle1;
var count = 0;
var idleImages = [];
var walkImages = [];
var jumpImages = [];
var x=0;
var y=0;
var speed = 6;

var direction = -1;
var jumpCount = 0;
var myTimer;



function preload() {
    myAnimations = new animations(random(0,300), random(0,300), 5);
      let x = random(0,300);
      let y = random(0,300);
      
    for (var i =0; i < 10; i++) {
       //idleImages[i] = loadImage("assets/dino/Idle (" + (i + 1)+").png");
        //walkImages[i] = loadImage("assets/dino/Walk (" + (i + 1) + ").png");
        //jumpImages[i] = loadImage("assets/dino/Jump (" + (i + 1) +").png");

        idleImages[i] = new individualFrame(x,y, "assets/dino/Idle (" + (i + 1) + ").png");
        walkImages[i] = new individualFrame(x,y, "assets/dino/Walk (" + (i + 1) + ").png");
    }
steak = loadImage("assets/food/steak.png");
loadImage("assets/food/chicken.png");
loadImage("assets/food/bacon.png");

}

function setup() {
    createCanvas(400,400);
    //for (var i = 0; i < numberOfSteaks; i++) {

       // steakXArray[i] = random(0,400);
        //steakYArray[i] = random(100,200);
   // }

   displayFood();
   myTimer = setInterval(timeIt, 100);

}

function draw() {
    background(220);
    displayFood();

    for (var i = 0; i < idleImages.length; i++) {
        idleImages[i].resizeImage(0,200);
        walkImages[i].resizeImage(0,200);
        //jumpImages[i].resize(0,200);
    }

    moveAround();
    
    myAnimations.resizeImages();

console.log(frameCount);
  if (frameCount % myAnimations.idleImages.length == 0) {
      count = (count + 1) % myAnimations.idleImages.length;
    }

myAnimations.moveAround();

    for (var i = 0; i < myFoodArray.length; i++) {
      var didICollide = myAnimations.collision(myFoodArray[i]);

      if(didIColide){
        //remove from array
        myFoodArray.splice(i+1);
        i--; //adjust the index after removing the element
      }
    }


//for (var i = 0; i < numberOfSteaks; i++) {
  //  image(steak,steakXArray[i], steakYArray[i], 50, 50);
 // }
    
    //steak.resize(50,50);
    //image(steak,x,y);

  


//if (keyIsPressed) {
  //  if (key == "a") {

    //  x -= speed;
     //image(walkImages[count], x, y);
    //}
    //if (key == "w") {
      //  y -= speed;
     //image(walkImages[count], x, y);
    //}
    //if (key == "d") {
     // x += speed;
     //image(walkImages[count], x, y);
   // }
    //if (key == "s") {
     //    y += speed;
     //image(walkImages[count], x, y);
    //}

   // if(keyCode === 32)
   // {
   //   setInterval(theJump, 24);
    // image(jumpImages[jumpCount], x, y);
   // }
   
  //}
   //else
    //{
    //  image(idleImages[count], x, y);
    //}
} //end of draw

function moveAround() {};

function timeIt() {
  console.log(count);
  count++;
  if (count >= idleImages.length) { 
    count = 0;
    clearInterval(myTimer);
  }
}

function makeOurFood() {

for (var i = 0; i < 5; i++) {
  myNewFood = new Food (random(0,400), random(0,400));
  myFoodArray.push(myNewFood)
}

}

function displayFood() {
  for (var i = 0; i < myFoodArray.length; i++) {

    myFoodArray[i].display();
  }

}