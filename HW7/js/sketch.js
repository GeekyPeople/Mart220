var numberOfCircles = 1;
var direction = -1

var count = 0;
var speed = 20;
var myTimer;
var myAnimator;
var collided = false;
timeLeft = 20;
let timerInterval
let steakImg;

var myNewFood;
var myFoodArray = [];

score = 0;

  
function preload() {
    let x = random(0,300);
    let y = random(0,300);
    myAnimator = new animations (x,y,5);
    
    loadImage("assets/food/steak.png");

}

function setup() {

    createCanvas(400,400);
   
    makeOurFood();
    myAnimator.resizeImages();

    myTimer = setInterval(timeIt, 1000);
    timerInterval = setInterval(timer, 1000);



}

function draw() {

    background(220);
    
    
    myAnimator.resizeImages();
    myAnimator.moveAround();

    checkCollisions();

   
    displayFood();
    fill(0);
    textSize(30);
    text("Time Left: " + timeLeft, 10, 30);
    if(timeLeft<=0){
        fill(0);
        textSize(64);
        text("Game Over!", width /2 -180, height / 2);
    }

    text("Score: " + score, 250, 30); 
        
   
} //end of draw

function checkCollisions() {
  
for (var i = 0; i < myFoodArray.length; i++) {
        {
            collided = myAnimator.collision(myFoodArray[i]);

            if (collided) {
                myFoodArray.splice(i,1);
                i--;
                myNewFood = new Food (random(0,300),random(0,300),'assets/food/steak.png',20);
    myFoodArray.push(myNewFood);
    score ++;
            }
        }
    }

}



function timeIt() {
    count++;
    if (count >= myAnimator.idleImages.length) {
        count=0;
    }

    //if (timerValue > 0) {
    //    timerValue--;
   // }
}


function makeOurFood() {

    for (var i = 0; i < 2; i++) {
    myNewFood = new Food (random(0,300),random(0,300),'assets/food/steak.png',20);
    myFoodArray.push(myNewFood);
}
}





function displayFood() {
    for (var i = 0; i < myFoodArray.length; i++) {
        myFoodArray[i].drawFood();
    }
}

function timer() {
    console.log("timer tick");

    timeLeft -= 1;
    if (timeLeft <=0) {
        clearInterval(timerInterval);
        noLoop();
    }
}