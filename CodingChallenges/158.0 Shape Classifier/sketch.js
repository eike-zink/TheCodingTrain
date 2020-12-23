function setup() {
  createCanvas(64, 64);
  frameRate(2);
}

function draw() {
  for (let i = 0; i < 3; i++) {
    //background(255);
    push();

    strokeWeight(4);
    stroke('red');

    let r = random(8, 24);
    let x = random(r, width-r);
    let y = random(r, height-r);

    translate(x, y);

    if (i == 0) {
      // Kreis
      circle(0, 0, r*2);
      //save(`circle${nf(frameCount, 4, 0)}.png`);
      save('kreis');
    } else if (i == 1) {
      // Quadrat
      rectMode(CENTER);
      square(0, 0, r*2);
      //save(`square${nf(frameCount, 4, 0)}.png`);
      save('quadrat');
    } else if (i == 2) {
      // Dreieck
      triangle(0, -r, r, r, -r, r);
      //save(`triangle${nf(frameCount, 4, 0)}.png`);
    }
    pop();
  }

  if (frameCount == 10) {
    noLoop();
  }
}
