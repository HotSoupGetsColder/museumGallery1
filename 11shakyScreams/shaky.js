class Shaky {
  constructor(tempx, tempy, tempr, tempnpts = 1000) {
    this.x = tempx;
    this.y = tempy;
    this.r = tempr;
    this.npts = tempnpts;
    this.pt = [];
    for (let i = 0; i < this.npts; i++) {
      let angSpacing = TWO_PI / this.npts;
      let ang = i * angSpacing;
      this.pt[i] = new ShakyPt(this.r, ang);
    }
  }

  shake() {
    let noiseOff = random(1000);
    let angOff = random(TWO_PI);
    for (let i = 0; i < this.pt.length; i++) {
      noiseOff = noiseOff + 0.05;
      let tol = 5 * width * 12/10000;
      let shakeFac = map(noise(noiseOff), 0, 1, -tol, tol);
      this.pt[i].ang = this.pt[i].ang + angOff;
      this.pt[i].x = (this.pt[i].r + shakeFac)*cos(this.pt[i].ang);
      this.pt[i].y = (this.pt[i].r + shakeFac)*sin(this.pt[i].ang);

    }
  }

  show() {
    push();
    strokeWeight(width*12/1000);
    // stroke(255);
    // point(this.x, this.y);
    pop();

    // for (let i = 0; i < this.pt.length; i++) {
    //   this.pt[i].show(this.x, this.y);
    // }
    push();
    translate(this.x, this.y);
    for (let i = 0; i < this.pt.length; i++) {
      if (i == this.pt.length - 1) {
        line(this.pt[i].x, this.pt[i].y, this.pt[0].x, this.pt[0].y)
      } else {
        line(this.pt[i].x, this.pt[i].y, this.pt[i+1].x, this.pt[i+1].y)
      }
    }
    pop();
  }
}
