class Face {
  constructor(x,y,size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.head = new Shaky(0, 0, this.size);
    let eyeGap = 60;
    let eyeRad = 20;
    let eyeH = 40;
    this.eyeL = new Shaky(-eyeGap, -eyeH, eyeRad);
    this.eyeR = new Shaky(eyeGap*0.7, -eyeH, eyeRad*1.4);
    this.mouth = new Shaky(0, 30, 60);
  }

  show() {
    push();
    noFill();
    translate(this.x, this.y);
    // Draw head
    this.head.shake();
    this.head.show();

    // Draw eyes
    this.eyeL.shake();
    this.eyeL.show();
    this.eyeR.shake();
    this.eyeR.show();

    // Draw mouth
    this.mouth.shake();
    this.mouth.show();
    pop();
  }
}
