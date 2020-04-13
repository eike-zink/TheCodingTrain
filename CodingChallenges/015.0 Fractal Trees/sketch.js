let tree = [];
let leaves = [];

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
  // Branches anzeigen
  tree.forEach(branch => branch.show());

  // Leaves anzeigen
  leaves.forEach(leave => {
    leave.show();
    leave.update()
  });
}

function mousePressed() {
  let ends = [];
  count++;

  switch (true) {
    case (count < 5):
      ends = tree.filter(branch => !branch.finished);
      ends.forEach(branch => {
        let branches = branch.newBranches();
        tree.push(branches.left);
        tree.push(branches.right);
      });
      break;
    case (count == 5):
      ends = tree.filter(branch => !branch.finished);
      ends.forEach(branch => {
        let leaf = new Leave(branch.end.copy());
        tree.push(leaf);
      });
      break;
    default:
  }
}
