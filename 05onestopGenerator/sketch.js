let horizonY = 100;

function drawWindow(w, h) {
  print('drawing Window...');
  push();
  noStroke();
  fill(color('hsla(40, 87%, 54%, 0.57)'));
  rect(0, 0, w, h, 2);

  nLights = floor(random(4));
  for (let i = 0; i < nLights; i++) {
    let lw = map(random(), 0, 1, 10, 20);
    let lh = map(random(), 0, 1, 8, 20);
    let lx = map(random(), 0, 1, 0, w-lw);
    fill(color('rgba(221, 146, 64, 0.63)'));
    rect(lx, -2, lw, lh)
  }
  pop();
}

function drawBigStick(x, width, height, hOff=5) {
  print('drawing BigStick...');
  push();
  noStroke();
  fill(color('rgba(231, 80, 24, 0.57)'));
  translate(-width/2, 0);
  rect(x, hOff, width, -(height+hOff), 3);
  pop();
}

function drawBuilding(x, y, rooms, floors, rW, rH, xSpa=5, ySpa=8) {
  print('drawing Building...');
  push();
  translate(x, y);
  let scaleFactor = map(y, horizonY, height, 0, 1);
  scale(scaleFactor);

  // Draw window array
  push();
  let totLength = rooms * rW + (rooms - 1) * xSpa;
  let totHeight = floors * rH + (floors - 1) * ySpa;
  let tranX = -totLength / 2;
  let tranY = -totHeight;
  translate(tranX, tranY);
  for (let j = 0; j < floors; j++) {
    for (let i = 0; i < rooms; i++) {
      push()
      translate(i*(rW+xSpa), j*(rH+ySpa));
      drawWindow(rW, rH);
      pop();
    }
  }
  pop();

  // Draw big stick
  let stickX = map(random(), 0, 1, -totLength/2, totLength/2);
  drawBigStick(stickX, 25, totHeight*1.1);

  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noLoop();
  background(color('rgb(29, 18, 32)'));
  // drawBuilding(200, 250, 5, 3, 70, 40);

  for (let i = 0; i < 25; i++) {
    let x = map(random(), 0, 1, 0, width);
    let y = map(random(), 0, 1, horizonY, height);
    let rms = floor(random(4) + 3);
    let flrs = floor(random(3) + 2);
    let wth = map(random(), 0, 1, 50, 70);
    let ht = map(random(), 0, 1, 30, 40);
    drawBuilding(x, y, rms, flrs, wth, ht);
  }

}
