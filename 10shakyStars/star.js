class Star {
  constructor(x,y,r) {
    this.center = createVector(x, y);
    this.r = r;
    this.ang = random(360);
    this.genPoints();
  }

  genPoints() {
    this.p0 = [];
    this.p = [];
    let n = 5;
    for (let i = 0; i < n; i++) {
      let r = this.r;
      let spacing = 360 / n;
      let phi = spacing * i;
      angleMode(DEGREES);
      let x = r * cos(phi);
      let y = r * sin(phi);
      this.p0[i] = createVector(x,y);
      this.p[i] = this.p0[i];
    }

  }

  shake() {
    for(let i = 0; i < this.p.length; i++) {
      let v = p5.Vector.random2D().setMag(this.r/8);
      this.p[i] = this.p0[i].copy().add(v);
    }
  }

  disp() {
    // this.dispGuides();
    push();
    translate(this.center.x, this.center.y);
    rotate(this.ang);
    noFill();
    beginShape();
    vertex(this.p[0].x, this.p[0].y);
    vertex(this.p[2].x, this.p[2].y);
    vertex(this.p[4].x, this.p[4].y);
    vertex(this.p[1].x, this.p[1].y);
    vertex(this.p[3].x, this.p[3].y);
    endShape(CLOSE);
    pop();
  }

  dispGuides() {
    push();
    translate(this.x, this.y);
    strokeWeight(5);
    stroke(color('rgba(255, 255, 255, 0.3)'))
    point(0,0);
    for (let i = 0; i < this.p.length; i++) {
      point(this.p[i].x, this.p[i].y);
    }
    pop();
  }
}
