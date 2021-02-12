function setup() {
  createCanvas(350, 320);
}

function draw() {
  background(225);

  // controls starting circle size, sets condition of how many and when to draw new circles.
  for (var i = 40; i > 0; i--) {
    // positions and controls circles diameter
    circle(170, 160, i * 4);
  }
}
