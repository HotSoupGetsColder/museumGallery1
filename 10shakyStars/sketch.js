let moon;
let stars = [];

function createSpacedStar(radius) {
  let isInside = true;
  let attempts = 0;
  while (isInside) {
    attempts++;
    if (attempts > 200) {
      console.log('Max star generation attempts reached')
      break;
    }
    isInside = false;
    tempStar = new Star(random(width), random(height), radius);
    if (tempStar.center.dist(moon.center) < (moon.r + tempStar.r + width/40)) {
      isInside = true;
    }
    for (let i = 0; i < stars.length; i++) {
      if (tempStar.center.dist(stars[i].center) < (tempStar.r + stars[i].r + width/100)) {
        isInside = true;
      }
    }
    if (!isInside) {
      stars.push(tempStar);
    }
  }
}

function windowResized() {
  setup();
}

function setup() {
  frameRate(10)
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  moon = new Moon(random(width), random(height/2), width/30);
  for(let i = 0; i < 30; i++) {
    createSpacedStar(random(width/80, width/70));
  }
}

function draw() {
  background(color('rgb(0, 0, 0)'));
  stroke(255);
  fill(255);
  strokeWeight(1);

  for(let i = 0; i < stars.length; i++) {
    stars[i].shake();
    stars[i].disp();
  }

  noFill();
  moon.disp();

}
