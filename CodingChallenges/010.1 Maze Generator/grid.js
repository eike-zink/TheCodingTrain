class Grid {
  constructor(cols, rows) {
    this.cols = cols;
    this.rows = rows;
    this.cells = new Array();
    // Grid initalisieren
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        let cell = new Cell(col, row);
        this.cells.push(cell);
      }
    }
  }

  show() {
    for (let cell of this.cells) {
      cell.show();
    }
  }

  cell(col, row) {
    if (col < 0 || row < 0 || col > this.cols-1 || row > this.rows-1) {
      return null;
    }
    let index = col + (row * this.rows);
    return this.cells[index];
  }

  next(cell) {
    let nexts = new Array(4);
    let col = cell.col;
    let row = cell.row;
    //
    let top = this.cell(col, row-1);
    let right = this.cell(col+1, row);
    let bottom = this.cell(col, row+1);
    let left = this.cell(col-1, row);
    //
    if (top && !top.visited) {
      nexts.push(top);
    }
    if (right && !right.visited) {
      nexts.push(right);
    }
    if (bottom && !bottom.visited) {
      nexts.push(bottom);
    }
    if (left && !left.visited) {
      nexts.push(left);
    }
    if (nexts.length > 0) {
      let r = floor(random(nexts.length));
      return nexts[r];
    } else {
      return null;
    }
  }
}
