let shakys = [];
let scratches = [];
let flower = {};

function createShakys(n) {
  for (let i = 0; i < n; i++) {
    let r = map(random(), 0, 1, width*70/600, width*120/600);
    shakys[i] = new Shaky(random(width), random(height), r);
  }
  shakys[0] = new Shaky(width/2, height/2, width*7/60);
}

function createSpacedScratches(obj, nScratches, shakyCushion, scratchCushion) {
loop1:
  while (scratches.length < nScratches) {
    let newScratch;
    let isOutShakys = false;
    let isOutScratches = false;
    let attempts = 0;
    while (!isOutShakys || !isOutScratches) {
      attempts++;
      if (attempts > 300) {
        console.log(Error('Max attemtps to create scratches reached'));
        break loop1;
      }
      newScratch = new Scratch();
      isOutShakys = true;
      for (let i = 0; i < obj.length; i++) {
        let d = dist(newScratch.x, newScratch.y, obj[i].x, obj[i].y);
        if (d <= obj[i].r + shakyCushion) {
          isOutShakys = false;
          break;
        }
      }
      isOutScratches = true;
      for (let i = 0; i < scratches.length; i++) {
        let d = dist(newScratch.x, newScratch.y, scratches[i].x, scratches[i].y);
        if (d <= scratchCushion) {
          isOutScratches = false;
          break;
        }
      }
    }
    scratches.push(newScratch);
  }
}

function windowResized() {
  setup();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log({'width': width , 'height':height});
  shakys = [];
  scratches = [];
  createShakys(5);
  createSpacedScratches(shakys, 170, width * 25/1000, width * 35/1000);
  // flower = new Flower(100, 100, 100);
}

function draw() {
  frameRate(25);
  background(color('rgb(177, 224, 193)'));

  strokeWeight(width/120);
  stroke(color('rgb(62, 45, 31)'))
  for (let i = 0; i < shakys.length; i++) {
    shakys[i].shake();
    shakys[i].show();
  }

  strokeWeight(2);
  stroke(255);
  for (let i = 0; i < scratches.length; i++) {
    scratches[i].show();
  }
}
