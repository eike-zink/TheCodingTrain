let x, y;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  background(51);
}

function draw() {
  fill(255, 0, 200, 50);
  noStroke();
  ellipse(x, y, 48, 48);

  x += random(-10, +10);
  y += random(-10, +10);
}
