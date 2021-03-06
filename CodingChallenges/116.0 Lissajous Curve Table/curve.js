class Curve {
  constructor() {
    this.path = [];
    this.current = createVector();
  }

  addX(x) {
    this.current.x = x;
  }

  addY(y) {
    this.current.y = y;
  }

  addPoint() {
    this.path.push(this.current);
  }

  show() {
    stroke(255); strokeWeight(1); noFill();
    beginShape();
    for (let v of this.path) {
      vertex(v.x, v.y);
    }
    endShape();
    //
    strokeWeight(4);
    point(this.current.x,this.current.y);
    this.current = createVector();
  }

  reset() {
    this.path = [];
    this.current = createVector();
  }
}
