class Firework {
  constructor() {
    this.rocket = new Particle(random(width), height);
    this.rocket.vel = createVector(0, random(-9, -11));
    this.rocket.exploded = false;
    this.fireworks = [];
  }

  update() {
    // Rakete
    if (!this.rocket.exploded) {
      this.rocket.applyForce(gravity);
      this.rocket.updatePosition();
      if (this.rocket.vel.y >= 0) {
        this.rocket.exploded = this.explode();
      }
    }
    // Feuerwerk
    for (let i = this.fireworks.length-1; i >= 0; i--) {
      let p = this.fireworks[i];
      p.applyForce(gravity);
      p.updatePosition();
      p.lifespan -= 5;
      if (p.done) {
        this.fireworks.splice(i, 1);
      }
    }
  }

  show() {
    // Rakete
    if (!this.rocket.exploded) {
      this.rocket.show();
    }
    // Feuerwerk
    for (let i = 0; i < this.fireworks.length; i++) {
      this.fireworks[i].show();
    }
  }

  explode() {
    let pos = this.rocket.pos;
    let col = this.rocket.col;
    for (let i = 0; i < 10; i++) {
      let p = new Particle(pos.x, pos.y, col, 2);
      p.vel = p5.Vector.random2D().mult(random(1, 3));
      this.fireworks.push(p);
    }
    return true;
  }

  get done() {
    return (this.rocket.exploded && this.fireworks.length == 0);
  }
}
