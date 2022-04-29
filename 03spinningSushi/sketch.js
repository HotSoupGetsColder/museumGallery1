let noiseInt = 0.05;
let scrollInt = noiseInt / 8;
let xoff0 = 0;
let yoff0 = 0;

function windowResized() {
  setup();
}

function setup() {
  createCanvas(windowHeight, windowHeight);
}

function draw() {
  let x = 0
  let y = 0

  xoff0 += scrollInt;
  yoff0 += scrollInt;
  let xoff = xoff0;
  let yoff = xoff0;

  let cBG = color('hsb(40, 15%, 92%)');
  let cPri = color('hsb(17, 85%, 92%)');
  let c3 = color('hsb(17, 0%, 92%)');
  let cSec = color('hsb(17, 20%, 92%)');

  frameRate(60);
  // noLoop();
  background(cBG);

  let numShapes = 3;
  let offOff = 0.035
  plotArcGrid(x, y, cPri, numShapes, xoff, yoff, 4.5/5);
  plotArcGrid(x, y, cSec, numShapes, xoff+offOff, yoff+offOff, 6/10, 12/10 * PI, CHORD);
  plotArcGrid(x, y, c3, numShapes, xoff+2*offOff, yoff+offOff, 3/10, 16/10 * PI, CHORD);

}

function plotArcGrid(x, y, col, numX, xoff, yoff, radRatio, angle = PI, arcType = PIE) {
  let spacing = width / numX
  let rad = spacing * radRatio;
  fill(col);
  noStroke();
  while (y < height) {
    let ang = map(noise(xoff, yoff), 0, 1, 0, 3 * TWO_PI);
    arc(x + spacing/2, y + spacing/2, rad, rad, -1/2*angle + ang, 1/2*angle + ang, arcType);

    xoff += noiseInt;
    x += spacing;
    if (x > width) {
      x = 0;
      xoff = xoff0;
      y += spacing;
      yoff += noiseInt;
    }
  }
}
