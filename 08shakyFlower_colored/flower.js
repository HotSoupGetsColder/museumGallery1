class Flower {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.ang = random(TWO_PI);
    this.generatePetalPoints();
    this.generateStamen(floor(random(2, 5)));
  }

  generatePetalPoints() {
    this.pt = [];
    angleMode(DEGREES);
    let i = 0;
    for (let phi = 0; phi < 360; phi += 1) {
      let r = ((120 * pow(abs(sin(phi * 8/2)), 0.3)) + 150)
      let bumpiness = 0.4 * pow(r/130, 4) * sin(phi * 24);
      r = r + bumpiness;
      r = r * this.r / 400;
      let x = r * cos(phi);
      let y = r * sin(phi);
      this.pt[i] = {x: x, y: y, r: r, phi: phi};
      i++;
    }
  }

  generateStamen(numStamen) {
    this.stamen = [];
    for (let i = 0; i < numStamen; i++) {
      let r = this.r / 4;
      let thetaTol = 60;
      let theta = random(90 - thetaTol, 90 + thetaTol);
      angleMode(DEGREES);
      let x = r * cos(theta);
      let y = -r * sin(theta);
      this.stamen[i] = new Stamen(x, y);
    }
  }

  show(fcol, fwt, ffill, tiltAng) {
    push();
    translate(this.x, this.y);
    angleMode(DEGREES);
    rotate(tiltAng);
    this.showPetals(fcol, fwt, ffill, tiltAng);
    rotate(-tiltAng);
    for (let i = 0; i < this.stamen.length; i ++) {
      this.stamen[i].show(0, 0);
    }
    pop();
  }

  showPetals(fcol, fwt, ffill, tiltAng) {
    push();
    fill(ffill);
    stroke(fcol);
    strokeWeight(fwt);
    // scale(1, 0.6);
    beginShape();
    let noiseOff = random(1000);
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
    // this.showGuides();
  }

  showGuides() {
    push();
    strokeWeight(5);
    stroke(color('rgba(255, 255, 255, 0.1)'));
    point(this.x, this.y);
    noFill();
    strokeWeight(1);
    circle(this.x, this.y, this.r);
    let clen = 10;
    line(this.x - clen, this.y, this.x + clen, this.y);
    line(this.x, this.y - clen, this.x, this.y + clen);
    pop();
  }

  moveTo(px, py) {
    this.x = px;
    this.y = py;
  }
}
