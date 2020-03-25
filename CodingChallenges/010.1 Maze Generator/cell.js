const wall = {
  top: 0,
  right: 1,
  bottom: 2,
  left: 3
};

class Cell {
  static size = 40;

  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
  }

  show() {
    let size = Cell.size;
    let x = this.i * size;
    let y = this.j * size;
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
  }
}
