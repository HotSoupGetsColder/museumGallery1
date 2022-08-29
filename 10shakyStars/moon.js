class Moon {
  constructor(x,y,r) {
    this.center = createVector(x, y);
    this.r = r;
    this.ang = 60;
    this.angShake = this.ang;
  }

  shake() {
    this.angShake = this.ang + random(-2, 2);
  }

  disp() {
    push();
    translate(this.center.x, this.center.y);
    rotate(this.angShake);
    arc(0, 0, 2*this.r, 2*this.r, 0, 180);
    arc(0, 0, 2*this.r, 0.5*2*this.r, 0, 180);
    pop();

  }
}
