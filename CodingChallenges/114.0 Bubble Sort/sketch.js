const swap = function(a, b) {
  let t = this[a];
  this[a] = this[b];
  this[b] = t;
}

let values;

function setup() {
  createCanvas(800, 500)

  values = new Array(width);
  values.swap = swap;

  for (let i = 0; i < values.length; i++) {
    values[i] = floor(random(height));
  }

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length-1-i; j++) {
      let a = values[j];
      let b = values[j+1];
      if (a > b) {
        values.swap(j, j+1);
      }
    }
  }
}

function draw() {
  background(0);

  for (let i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height-values[i]);
  }
}
