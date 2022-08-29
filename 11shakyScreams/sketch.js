let face;

// Changes window size
function windowResized() {
  setup();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  face = new Face(width/2, height/2, 100);
}

function draw() {
  frameRate(25);
  background(color('rgb(0, 0, 0)'));

  strokeWeight(1);
  stroke(255);
  face.show();
}
