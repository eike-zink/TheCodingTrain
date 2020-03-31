class Branch {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
  }

  show() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  newBranches() {
    let dir = p5.Vector.sub(this.end, this.begin).mult(3/4)
    let right = p5.Vector.add(this.end, dir.rotate(PI/4));
    let left = p5.Vector.add(this.end, dir.rotate(-PI/2));
    this.finished = true;
    return {
      right: new Branch(this.end, right),
      left: new Branch(this.end, left),
    };
  }
}
