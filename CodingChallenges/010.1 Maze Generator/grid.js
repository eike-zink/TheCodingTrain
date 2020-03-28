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

  getCell(col, row) {
    if (col < 0 || row < 0 || col > this.cols-1 || row > this.rows-1) {
      return null;
    }
    let index = col + (row * this.rows);
    return this.cells[index];
  }

  nextCell(current) {
    let nexts = new Array();
    //
    let col = current.col;
    let row = current.row;
    //
    let top = this.getCell(col, row-1);
    let right = this.getCell(col+1, row);
    let bottom = this.getCell(col, row+1);
    let left = this.getCell(col-1, row);
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
      //
      let next = nexts[r];
      //
      this.removeWallsBetween(current, next);
      //
      current.current = false;
      next.current = true;
      //
      return next;
    } else {
      return null;
    }
  }

  removeWallsBetween(current, next) {
    let col = current.col - next.col;
    if (col == 1) {
      current.walls[wall.left] = false;
      next.walls[wall.right] = false;
    } else if (col == -1) {
      current.walls[wall.right] = false;
      next.walls[wall.left] = false;
    }
    let row = current.row - next.row;
    if (row == 1) {
      current.walls[wall.top] = false;
      next.walls[wall.bottom] = false;
    } else if (row == -1) {
      current.walls[wall.bottom] = false;
      next.walls[wall.top] = false;
    }
  }
}
