let plant;
let plants = [];
let bg; let flr; let leaf;

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
  bg = {col: color('rgb(71, 19, 9)')}
  flr = {col: color('rgb(255, 255, 255)'), fill: bg.col, wt: 1};
  leaf = {col: color('rgb(255, 255, 255)'), wt: 1};
  for (let i = 0; i < 5; i++) {
    let tol = 0.30;
    let x = width / 2;
    x += x * random(-tol, tol);
    let y = height / 2;
    y += y * random(-tol, tol);
    plants[i] = new Plant(width/2, height, x, y, height / 4);
  }
}

function draw() {
  frameRate(25);
  background(bg.col);
  angleMode(DEGREES);

  for (let i = 0; i < plants.length; i++) {
    plants[i].show(leaf.col, leaf.wt, flr.col, flr.wt, flr.fill);
  }

  stroke(255);
  showBorder(2);
}
