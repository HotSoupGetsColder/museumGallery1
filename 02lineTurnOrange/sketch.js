let xoff = 0;

function windowResized() {
  setup();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cBG = color('hsl(30, 100%, 47%)');
  cL1 = color('rgb(233, 175, 0)');
  cL2 = color('hsl(20, 100%, 39%)');
}

function draw() {
  // noLoop();
  frameRate(10);
  background(cBG);

  let numLines = map(noise(xoff), 0, 1, 0, 80);
  xoff = xoff + 0.05;
  numLines = Math.floor(numLines);
  drawLineSet(numLines, cL1, cL2);
}

// Optional plot for mid points
function plotMidPoints() {
  for (let i = 0; i <= width; i = i + 10) {
    strokeWeight(5);
    stroke(255, 0, 0);
    point(i, f(i));
    strokeWeight(1);
  }
}

function drawLineSet(numLines, color1, color2) {
  for (let i = 1; i <= numLines; i++) {
    let spacing = width / (numLines);
    let x = i * spacing;
    strokeWeight(9);
    stroke(color1); // Bottom
    line(x, height, x, f(x));
    stroke(color2); // Top
    line(x, f(x), 0, g(x));
  }
}

// Function for y value of turning point
function f(x) {
  let y = 0;
  let a = height;
  let b = width;
  y = (-1 * a/b**4) * (x**4) + a;
  return y;
}

// Gives y coordinate for end of top line.(Ends along x = 0);
function g(x) {
  let y = 0;
  let m = 1;
  y = f(x) - m * x;
  return y;
}
