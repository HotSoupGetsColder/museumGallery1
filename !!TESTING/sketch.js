let v1;
let v2;

function shake() {
  let v = p5.Vector.random2D().setMag(10);
  v2 = v1.copy().add(v);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  v1 = createVector(30, 40);
  v2 = v1;
}

function draw() {
  frameRate(60);
  background(color('rgb(233, 199, 237)'));
  translate(width/2, height/2);
  strokeWeight(5);
  stroke(255);
  point(0, 0);

  shake();
  line(0, 0, v2.x, v2.y);
}
