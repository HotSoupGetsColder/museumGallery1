class Plant {
  constructor(xi, yi, xf, yf, flowerRad) {
    this.vi = createVector(xi, yi);
    this.vf = createVector(xf, yf);
    this.vDisp = createVector(xf - xi, yf - yi);
    this.flower = new Flower(xf, yf, flowerRad);
    this.leaf = new Leaf(xi, yi, xf, yf);
  }

  show(lcol, lwt, fcol, fwt, ffill) {
    this.leaf.show(lcol, lwt);
    let tiltAng = this.leaf.step[this.leaf.step.length - 1].tAng
    this.flower.show(fcol, fwt, ffill, tiltAng);
  }

  update() {
    this.leaf.moveTo(mouseX, mouseY);
    this.flower.moveTo(mouseX, mouseY);
  }
}
