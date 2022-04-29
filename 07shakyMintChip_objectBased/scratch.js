class Scratch {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.ang = random(TWO_PI);
  }

  show() {
    let offTol = 1;
    let xOff = random(-offTol, offTol);
    let yOff = random(-offTol, offTol);
    let len = 10;
    push();
    translate(this.x, this.y);
    rotate(this.ang);
    scale(width*1/600);
    translate(0, map(random(), 0, 1, yOff, xOff))
    line(-len/2, 0, len/2, 0);

    let pairOff = 1.5;
    push()
    translate(random(-pairOff, pairOff), 5);
    line(-len/2, 0, len/2, 0);
    pop();
    push()
    translate(random(-pairOff, pairOff), -5);
    line(-len/2, 0, len/2, 0);
    pop();

    pop();
  }
}
