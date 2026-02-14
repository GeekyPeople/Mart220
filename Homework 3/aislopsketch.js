let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(240);

  translate(width / 2, height / 2);

  // Slight vibration animation
  let vib = sin(frameCount * 2) * 2;

  // Oxygen position
  let ox = 0;
  let oy = 0 + vib;

  // Hydrogen angle and distance
  let bondAngle = 52.25; // half of 104.5°
  let bondLength = 90;

  // Hydrogen positions
  let hx1 = bondLength * cos(-bondAngle);
  let hy1 = bondLength * sin(-bondAngle) + vib;

  let hx2 = bondLength * cos(bondAngle);
  let hy2 = bondLength * sin(bondAngle) + vib;

  // Draw bonds
  stroke(0);
  strokeWeight(4);
  line(ox, oy, hx1, hy1);
  line(ox, oy, hx2, hy2);

  noStroke();

  // Draw Oxygen atom
  fill(255, 0, 0);
  ellipse(ox, oy, 60, 60);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("O", ox, oy);

  // Draw Hydrogen atoms
  fill(200);
  ellipse(hx1, hy1, 40, 40);
  ellipse(hx2, hy2, 40, 40);

  fill(0);
  text("H", hx1, hy1);
  text("H", hx2, hy2);
}
