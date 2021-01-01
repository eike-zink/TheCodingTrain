let shapeClassifier;
let resultDiv;
let clearButton;

let inputImage;

function preload() {
}

function setup() {
  createCanvas(200, 200);
  // wichtig, da es sonst zu einem Fehler kommt
  pixelDensity(1);
  background(255);

  resultDiv = createDiv('loading model');

  clearButton = createButton('clear canvas');
  clearButton.mousePressed(() => background(255));

  let options = {
    inputs : [64, 64, 4],
    task: 'imageClassification',
    debug: true,
  }
  shapeClassifier = ml5.neuralNetwork(options);

  const modelData = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin'
  }

  shapeClassifier.load(modelData, finishLoadModel);

  inputImage = createGraphics(64, 64);
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(4);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function finishLoadModel() {
  resultDiv.html('finish loading');
  classifyImage();
}
function classifyImage() {
  inputImage.copy(0, 0, width, height, 0, 0, 64, 64);
  shapeClassifier.classify( {image: inputImage}, classifiedImage);
}

function classifiedImage(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    createDiv('Label: ' + results[0].label);
    createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
  }
}
