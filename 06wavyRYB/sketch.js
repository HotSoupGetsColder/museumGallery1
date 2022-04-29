let xOff = [];

function drawRow(nPillars, pHmax, rColor, xOff = random(1000)) {
  for (let i = 0; i < nPillars; i++) {
    push();
    pW = width / nPillars;
    translate(pW*i, 0);
    pH = map(noise(xOff), 0, 1, pHmax-120, pHmax);
    xOff = xOff + 0.5;
    drawPillar(pW, pH, rColor);
    pop();
  }
}

function drawPillar(pW, pH, pColor = color('rgb(255, 221, 134)')) {
  strokeWeight(10);
  stroke(0);
  fill(pColor);

  // let pHeight = map(random(), 0, 1, pHmax - 80, pHmax);
  rect(0, 0, pW, -pH);
}

function windowResized() {
  setup();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  xOff = [0, 100, 200];
}

function draw() {
  // noLoop();
  frameRate(60);
  background(color('rgb(48, 32, 26)'));
  translate(0, height);
  for (let i = 0; i < 3; i++) {
    let rColor;
    switch(i) {
      case 0:
        // rColor = color('rgb(255, 134, 112)');
        rColor = color('hsl(9, 100%, 60%)');
        break;
      case 1:
        // rColor = color('rgb(255, 221, 134)');
        rColor = color('hsl(43, 100%, 60%)');
        break;
      case 2:
      // rColor = color('rgb(147, 222, 232)');
      rColor = color('hsl(187, 84%, 60%)');
        break;
    }
    xOff[i] = xOff[i] + 0.02;
    drawRow(9, (height - i*100) - 20, rColor, xOff[i]);
  }

}
