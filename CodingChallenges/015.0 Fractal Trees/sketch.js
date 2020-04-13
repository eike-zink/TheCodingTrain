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
  for (let i = 0; i < tree.length; i++) {
    //tree[i].jitter();
    tree[i].show();
  }

  // Leaves anzeigen
  for (let i = 0; i < leaves.length; i++) {
    fill(255, 0, 100);
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
  }
}

function mousePressed() {
  count++;

  if (count < 5) {
    for (let i = tree.length-1; i >= 0; i--) {
      if (!tree[i].finished) {
        let branches = tree[i].newBranches();
        tree.push(branches.left);
        tree.push(branches.right);
        tree[i].finished = true;
      }
    }
  } else {
    if (count == 5) {
      for (let i = 0; i < tree.length; i++) {
        if (!tree[i].finished) {
          let leaf = tree[i].end.copy();
          leaves.push(leaf);
        }
      }
    }
  }
}
