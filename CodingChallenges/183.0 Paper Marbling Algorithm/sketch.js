// Coding Challenge 183.0

let drops = []

let start;
let end;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 10; i++) {
    addInk(300, 300, 50); 
  }
}


function draw() {
  background(200);

  for (let drop of drops) {
    drop.show();
  }
}


function mousePressed() {
  start = createVector(mouseX, mouseY);
}


function mouseReleased() {
  end = createVector(mouseX, mouseY);
  end.sub(start);
  end.normalize();
  tineLine(end, mouseX, mouseY, 80, 16);
}

function addInk(x, y, r) {
  let drop = new Drop(x, y, r);

  for (let other of drops) {
    other.marble(drop);
  }

  drops.push(drop);
}


function tineLine(m, x, y, z, c) {
  for (let drop of drops) {
    drop.tine(m, x, y, z, c);
  }  
}

//function tineLine(xl, z, c) {
//  for (let drop of drops) {
//    drop.tine(xl, z, c);
//  }
//}