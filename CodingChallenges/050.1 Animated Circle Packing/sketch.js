let circles = [];
let spots = [];

let img;

function preload() {
  img = loadImage('assets/2017.png');
  //img = loadImage('2017.png');
}

function setup() {
  createCanvas(900, 400);
  frameRate(10);
  //
  img.loadPixels();
  //
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      // Index ermitteln
      let i= x + y * img.width;
      // Farbe des Pixels ermitteln (siehe Referenz)
      let c = img.pixels[i * 4];
      // Helligkeit der Farbe bestimmen
      let b = brightness([c]);
      // und aufgrund der Helligkeit die Schrift erkennen
      if (b > 1) {
        spots.push(createVector(x, y));
      }
    }
  }
}

function draw() {
  // background(img);
  background(0);

  for (let i = 0; i < 20; i++) {
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
  // let x = random(width);
  // let y = random(height);

  // Einen zufälligen Punkt innerhalb der Schrift bestimmen
  let r = int(random(0, spots.length));
  let x = spots[r].x;
  let y = spots[r].y;

  let valid = true;

  for (let c of circles) {
    let d = dist(x, y, c.x, c.y);
    if (d < c.r) {
      valid = false;
      break;
    }
  }

  if (valid) {
      return new Circle(x, y);
  }
  return null;
}
