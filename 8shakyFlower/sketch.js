let flower;

function setup() {
  createCanvas(windowWidth, windowHeight);
  flower = new Flower(width/2, height/2, 200);
  leaf = new Leaf(width/2, height, width/2, height/2);
}

function draw() {
  frameRate(25);
  background(color('rgb(71, 19, 9)'))
  strokeWeight(5);
  stroke(255);
  noFill();
  // flower.showGuides();
  // flower.showShake();

  leaf.update();
  leaf.showGuides();
  leaf.show();
}
