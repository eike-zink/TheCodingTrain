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
  leaves.forEach(leave => leave.show());
}

function mousePressed() {
  count++;

  if (count < 5) {
    tree.forEach(branch => {
      if (!branch.finished) {
        let branches = branch.newBranches();
        tree.push(branches.left);
        tree.push(branches.right);
      }
    });
  } else {
    tree.forEach(branch => {
      if (!branch.finished) {
        let leaf = new Leave(branch.end.copy());
        leaves.push(leaf);
      }
    });
  }
}
