let sketch = function(p) {
  p.x = 0;
  p.y = 0;
  p.myColor = p.color(255, 0, 200, 25);

  p.setup = function() {
    p.createCanvas(400, 400);
    p.x = p.width / 2;
    p.y = p.height / 2;
    p.background(51);
  }

  p.draw = function() {
    p.fill(p.myColor);
    p.noStroke();
    p.ellipse(p.x, p.y, 48, 48);

    p.x += p.random(-10, +10);
    p.y += p.random(-10, +10);
  }
}

let firstP5 = new p5(sketch, document.getElementById('myp5'));
let secondP5 = new p5(sketch);
secondP5.myColor = secondP5.color(255, 204, 0, 25);

function resetBackground(myp5) {
  myp5.background(51);
  myp5.x = myp5.width / 2;
  myp5.y = myp5.height / 2;
}

setInterval(resetBackground, 3000, firstP5);

setInterval(resetBackground, 6000, secondP5);
