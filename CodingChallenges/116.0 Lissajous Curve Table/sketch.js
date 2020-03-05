let angle = 0;
let distance = 80;  // Abstand zwischen den Kreisen
let cols, rows;     // Anzahl der Zeilen und Spalten
let d, r;           // Durchmesser (d) und Radius (r)
let curves = [];

function setup() {
  createCanvas(320, 320);
  // Anzahl der Zeilen und Spalten berechnen
  cols = width / distance;
  rows = height / distance;
  // Durchmesser und Radius berechen
  d = distance - 10;
  r = d / 2;
  //
  for (let row = 0; row < rows; row++) {
    curves[row] = [];
    for (let col = 0; col < cols; col++) {
      curves[row][col] = new Curve();
    }
  }
}

function draw() {
  background(0);

  // Rows
  for (let i = 1; i < rows; i++) {
    stroke(255); noFill();
    let cx = distance / 2;
    let cy = i * distance + distance / 2;
    strokeWeight(1);
    ellipse(cx, cy, d);

    let x = r * cos(angle * i - HALF_PI);
    let y = r * sin(angle * i - HALF_PI);
    strokeWeight(8);
    point(cx + x, cy + y);

    stroke(255, 50); strokeWeight(1);
    line(cx + x, cy + y, width, cy + y);

    // y-Koordinate übertragen
    for (let col = 1; col < cols; col++) {
      curves[i][col].addY(cy + y);
    }
  }

  // Columns
  for (let i = 1; i < cols; i++) {
    stroke(255); noFill();
    let cx = i * distance + distance / 2;
    let cy = distance / 2;
    strokeWeight(1);
    ellipse(cx, cy, d);

    let x = r * cos(angle * (i) - HALF_PI);
    let y = r * sin(angle * (i) - HALF_PI);
    strokeWeight(8);
    point(cx + x, cy + y);

    stroke(255, 50); strokeWeight(1);
    line(cx + x, cy + y, cx + x, height);

    // x-Koordinate übertragen
    for (let row = 1; row < rows; row++) {
      curves[row][i].addX(cx + x);
    }
  }
  //
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      curves[row][col].addPoint();
      curves[row][col].show();
    }
  }

  // Radius erhöhen
  angle += 0.02;

  //
  if (angle > TWO_PI) {
    // Reset
    angle = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        curves[row][col].reset();
      }
    }
  }
}
