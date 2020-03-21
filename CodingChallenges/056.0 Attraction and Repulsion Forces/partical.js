class Partical {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.prev_pos = this.pos.copy();
    this.vel = createVector();
    this.acc = createVector();
  }

  update() {
    this.prev_pos = this.pos.copy();
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    stroke(255, 100);
    strokeWeight(4);
    line(this.prev_pos.x, this.prev_pos.y, this.pos.x, this.pos.y);
  }

  attracted(target) {
    let force = p5.Vector.sub(target, this.pos);
    let d = force.mag();
    d = constrain(d, 1, 25);
    const G = 6.67408;
    let strength = G / (d * d);
    force.setMag(strength);
    if (d < 5) {
      force.mult(-1);
    }
    this.acc.add(force);
  }

}
