class Particle {
  constructor(x, y, c = random(255), w = 4) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.col = c;
    this.weight = w;
    this.lifespan = 255;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  updatePosition() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    colorMode(HSB);
    strokeWeight(this.weight);
    stroke(this.col, 255, 255, this.lifespan);
    point(this.pos.x, this.pos.y);
  }

  get done() {
    return (this.lifespan <= 0);
  }
}
