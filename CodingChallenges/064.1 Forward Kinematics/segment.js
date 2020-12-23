class Segment {
  constructor(point, length, angle) {
    this.point_a = point;
    this.length = length;
    this.angle = angle;
  }

  get point_b() {
    var dx = this.length * cos(this.angle);
    var dy = this.length * sin(this.angle);
    return new p5.Vector(this.point_a.x + dx, this.point_a.y + dy);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    line(this.point_a.x, this.point_a.y, this.point_b.x, this.point_b.y);
  }
}
