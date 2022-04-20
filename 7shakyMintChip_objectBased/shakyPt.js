class ShakyPt {
  constructor(tempr, tempang) {
    this.r = tempr;
    this.ang = tempang;
    this.x = this.r*cos(this.ang);
    this.y = this.r*sin(this.ang);
  }
}
