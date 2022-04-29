// Changes window size
function windowResized() {
  setup();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  leaf = new Leaf();
}

function draw() {
  background(color('rgb(27, 50, 19)'));

  strokeWeight(1);
  stroke(255);
  noFill();
  leaf.show(width/2, height/2);
}
