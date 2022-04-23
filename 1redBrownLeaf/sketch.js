function windowResized() {
  setup(0);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // noLoop();
  frameRate(1);
  background(255,245,210);
  noiseSeed(map(random(), 0, 1, 0, 1000));
  translate(width/2, height + 20);
  strokeWeight(1.4);

  let len = 700;
  let spacing = 1.7;
  let xoff = 0;
  let yoff = 50;
  let n = 0;
  for (let i = 0; i < len; i=i+spacing) {
    let completion = (len - i) / len;
    n++;
    translate(0, -spacing);
    angleMode(DEGREES);
    xoff = xoff + 0.09;
    rotate(2 * map(noise(xoff), 0, 1, -1, 1));
    yoff = yoff + 0.04;
    let lineLen = map(noise(yoff), 0, 1, 100 * completion, 200 * completion);
    stroke(68, 45, 33);
    line(0,0,lineLen,0);
    if (n%2 == 0) {
      line(0,0,-lineLen,0);
    }
  }

  xoff = 100;
  yoff = 150;
  n = 0;
  resetMatrix();
  translate(-10, height/2);
  rotate(90);
  for (let i = 0; i < len; i=i+spacing) {
    let completion = (len - i) / len;
    n++;
    translate(0, -spacing);
    angleMode(DEGREES);
    xoff = xoff + 0.09;
    rotate(2 * map(noise(xoff), 0, 1, -1, 1));
    yoff = yoff + 0.04;
    let lineLen = map(noise(yoff), 0, 1, 100 * completion, 200 * completion);
    stroke(200, 100, 80);
    line(0,0,lineLen,0);
    if (n%2 == 0) {
      line(0,0,-lineLen,0);
    }
  }
}
