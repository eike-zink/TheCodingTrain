let circles = [];

let img;

function preload() {
  img = loadImage('assets/2017.png');
}

function setup() {
  createCanvas(900, 400);
  frameRate(10);
  pixelDensity(1);
  //
  img.loadPixels();
  //
}

function draw() {
  // background(img);
  background(0);

  for (let i = 0; i < 50; i++) {
    let new_c = createNewCircle();
    if (new_c) {
      circles.push(new_c);
    }
  }

  for (let c of circles) {
    c.show();
    c.check_edges();
    c.check_other(circles);
    c.grow();
  }
}

function createNewCircle() {
  // Einen zufälligen Punkt unabhängig von der Schrift bestimmen
  let x = int(random(width));
  let y = int(random(height));

  let valid = true;

  for (let c of circles) {
    let d = dist(x, y, c.x, c.y);
    if (d < c.r) {
      valid = false;
      break;
    }
  }

  if (valid) {
      let index = (x + y * img.width) * 4;
      let colorRed = img.pixels[index];
      let colorGreen = img.pixels[index + 1];
      let colorBlue = img.pixels[index + 2];
      let c = color(colorRed, colorGreen, colorBlue);
      return new Circle(x, y, c);
  }
  return null;
}
