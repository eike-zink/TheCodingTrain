var seg1;
var seg2;

function setup() {
  // put setup code here
  createCanvas(600, 400);
  seg1 = new Segment(createVector(50, 200), length: 100, angle: radians(-45)});
  seg2 = new Segment(seg1.point_b, length: 100, angle: radians(45)});
}

function draw() {
  // put drawing code here
  background(0);
  seg1.show();
  seg2.show();
}
