let tree = [];

function setup() {
  createCanvas(400, 400);
  let begin = createVector(width/2, height);
  let end = createVector(width/2, height-100);
  let root = new Branch(begin, end);
  tree.push(root);
}

function draw() {
  background(51);
  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
  }
}

function mousePressed() {
  for (let i = tree.length-1; i >= 0; i--) {
    if (!tree[i].finished) {
      let branches = tree[i].newBranches();
      tree.push(branches.left);
      tree.push(branches.right);
      tree[i].finished = true;
    }
  }
}
