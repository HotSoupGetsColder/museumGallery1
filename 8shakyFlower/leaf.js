class Leaf {
  constructor(xi, yi, xf, yf) {
    this.pi = createVector(xi, yi);
    this.pf = createVector(xf, yf);

    this.p2 = createVector(xi, yf * 3/2);
    this.p3 = this.p2;
  }

  showGuides() {
    push();
    strokeWeight(1);
    stroke(color('rgba(255, 255, 255, 0.28)'));
    line(this.pi.x, this.pi.y, this.pf.x, this.pf.y);
    line(this.p2.x, this.p2.y, this.p3.x, this.p3.y);
    strokeWeight(5);
    point(this.p2.x, this.p2.y);
    point(this.p3.x, this.p3.y);
    pop();
  }

  show() {
    let x1 = this.pi.x;
    let y1 = this.pi.y;
    let x2 = this.p2.x;
    let y2 = this.p2.y;
    let x3 = this.p3.x;
    let y3 = this.p3.y;
    let x4 = this.pf.x;
    let y4 = this.pf.y;
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  update() {
    this.pf.set(mouseX, mouseY);
    let v3Move = this.pf.copy().sub(this.pi).div(3);
    this.p3 = this.p2.copy().add(v3Move);
  }

}
