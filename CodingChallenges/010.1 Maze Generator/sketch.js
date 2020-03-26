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
  current = grid.cell(0, 0);
  frameRate(40);
}

function draw() {
  background(51);
  grid.show();

  current.visited = true;

  let next = grid.next(current);

  if (next) {
    current = next;
  }
}
