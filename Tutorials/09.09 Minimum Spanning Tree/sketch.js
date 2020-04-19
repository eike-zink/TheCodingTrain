let vertices = []

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);

  fill(255);
  stroke(255);
  for (let vector of vertices) {
    ellipse(vector.x, vector.y, 16);
  }
}

function mousePressed() {
  let vec = createVector(mouseX, mouseY);
  vertices.push(vec);
}
