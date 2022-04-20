function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(color('rgb(36, 60, 33)'))
  noStroke();
  fill(color('rgb(242, 163, 42)'));

  translate(width/2, height/2);
  rotate(PI/3);
  arc(0, 0, 100, 100, 0, PI/2);
}
