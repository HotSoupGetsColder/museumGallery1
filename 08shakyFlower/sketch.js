let plant;
let plants = [];
let bg; let flr; let stem;

function showBorder(stWt) {
  strokeWeight(stWt*2);
  line(0, 0, width, 0);
  line(width, 0, width, height);
  line(width, height, 0, height);
  line(0, height, 0, 0);
}

function windowResized() {
  setup();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log({width: width, height: height});
  bg = {col: color('rgb(71, 19, 9)')}
  flr = {col: color('rgb(255, 255, 255)'), fill: bg.col, wt: 1};
  stem = {col: color('rgb(255, 255, 255)'), wt: 1};
  for (let i = 0; i < 5; i++) {
    let tol = 0.50;
    let x = width / 2;
    x += x * random(-tol, tol);
    let y = height / 2;
    y += y * random(-tol, tol);
    let rScale = map(random(), 0, 1, 0.5, 1.05);
    plants[i] = new Plant(width/2, height, x, y, height / 4 * rScale);
  }
}

function draw() {
  frameRate(25);
  background(bg.col);
  angleMode(DEGREES);

  for (let i = 0; i < plants.length; i++) {
    plants[i].show(stem.col, stem.wt, flr.col, flr.wt, flr.fill);
  }

  stroke(255);
  showBorder(2);
}
