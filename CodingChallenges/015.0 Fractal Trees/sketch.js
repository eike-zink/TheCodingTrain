let tree = [];

let count = 0;

function setup() {
  createCanvas(400, 400);
  let begin = createVector(width/2, height);
  let end = createVector(width/2, height-100);
  let root = new Branch(begin, end);
  tree.push(root);
}

function draw() {
  background(51);
  // Branches und Leaves anzeigen
  tree.forEach(branch => branch.show());
  // Die Position des Leaves verändern
  tree.filter(branch => branch instanceof Leave).forEach(leave => leave.update());
}

function mousePressed() {
  let ends = tree.filter(branch => !branch.finished);
  count++;

  switch (true) {
    case (count < 5):
      ends.forEach(branch => {
        branch.finished = true;
        let branches = branch.newBranches();
        tree.push(branches.left);
        tree.push(branches.right);
      });
      break;
    case (count == 5):
      ends.forEach(branch => {
        branch.finished = true;
        let leaf = new Leave(branch.end.copy());
        tree.push(leaf);
      });
      break;
    default:
      let leaves = ends.filter(brunch => brunch instanceof Leave);
      leaves.forEach(branch => {
        branch.acceleration = 0.5;
      });
  }
}
