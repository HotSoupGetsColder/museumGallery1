let p1 = {};
let p2 = {};

function setup() {
  createCanvas(windowWidth, windowHeight);
  p1 = {x:width/2, y:height};
  p2 = {x:width/2, y:height/2};
}

function draw() {
  background(color('rgb(35, 80, 55)'));
  strokeWeight(5);
  stroke(255);
  point(mouseX, mouseY);
  noFill();
  let mX = mouseX;
  let mY = mouseY;
  let n = 30;
  for (let i = 0; i < n; i++) {
    mY = 0;
    let xSpacing = width / (n+1);
    mX = xSpacing*(i+1);
    stroke(255);
    bezier(p1.x, p1.y, mX, mY, mX, mY, p2.x, p2.y);

    stroke(color('rgb(222, 53, 0)'))
    let leafW = 10;
    bezier(p1.x, p1.y, mX+leafW, mY, mX+leafW, mY, p2.x, p2.y);
    bezier(p1.x, p1.y, mX-leafW, mY, mX-leafW, mY, p2.x, p2.y);
  }
}
