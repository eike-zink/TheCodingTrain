"use strict";

class Circle {
  constructor(x, y, c, r = 1) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.r = r;
    this.growing = true;
  }

  show() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.r * 2);
  }

  grow() {
    if (this.growing) {
      this.r++;
    }
  }

  check_edges() {
    if (this.growing && (this.x - this.r < 0 || this.x + this.r > width)) {
      this.growing = false;
    }
    if (this.growing && (this.y - this.r < 0 || this.y + this.r > height)) {
      this.growing = false;
    }
  }

  check_other(circles) {
    for (let i = 0; this.growing && i < circles.length; i++) {
      let other = circles[i]
      if (this != other) {
        let d = dist(this.x, this.y, other.x, other.y);
        if (d - (this.r + other.r) < 0) {
          this.growing = false;
          other.growing = false;
        }
      }
    }
  }
}
