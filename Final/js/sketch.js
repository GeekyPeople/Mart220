var player;
var tree;

var count = 0 ;
var counter = 0;
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
health = 20;


var BG;
var cave;
var ground;
var groundTileSize = 100; // Size of each ground tile
var groundLevel = 535; // Y position of ground

var myMeteor;
var myMeteorArray = [];
grav = 0.5;



function preload() {
    let x= 30;
    let y= 370;


    player = new animations (x,y,5);
     
    loadImage ('assets/tree.png');
    loadImage("assets/food/steak.png");
    loadImage("assets/food/bug.png");
    BG = loadImage("assets/BG.png");
    cave = loadImage("assets/cave2.png");
    ground = loadImage("assets/ground.png");
    meteor = loadImage("assets/meteor.png");
    

    myMusic = loadSound("assets/sounds/music.wav");
    myOw = loadSound("assets/sounds/ow.wav");
    myEat = loadSound("assets/sounds/eat.wav");
} 

function setup() {
    
    createCanvas(1000,600);

    player.resizeImages();
    makeOurFood();
    
   // makeTree();


setInterval(incrementCounter, 1000);


    for (let i = 0; i < myTreeArray.length; i++) {
        myTreeArray[i].immovable = true
    }

    myTimer = setInterval(timeIt, 100);
    timerInterval = setInterval(timer, 1000);

     myMusic.play();
    myOw.play();
    myEat.play();

   mFall();
makeMeteor();


}

function draw() {

    background(BG, [255]);
    // Display procedurally generated ground
    displayGround();
    player.resizeImages();
    image(cave, -150, 360, 200, 200);
    player.moveAround(myTreeArray);
    camera.position.x = player.x + width/3;
    camera.position.y = height/2;
    checkCollisions();
    displayMeteor();  // Moved here
    displayFood();    // Moved here
    fill(0);
    textSize(30);
    //text("Score: " + score, -150 + player.x, 30);
   //text("Health: " + health, -150 + player.x, 60);
   
     text("Score: " + score, -150 + player.x, 30);
    text("Health: " + health, -150 + player.x, 60);
    
   if (health <= 0) {
    fill(255, 0, 0);
    textSize(60);
    text("You Lose!", camera.position.x - 150, camera.position.y);
    noLoop();
}  if (score == 20) {
    fill(0, 255, 0);
    textSize(60);
    text("You Win!", camera.position.x - 120, camera.position.y);
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
                myNewFood = new Food (player.x + random(0,700),random(200,300),'assets/food/steak.png',50);
    myFoodArray.push(myNewFood);
    score ++;
    health ++;
    myEat.play();
    console.log("collided");
            }
        }
    }

   

    for (var i = 0; i < myMeteorArray.length; i++) {
    collided = player.collision(myMeteorArray[i]);
    if (collided) {
        myMeteorArray.splice(i, 1);
        i--;
        health--;  // Add health reduction
        myOw.play();  // Add sound
         myMeteor = new Meteor(player.x + random(100, 400), random(0, 300), 'assets/meteor.png', 40); myMeteorArray.push(myMeteor);
    }
}

}



function makeMeteor() {
    
    for (var i = 0; i < 4; i++) {
       
        myMeteor = new Meteor (random(100,900), random(200,300), 'assets/meteor.png', 40);
        //myMeteor.resizeImage();
myMeteor.fall();
 
myMeteorArray.push(myMeteor);
        
        myMeteor.fall();
        
    }
}

function displayMeteor() {
    for (var i = 0; i < myMeteorArray.length; i++) {
        myMeteorArray[i].fall();
        if (myMeteorArray[i].y >= 530) {
            myMeteorArray.splice(i, 1);
            i--;
            myMeteorArray.push(new Meteor(player.x + random(100, 400), random(0, 300), 'assets/meteor.png', 40));
        } else {
            myMeteorArray[i].drawMeteor();
        }
    }
}

function mFall(myMeteorArray) {
    if (this.y >= 530) {
        console.log("reset")
    myMeteorArray.splice(i,1);
            i--;
             myMeteor = new Meteor (random(0,900), random(0,300), 'assets/meteor.png', 40);
    }
}


function makeOurFood() {

    for (var i = 0; i < 6; i++) {
    myNewFood = new Food (random(50,900),random(400,520),'assets/food/steak.png',50);
    myFoodArray.push(myNewFood);

    //myBadFood = new Food(random(0,300),random(0,300), "assets/food/bug.png", 20);
    //myBadFoodArray.push(myBadFood);
    }
}




function displayFood() {
    for (var i = 0; i < myFoodArray.length; i++) {
              
        myFoodArray[i].drawFood();
    }

   // for (var i = 0; i <myBadFoodArray.length; i++) {
//myBadFoodArray[i].drawFood();
  //  }
}

function displayGround() {
    // Create procedurally generated ground using tiled ground.png
    // Calculate how many tiles we need based on camera position and screen width
    let startTile = floor((camera.position.x - width/2 - 100) / groundTileSize);
    let endTile = floor((camera.position.x + width/2 + 100) / groundTileSize);
    
    // Draw ground tiles from left to right
    for (let i = startTile; i <= endTile; i++) {
        let xPos = i * groundTileSize;
        image(ground, xPos, groundLevel, groundTileSize, groundTileSize);
    }
}


   



function incrementCounter() {
    grav ++;
}





function timeIt() {
    count++;
    if (count >= player.idleImages.length) {
        count=0;
    }

    counter++;
    if (counter >3) {
        counter = 0;
    }

    grav += 1;

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

    grav += 1;

}

function mousePressed() {
    if (!myMusic.isPlaying()) {
        myMusic.play();
       // myMusic.volume(.03);
        myMusic.loop();
    }
    else {
        myMusic.stop();
    }
}

function keyPressed() {
    if (key === ' ') {
        player.jump();
        
        
    }
}