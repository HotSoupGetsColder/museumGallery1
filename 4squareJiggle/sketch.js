let grid;

// let width = 400;
// let height = 400;
let numGrids = 1;
let tReset = [0, -30, -30];
let t = tReset;
let ranOff = 60;

class Grid {

  constructor() {

    this.newX1();
    this.newX2();
    this.newY();
    this.x1lag = this.x1;
    this.x2lag = this.x2;
    this.ylag = this.y;
    this.x1vel = 0;
    this.x2vel = 0;
    this.yvel = 0;
  }

  newX1() {
    this.x1 = map(random(), 0, 1, ranOff, width - ranOff);
  }
  newX2() {
    this.x2 = 0;
    while (abs(this.x1 - this.x2) < width / 10 || this.x2 == 0) {
      this.x2 = map(random(), 0, 1, ranOff, width - ranOff);
    }
  }
  newY() {
    this.y = map(random(), 0, 1, ranOff, height - ranOff);
  }

  update() {
    let drag = 0.75;
    let strength = 0.04;
    // let drag = 0.85;
    // let strength = 0.03;
    let fx1 = this.x1 - this.x1lag;
    fx1 *= strength;
    this.x1vel *= drag;
    this.x1vel += fx1;
    this.x1lag += this.x1vel;

    let fx2 = this.x2 - this.x2lag;
    fx2 *= strength;
    this.x2vel *= drag;
    this.x2vel += fx2;
    this.x2lag += this.x2vel;

    let fy = this.y - this.ylag;
    fy *= strength;
    this.yvel *= drag;
    this.yvel += fy;
    this.ylag += this.yvel;
  }

  display() {
    let rectRad = 20;
    let rOff = 10;
    let alpha = 255 / numGrids * 1.5;

    push;
    noStroke();
    fill(230, 50, 50, alpha); //red
    rect(rOff, rOff, this.x1lag - 2*rOff, this.ylag - 2*rOff, rectRad);
    fill(219, 149, 35, alpha); //gold
    rect(width - rOff, rOff, -(width-this.x1lag) + 2*rOff, this.ylag - 2*rOff, rectRad);
    fill(100, 150, 50, alpha); //green
    rect(rOff, height - rOff, this.x2lag - 2*rOff, -(height-this.ylag) + 2*rOff, rectRad);
    fill(255, 250, 245, alpha); //white
    rect(width - rOff, height - rOff, -(width-this.x2lag) + 2*rOff, -(height-this.ylag) + 2*rOff, rectRad);
    pop;

  }

  timedResize() {
    let tTrigger = 130;
    for (let i = 0; i < t.length; i++) {
      t[i]++;
    }
    if (t[0] > tTrigger) {
      grid.newX1();
      t[0] = 0;
    }
    if (t[1] > tTrigger) {
      grid.newX2();
      t[1] = 0;
    }
    if(t[2] > tTrigger) {
      grid.newY(0);
      t[2] = 0;
    }
  }
}

function windowResized() {
  setup();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = new Grid;
}

function draw() {
  background(0);
  grid.update();
  grid.display();
  grid.timedResize();
}

function mouseClicked() {
  grid.newX1();
  grid.newX2();
  grid.newY();
}
