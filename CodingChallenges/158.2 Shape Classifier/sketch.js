let circles = [];
let squares = [];
let triangles = [];

let shapeClassifier;

function preload() {
  for (let i = 0; i < 100; i++) {
    circles[i] = loadImage(`data/circle${nf(i + 1, 4, 0)}.png`);
    squares[i] = loadImage(`data/square${nf(i + 1, 4, 0)}.png`);
    triangles[i] = loadImage(`data/triangle${nf(i + 1, 4, 0)}.png`);
    console.log("finished preload");
  }
}

function setup() {
  createCanvas(400, 400);
  let options = {
    inputs : [64, 64, 4],
    task: 'imageClassification',
    debug: true,
  }
  shapeClassifier = ml5.neuralNetwork(options);

  for (let i = 0; i < circles.length; i++) {
    shapeClassifier.addData({ image: circles[i] }, { label: 'circle' });
  }
  for (let i = 0; i < squares.length; i++) {
    shapeClassifier.addData({ image: squares[i] }, { label: 'square' });
  }
  for (let i = 0; i < triangles.length; i++) {
    shapeClassifier.addData( { image: triangles[i] }, { label: 'triangle'});
  }
  shapeClassifier.normalizeData();
  shapeClassifier.train({ epochs: 50 }, finishedTraining);
}

function finishedTraining() {
  shapeClassifier.save();
  console.log("finished training");
}
