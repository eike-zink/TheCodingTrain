class Attractor {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  show() {
    stroke(0, 255, 0);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
  }
}
