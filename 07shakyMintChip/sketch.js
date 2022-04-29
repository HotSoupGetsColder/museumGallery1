let canvasHyp;
let shakyX = [];
let shakyY = [];
let shakyR = [];

let bgpX = [];
let bgpY = [];

function drawShakyCircle(x, y, baseRad) {
  push();
  translate(x, y);

  push();
  // strokeWeight(6);
  stroke(255);
  point(0, 0); // Center of circle;
  pop();

  // Creates array of points' x and y
  let nPoints = 1000;
  let pX = [];
  let pY = [];
  let angSpacing = TWO_PI/nPoints;
  let noiseOff = random(1000);
  let rTol = canvasHyp / 200;
  for (let i = 0; i <= nPoints; i++) {
    let ang = i*angSpacing;
    noiseOff = noiseOff + 0.05;
    let r = map(noise(noiseOff), 0, 1, baseRad-rTol, baseRad+rTol);
    pX[i] = r*cos(ang);
    pY[i] = r*sin(ang);
  }

  // Draws lines b/w points
  for (let i = 1; i < nPoints; i++) {
    line(pX[i], pY[i], pX[i-1], pY[i-1])
    if (i == nPoints - 1) {
      line(pX[i], pY[i], pX[0], pY[0]);
    }
  }

  pop();
}

function genShakyData(n, baseRad) {
  for (let i = 0; i < n; i++) {
    shakyX[i] = random(width);
    shakyY[i] = random(height);
    shakyR[i] = map(random(), 0, 1, baseRad*0.8, baseRad*1.2);
  }
}

function genBGPoints(totPts) {
  let nPts = 0;
  while (nPts < totPts) {
    let isInside = true;
    let attempts = 0;
    while (isInside) {
      nX = random(width);
      nY = random(height);
      isInside = false;
      for (let i = 0; i < shakyX.length; i++) {
        if (!checkIsOutside(nX, nY, shakyX[i], shakyY[i], shakyR[i] + 20)) {
          isInside = true;
        }
      }
      attempts = attempts + 1;
      if (attempts > 1000) {
        Error('Max attempts to gen bgPoint reached');
        break;
      }
    }
    bgpX.push(nX);
    bgpY.push(nY);
    nPts = nPts + 1;
  }
}

function checkIsOutside(newX, newY, shX, shY, shR) {
  let d = dist(newX, newY, shX, shY);
  if (d <= shR) {
    // console.log('checkIsOutside = false');
    return false;
  } else {
    // console.log('checkIsOutside = true');
    return true;
  }
}

function windowResized() {
  console.log('window resized');
  setup();
}

function setup() {
  shakyX = [];
  shakyY = [];
  shakyR = [];

  bgpX = [];
  bgpY = [];
  createCanvas(windowWidth, windowHeight);
  console.log(width +' '+ height);
  canvasHyp = Math.sqrt(width**2 + height**2);
  console.log(canvasHyp);
  let baseRad = canvasHyp / 8;
  genShakyData(5, baseRad);
  shakyX[0] = width/2;
  shakyY[0] = height/2;
  shakyR[0] = height / 6;
  genBGPoints(50);

}

function draw() {
  frameRate(25);
  background(color('rgb(177, 224, 193)'))

  strokeWeight(canvasHyp / 120);
  stroke(color('rgb(62, 45, 31)'));
  // drawShakyCircle(width/2, height/2, 100);
  for (let i = 0; i < shakyX.length; i++) {
    push();
    translate(shakyX[i], shakyY[i]);
    rotate(map(random(), 0, 1, 0, TWO_PI));
    drawShakyCircle(0, 0, shakyR[i]);
    pop();
  }

  stroke(255);
  for (let i = 0; i < bgpX.length; i++) {
    point(bgpX[i], bgpY[i]);
  }
}
