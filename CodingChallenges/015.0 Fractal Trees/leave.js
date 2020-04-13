class Leave {
  constructor(pos) {
    this.pos = pos;
    this.finished = false;
    this.acc = createVector();
    this.vel = createVector();
  }

  show() {
    fill(255, 0, 100);
    ellipse(this.pos.x, this.pos.y, 8, 8);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  set acceleration(acc) {
    this.acc.add(createVector(0, acc));
  }

  get acceleration() {
    return this.acc;
  }
}
