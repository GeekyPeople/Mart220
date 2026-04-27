var player;
var tree;

var count = 0 ;
var speed = 10;
var myTimer;
let timerInterval;

var myTree;
var myTreeArray = [];

timeLeft = 20;

var myNewFood;
var myBadFood;
var myFoodArray = [];
var myBadFoodArray = [];
var collided = false;

score = 0;
health = 10;


function preload() {
let x = 30
let y = 400

    player = new animations (x,y,5);
    loadImage ('assets/tree.png');
    loadImage("assets/food/steak.png");
    loadImage("assets/food/bug.png");

    myMusic = loadSound("assets/sounds/music.wav");
    myOw = loadSound("assets/sounds/ow.wav");
    myEat = loadSound("assets/sounds/eat.wav");
} 

function setup() {
    
    createCanvas(1000,600);

    player.resizeImages();
    makeOurFood();
    makeTree();

    for (let i = 0; i < myTreeArray.length; i++) {
        myTreeArray[i].immovable = true
    }

    myTimer = setInterval(timeIt, 100);
    timerInterval = setInterval(timer, 1000);

     myMusic.play();
    myOw.play();
    myEat.play();

    

}

function draw() {

background('#228b22');



player.resizeImages();
player.moveAround(myTreeArray);

displayTree();

checkCollisions();
displayFood();

fill(0);
textSize(30);
text("Score: " + score, 10, 30);
text("Health: " + health, 10, 60);

if (score == 10) {
    fill(255,0,0);
    textSize(50);
    text("You Win!", 400, 300);
    noLoop();
}


if (health == 0) {
    fill(255,0,0);
    textSize(50);
    text("Game Over", 400, 300);
    noLoop();
}

}

function checkCollisions() {
  
for (var i = 0; i < myFoodArray.length; i++) {
        {
            collided = player.collision(myFoodArray[i]);

            if (collided) {
                myFoodArray.splice(i,1);
                i--;
                myNewFood = new Food (random(0,300),random(0,300),'assets/food/steak.png',20);
    myFoodArray.push(myNewFood);
    score ++;
    myEat.play();
            }
        }
    }

    for (var i = 0; i < myBadFoodArray.length; i++) {
collided = player.collision(myBadFoodArray[i]);
        if (collided) {
            myBadFoodArray.splice(i,1);
            i--;
            myBadFood = new Food(random(0,300),random(0,300), "assets/food/bug.png", 20);
    myBadFoodArray.push(myBadFood);
    health --;
     myOw.play();
        }
    }

}

function  makeTree() {
    
    for (var i = 0; i < 3; i++) {
        myTree = new Tree (random(0,900), random(0,500), 'assets/tree.png', 80);
        myTree.resizeImage();
        myTreeArray.push(myTree);
    }

}

function displayTree() {
    for ( var i = 0; i < myTreeArray.length; i++) {
        myTreeArray[i].drawTree();
    }
}

function makeOurFood() {

    for (var i = 0; i < 2; i++) {
    myNewFood = new Food (random(0,300),random(0,300),'assets/food/steak.png',30);
    myFoodArray.push(myNewFood);

    myBadFood = new Food(random(0,300),random(0,300), "assets/food/bug.png", 20);
    myBadFoodArray.push(myBadFood);
}



}




function displayFood() {
    for (var i = 0; i < myFoodArray.length; i++) {
        myFoodArray[i].drawFood();
    }

    for (var i = 0; i <myBadFoodArray.length; i++) {
myBadFoodArray[i].drawFood();
    }
}


function timeIt() {
    count++;
    if (count >= player.idleImages.length) {
        count=0;
    }

    //if (timerValue > 0) {
    //    timerValue--;
   // }
}

function timer() {
    console.log("timer tick");

    timeLeft -= 1;
    if (timeLeft <=0) {
        clearInterval(timerInterval);
       // noLoop();
    }
}

function mousePressed() {
    if (!myMusic.isPlaying()) {
        myMusic.play();
        myMusic.volume(.03);
        myMusic.loop();
    }
    else {
        myMusic.stop();
    }
}