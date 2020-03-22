let cities = [];
const totalCities = 3;

let recordDistances;
let recordCities;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < totalCities; i++) {
    let city = createVector(random(width), random(height));
    cities.push(city);
  }
  recordDistance = distance(cities);
  recordCities = cities.slice();
}

function draw() {
  background(0);
  stroke(255);
  fill(255);
  // Draw Cities
  for (let city of cities) {
    ellipse(city.x, city.y, 8);
  }
  // Show lines between the current Cities
  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let city of cities) {
    vertex(city.x, city.y);
  }
  endShape();
  // Swap cities
  let i = floor(random(cities.length));
  let j = floor(random(cities.length));
  swap(cities, i, j);
  //
  let currentDistance = distance(cities);
  if (currentDistance < recordDistance) {
    recordDistance = currentDistance;
    recordCities = cities.slice();
    console.log(recordDistance);
  }
  // Show lines between the record Cities
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  beginShape();
  for( let city of recordCities) {
    vertex(city.x, city.y)
  }
  endShape();
}

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function distance(a) {
  let sum = 0;
  for (let i = 0; i < a.length-1; i++) {
    let d = dist(a[i].x, a[i].y, a[i+1].x, a[i+1].y);
    sum += d;
  }
  return sum;
}

function mousePressed() {
  cities.push(createVector(mouseX, mouseY));
  recordDistance = Infinity;
}
