function setup() {
  createCanvas(64, 64);
}

function draw() {
  background(255);
  strokeWeight(4);

  let r = random(8, 24);
  let x = random(r, width-r);
  let y = random(r, height-r);

  circle(x, y, r*2);

  save(`circle${nf(frameCount, 4, 0)}.png`);

  if (frameCount == 10) {
    exit();
  }
}
