let k = 4;
var sliderForD;
var sliderForN;

function setup() {
  createCanvas(400, 400);
  sliderForD = createSlider(1, 10, 4, 0.1);
  sliderForN = createSlider(0, 10, 8, 0.1);
}

function draw() {
  let d = floor(sliderForD.value());
  let n = floor(sliderForN.value());
  let k = n / d;
  background(51);

  translate(width / 2, height / 2);

  beginShape();
  stroke(255); strokeWeight(1); noFill();
  for (let a = 0; a < TWO_PI * d; a += 0.02) {
    let r = 200 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}
