let bush;

// Changes window size
function windowResized() {
  setup();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bush = new Bush;
}

function draw() {
  frameRate(1);
  background(color('rgb(91, 119, 82)'));

  strokeWeight(2);
  stroke(255);
  bush.show(width/2, height/2);
}
