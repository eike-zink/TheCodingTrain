class Leave {
  constructor(pos) {
    this.pos = pos;
    this.acc = createVector();
    this.vel = createVector();
  }

  show() {
    fill(255, 0, 100);
    ellipse(this.pos.x, this.pos.y, 8, 8);
  }
}
