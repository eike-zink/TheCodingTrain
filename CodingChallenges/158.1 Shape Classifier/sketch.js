// Die Funktion save() funktioniert leider nicht, aber mit saveCanvas()
// funktioniert - allerdings nicht in jedem Browser!

let canvas;

function setup() {
  canvas = createCanvas(64, 64);
  frameRate(2);
}

function draw() {
  for (let i = 0; i < 3; i++) {
    background(255);
    strokeWeight(4);

    push();

    let r = random(8, 24);
    let x = random(r, width - r);
    let y = random(r, height - r);

    stroke(random(100), random(100), random(100));

    translate(x, y);
    
    if (i == 0) {
      circle(0, 0, r * 2);
      saveCanvas(canvas, `circle${nf(frameCount, 4, 0)}`, 'png');
    } else if (i == 1) {
      rectMode(CENTER);
      rotate(random(-0.1, 0.1));
      square(0, 0, r * 2);
      saveCanvas(canvas, `square${nf(frameCount, 4, 0)}`, 'png');
    } else if (i == 2) {
      rotate(random(-0.1, 0.1));
      triangle(0, -r, r, r, -r, r);
      saveCanvas(canvas, `triangle${nf(frameCount, 4, 0)}`, 'png');
    }
    pop();
  }

  if (frameCount == 1000) {
    noLoop();
  }
}
