class Bush {
  constructor() {

  }

  show(x0,y0) {
    push();
    translate(x0,y0);
    noFill();
    circle(0, 0, 100);
    for (let i = 0; i < 50; i++) {
      let r = randomGaussian(30, 30);
      let phi = randomGaussian(0, 45);
      angleMode(DEGREES);
      let x = r * cos(phi);
      let y = r * sin(phi);
      point(x,y);
    }
    pop();
  }
}
