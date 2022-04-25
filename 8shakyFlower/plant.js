class Plant {
  constructor(xi, yi, xf, yf, flowerRad) {
    this.vi = createVector(xi, yi);
    this.vf = createVector(xf, yf);
    this.vDisp = createVector(xf - xi, yf - yi);
    this.flower = new Flower(xf, yf, flowerRad);
    this.stem = new Stem(xi, yi, xf, yf);
  }

  show(lcol, lwt, fcol, fwt, ffill) {
    push();
    this.stem.show(lcol, lwt);
    translate(6, 0);
    this.stem.show(lcol, lwt);
    pop();
    let tiltAng = this.stem.step[this.stem.step.length - 1].tAng
    this.flower.show(fcol, fwt, ffill, tiltAng);
  }

  update() {
    this.stem.moveTo(mouseX, mouseY);
    this.flower.moveTo(mouseX, mouseY);
  }
}
