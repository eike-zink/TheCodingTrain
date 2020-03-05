
var gravity;

let fireworks = [];

function setup() {
  // put setup code here
  createCanvas(400, 300);
  //
  stroke(255);
  strokeWeight(4);
  //
  gravity = createVector(0, 0.2);
  //
  firework = new Firework();
}

function draw() {
  // put drawing code here
  colorMode(RGB);
  background(0, 0, 0, 25);
  //
  if (random(1) < 0.03) {
    fireworks.push(new Firework());
  }
  //
  for (let i = fireworks.length-1; i>= 0; i--) {
    let firework = fireworks[i];
    firework.update();
    firework.show();
    if (firework.done) {
      fireworks.splice(i, 1)
    }
  }
}
