let MP;
let GRP;
let PW;
let Font;
let GRPx = 40;
let GRPy= 40;
let timeLeft = 15;
let timerInterval;


function preload() {
    MP = loadImage('images/Mashed Potatoes.png');
    GRP = loadImage('images/Garlic Roasted Potatoes.png');
    PW = loadImage('images/PotatoWedges.png');
    Font = loadFont('media/fonts/EagleLake-Regular.ttf');

}

function setup () {
    createCanvas (500,500);
    setInterval(randomMovement, 4000);
   timerInterval = setInterval(timer, 1500);
}

function draw () {
    background (220);
    textFont (Font);
    textSize (25);
    text ('Potatos', 20, 20); 
    image(MP, 100,100);
    image(GRP, 40, 40);
    image(PW,150,150);

}

function randomMovement() {
    //console.log("moving carrot");
    GRPx = random(0, width - 100);
    GRPy = random(0, height - 100);
} 