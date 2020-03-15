// Coding Challenge 145.0

let walls = [];
let partical;
let xOff = 0, yOff = 1000;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    let a = createVector(random(width), random(height));
    let b = createVector(random(width), random(height));
    walls.push(new Boundary(a, b));
  }
  partical = new Particale();
}

function draw() {
  background(0);
  for (let wall of walls) {
    wall.show();
  }
  //partical.update(mouseX, mouseY);
  partical.update(noise(xOff) * width, noise(yOff) * height);
  partical.show();
  partical.lookAt(walls);
  xOff += 0.005;
  yOff += 0.005 ;
}
