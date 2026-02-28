let MP;
let GRP;
let PW;
let Sam;
let Font;
let Samx = 350;
let Samy= 50;
let timerValue=20;
let timerInterval;

function preload() {
    MP = loadImage('images/Mashed Potatoes.png');
    GRP = loadImage('images/Garlic Roasted Potatoes.png');
    PW = loadImage('images/PotatoWedges.png');
    Font = loadFont('font/EagleLake-Regular.ttf');
    Sam = loadImage('images/samwise.png');
    setInterval(timerInterval,1000)
    timerInterval = setInterval(timer, 1000);

}

function setup () {
    createCanvas (500,500);
      setInterval(randomMovement, 4000);
   timerInterval = setInterval(timer, 1000);
}

function draw () {
    background ('#228B22');
    textFont (Font);
    textSize (25);
    text ('Potatoes', 20, 20); 
    textSize(15);
    text ('Caitlyn Asmussen', 20,35);
    text ('boil em, mash em, stick em in a stew',20,475);

  GRP.resize(150,150);
    image(GRP, 50, 50);
  
    MP.resize(150,150);
    image(MP, 200,200);

    PW.resize(150,150);
    image(PW,350,350);

    Sam.resize(100,100);
    image(Sam,Samx,Samy);


}



function randomMovement() {
    //console.log("moving carrot");
    Samx = random(0, width - 100);
    Samy = random(0, height - 100);
} 

function timer() {
    console.log("timer tick");
    
    timeLeft -= 1;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        
       
    noLoop();
    }
}