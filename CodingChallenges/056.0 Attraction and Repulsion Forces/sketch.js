let attractors = [];
var particals = [];

function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < 50; i++) {
    particals.push(new Partical(random(width), random(height)));
  }
}

function draw() {
  background(51);
  for (let attractor of attractors) {
    attractor.show();
  }
  for (let partical of particals) {
    for (let attractor of attractors) {
      partical.attracted(attractor.pos);
    };
    partical.update();
    partical.show();
  }
}

function mousePressed() {
  attractors.push(new Attractor(mouseX, mouseY));
}
