let plant;
let plants = [];
let bg; let flr; let leaf;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = {col: color('rgb(71, 19, 9)')}
  flr = {col: color('rgb(255, 255, 255)'), fill: bg.col, wt: 1};
  leaf = {col: color('rgb(255, 255, 255)'), wt: 1};
  plant = new Plant(width/2, height, width/3, height/2, 100);
  for (let i = 0; i < 4; i++) {
    let tol = 0.30;
    let x = width / 2;
    x += x * random(-tol, tol);
    let y = height / 2;
    y += y * random(-tol, tol);
    plants[i] = new Plant(width/2, height, x, y, 100);
  }
  console.log(plants);
}

function draw() {
  frameRate(25);
  background(bg.col);

  for (let i = 0; i < plants.length; i++) {
    plants[i].show(leaf.col, leaf.wt, flr.col, flr.wt, flr.fill);
  }
}
