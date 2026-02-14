//custom variables
let lineXone = 0;
let lineYone = 0;
let clr = (0,0,0)


function setup() {
  createCanvas(400, 400);
 
}
function mousePressed() {
 clr += (120,20,20)
   if (clr > 255) 
    clr = 0;
 }

function draw() {
  background(220);
//Lines
  strokeWeight(2)
  circle( lineYone - 40, lineXone + 40, 10);
  
  

 //Moving Molecules
  lineXone = random(0, width);
  lineYone = random(0, height);
 
  strokeWeight(2)
  fill(250,0,0)
  circle( lineYone , lineXone, 10);
  
  
  lineXone = random(0, width);
  lineYone = random(0, height);
  
  
  strokeWeight(8)
  line(200,200,120,290) 
  line(200,200,280,290)
  
  strokeWeight(2);
  fill(255, 0, 0);
  circle(200, 200, 100);

  
//Nose
  triangle(200,205,190,215,210,215);
  
  
//Eyes
  strokeWeight(2);
  circle(180,190,20);
  circle(220,190,20);
  strokeWeight(7);
  point (180,190);
  point(220,190);
  
 
  
  
//Mouth
  strokeWeight(1)
   curve(180, 90, 
         180, 215, 200, 215, 
         220, 90)
    curve(180, 90, 
         200, 215, 220, 215, 
         220, 90)
  fill(0, 0, 255);
 circle(120,290,70)
  circle(280,290,70)
  
//Text
 
 function mousePressed() {
 clr += (120,20,20)
   
 }
  fill(clr)
  text('Caitlyn Asmussen', 300,390)
  text('Oxygen Molecule', 10, 20)
  
  
  
  
  
} 