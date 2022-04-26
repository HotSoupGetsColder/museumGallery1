class Stem {
  constructor(xi, yi, xf, yf) {
    this.pi = createVector(xi, yi);
    this.pf = createVector(xf, yf);
    this.p2 = createVector(xi, yf * 3/2);
    this.p3 = this.p2;
    this.step = [];

    this.moveTo(xf, yf);
    this.genPoints();
  }

  genPoints() {
    let nPoints = 50;
    for (let i = 0; i <= nPoints; i++) {
      let t = i / nPoints;
      let x = bezierPoint(this.pi.x, this.p2.x, this.p3.x, this.pf.x, t);
      let y = bezierPoint(this.pi.y, this.p2.y, this.p3.y, this.pf.y, t);
      let tx = bezierTangent(this.pi.x, this.p2.x, this.p3.x, this.pf.x, t);
      let ty = bezierTangent(this.pi.y, this.p2.y, this.p3.y, this.pf.y, t);
      angleMode(DEGREES);
      let tAng = atan2(ty , tx);
      this.step[i] = {x: x, y: y, tx: tx, ty: ty, tAng: tAng};
    }
  }

  showGuides() {
    push();
    strokeWeight(1);
    stroke(color('rgba(255, 255, 255, 0.09)'));

    noFill();
    strokeWeight(1);
    let x1 = this.pi.x;
    let y1 = this.pi.y;
    let x2 = this.p2.x;
    let y2 = this.p2.y;
    let x3 = this.p3.x;
    let y3 = this.p3.y;
    let x4 = this.pf.x;
    let y4 = this.pf.y;
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    for (let i = 0; i < this.step.length; i++) {
      push();
      translate(this.step[i].x, this.step[i].y);
      circle(0, 0, 7);
      rotate(this.step[i].tAng);
      line(0, 0, 20, 0);
      pop();
    }
    pop();
  }

  show(lcol, lwt) {
    push();
    noFill();
    stroke(lcol);
    strokeWeight(lwt);
    beginShape();
    let noiseOff = random(1000);
    for (let i = 0; i < this.step.length; i++) {
      let offTol = 2;
      noiseOff += 0.8;
      let off = map(noise(noiseOff), 0, 1, -offTol, offTol);
      let ang = this.step[i].tAng + 90;
      let xOff = off * cos(ang);
      let yOff = off * sin(ang);
      let x = this.step[i].x + xOff;
      let y = this.step[i].y + yOff
      vertex(x, y);
    }
    endShape();
    pop();
    // this.showGuides();
  }



  moveTo(px, py) {
    this.pf.set(px, py);
    let v3Move = this.pf.copy().sub(this.pi).div(3);
    this.p3 = this.p2.copy().add(v3Move);
  }

}
