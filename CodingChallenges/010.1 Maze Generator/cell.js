const wall = {
  top: 0,
  right: 1,
  bottom: 2,
  left: 3
};

class Cell {
  static size = 40;

  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.walls = [true, true, true, true];
    this.visited = false;
  }

  show() {
    let size = Cell.size;
    let x = this.col * size;
    let y = this.row * size;
    stroke(255);
    if (this.walls[wall.top]) {
      line(x, y, x+size, y);
    }
    if (this.walls[wall.right]) {
      line(x+size, y, x+size, y+size);
    }
    if (this.walls[wall.bottom]) {
      line(x, y+size, x+size, y+size);
    }
    if (this.walls[wall.left]) {
      line(x, y, x, y+size);
    }
    if (this.visited) {
      fill(150, 100);
      rect(x, y, size, size);
    }
  }
}
