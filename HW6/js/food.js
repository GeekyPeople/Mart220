var chicken;
var bacon;

var foodPic = [];

let myFood = [];





function preload() {
  foodPic[0] = loadImage("assets/food/chicken.png");
  foodPic[1] = loadImage("assets/food/bacon.png");
}

function setup() {
  createCanvas(400,400);

  


 
  for (let i=0; i < 5; i++) {
    myFood[i] = new Food(random(width), random(height), random(-3,3), random(-3,3));
    

  }



}


function draw() {
  background(50);

for (let i = 0; i < myFood.length; i++ ) {
  myFood[i].move();
  myFood[i].display();

  
  
}


}
class Food {
    
    
  constructor(x, y, xSpeed, ySpeed,) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        
      
}

move() {
  this.x += this.xSpeed;
  if (this.x <0 || this.x > width) {
    this.xSpeed *= -1;
  }

  this.y += this.ySpeed;
  if (this.y <0 || this.y >height ) {
    this.ySpeed *= -1;
  }
}

// Not sure why it has both images (the chicken and bacon) rather than random, but if you know how to fix it I would love a hand

display() {
  for (var i=0; i < foodPic.length; i++){
  image(foodPic[i], this.x,this.y, 50);
}
  
}


}