class Particale {
  constructor() {
    this.pos = createVector(width / 2,  height / 2);
    this.rays = [];
    for (let i = 0; i < 360; i+= 2) {
      this.rays.push(new Ray(this.pos, radians(i)));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  lookAt(walls) {
    for (let ray of this.rays) {
      let closest = { pt: null, d:Infinity};
      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < closest.d) {
            closest.d = d
            closest.pt = pt;
          }
        }
      }
      if (closest.pt) {
        stroke(255, 100);
        line(this.pos.x, this.pos.y, closest.pt.x, closest.pt.y);
      }
    }
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}
