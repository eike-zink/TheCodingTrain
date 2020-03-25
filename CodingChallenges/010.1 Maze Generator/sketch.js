let cols, rows;
let grid = [];

function setup() {
  createCanvas(400, 400);
  Cell.size = 40;
  cols = floor(width / Cell.size);
  rows = floor(height / Cell.size);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }
}

function draw() {
  background(51);
  for (let cell of grid) {
    cell.show();
  }
}
