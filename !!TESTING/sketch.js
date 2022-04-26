function drawStripes(n) {
  let spacing = width / (n + 1);
  for (let i = 0; i < n; i++) {
    line(spacing*(i+1), 0, spacing*(i+1), height);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(color('hsl(113, 29%, 18%)'))
  strokeWeight(5);
  stroke(color('hsl(113, 16%, 50%)'));
  drawStripes(20);

  push();
  fill(color('rgb(255, 205, 106)'))
  circle(width/2, height/2, width/2);
  erase();
  circle(width/2, height/2, width/4);
  noErase();
  pop();

}
