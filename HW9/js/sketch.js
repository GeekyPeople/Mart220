var player;

var count = 0 ;
var speed = 10;
var myTimer;
let timerInterval;


timeLeft = 20;


function preload() {
let x = 30
let y = 400

    player = new animations (x,y,5);
}

function setup() {
    
    createCanvas(1000,600);

    player.resizeImages();

    myTimer = setInterval(timeIt, 100);
    timerInterval = setInterval(timer, 1000);

}

function draw() {

background(220);



player.resizeImages();
player.moveAround();



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