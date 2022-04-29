class Leaf {
  constructor() {
    this.w = 40;
    this.l = 150;
    this.pleft = createVector(-this.w / 2, 0);
    this.pright = createVector(this.w / 2, 0);
    this.ptip = createVector(0, -this.l);
  }

  // Draws leaf object
  show(x, y) {
    push();
    translate(x, y);
    this.showGuides();

    beginShape();
    vertex(0, 0);
    vertex(this.pleft.x, this.pleft.y);
    vertex(this.ptip.x, this.ptip.y);
    vertex(this.pright.x, this.pright.y);
    endShape(CLOSE);

    pop();
  }

  // Draws leaf guidelines for troubleshooting
  showGuides() {
    push();
    strokeWeight(10);
    stroke(color('hsla(0, 0%, 100%, 0.4)'));
    point(0, 0);
    pop();
  }
}
