class Flower {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.ang = random(TWO_PI);
    this.generatePetalPoints();
  }

  generatePetalPoints() {
    this.pt = [];
    angleMode(DEGREES);
    let i = 0;
    for (let phi = 0; phi < 360; phi += 1) {
      let r = ((40 * pow(abs(sin(phi * 8/2)), 1)) + 150)
      let bumpiness = 1 * pow(r/130, 5) * sin(phi * 19);
      r = r + bumpiness;
      r = r * this.r / 400;
      let x = r * cos(phi);
      let y = r * sin(phi);
      this.pt[i] = {x: x, y: y, r: r, phi: phi};
      i++;
    }
  }

  // show() {
  //   push();
  //   translate(this.x, this.y);
  //   beginShape();
  //   for (let i = 0; i < this.pt.length; i++) {
  //     vertex(this.pt[i].x, this.pt[i].y);
  //   }
  //   endShape();
  //   pop();
  // }

  showShake(fcol, fwt, ffill) {
    push();
    fill(ffill);
    stroke(fcol);
    strokeWeight(fwt);
    translate(this.x, this.y);
    angleMode(RADIANS);
    rotate(this.ang);
    beginShape();
    let noiseOff = random(1000);
    angleMode(DEGREES);
    for (let i = 0; i < this.pt.length; i++) {
      let r = this.pt[i].r
      // r *= random(0.95, 1.05);
      r *= map(noise(noiseOff), 0, 1, 0.95, 1.05);
      noiseOff += 0.15;
      let x = r * cos(this.pt[i].phi);
      let y = r * sin(this.pt[i].phi);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }

  showGuides() {
    push();
    strokeWeight(5);
    stroke(color('rgba(255, 255, 255, 0.1)'));
    point(this.x, this.y);
    noFill();
    strokeWeight(1);
    circle(this.x, this.y, this.r);
    pop();
  }

  moveTo(px, py) {
    this.x = px;
    this.y = py;
  }
}
