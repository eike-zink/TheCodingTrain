let cols, rows;
let grid;
let current;

function setup() {
  createCanvas(400, 400);
  // createCanvas(windowWidth,windowHeight)
  Cell.size = 20;
  cols = floor(width / Cell.size);
  rows = floor(height / Cell.size);

  grid = new Grid(cols, rows);

  // Startpunkt festlegen
  current = grid.getCell(0, 0);
  current.visited = true;

  // frameRate(5);
}

function draw() {
  background(50);
  grid.show();
  current.highlight();

  let next = grid.nextCell(current);

  if (next) {
    current = next;
  } else {
    noLoop();
  }
}
