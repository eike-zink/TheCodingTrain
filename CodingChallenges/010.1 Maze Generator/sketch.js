let cols, rows;
let grid;
let current;

function setup() {
  createCanvas(400, 400);
  Cell.size = 40;
  cols = floor(width / Cell.size);
  rows = floor(height / Cell.size);

  grid = new Grid(rows, cols);

  // Startpunkt festlegen
  current = grid.getCell(0, 0);
  frameRate(5);
}

function draw() {
  background(50);
  grid.show();

  // Aktuellen Punkt markieren
  current.visited = true;

  let next = grid.nextCell(current);

  if (next) {
    current = next;
  }
}
