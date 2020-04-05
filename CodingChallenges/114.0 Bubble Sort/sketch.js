Array.prototype.swap = function(a, b) {
  let temp = this[a];
  this[a] = this[b];
  this[b] = temp;
}

Array.prototype.compareAndSwap = function(a, b) {
  if (this[a] > this[b]) {
    this.swap(a, b);
  }
}

let values;

function setup() {
  createCanvas(200, 150)

  // Values ist ein Array
  values = new Array(width);
  // mit zwei weiteren Eigenschaften
  values.i = 0;
  values.j = 0;

  for (let i = 0; i < values.length; i++) {
    values[i] = floor(random(height));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height-values[i]);
  }

  values.compareAndSwap(values.j, values.j+1);

  if (values.i < values.length) {
    values.j += 1;
    if (values.j >= values.length-1-values.i) {
      values.j = 0;
      values.i += 1;
    }
  } else {
    noLoop();
  }
}
