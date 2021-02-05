// //This was my attemp at #3 World Wrap
let xPos = 0;
let xspeed = 5;
function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(252, 186, 3);
  xPos = xPos + xspeed;

  if (xPos > width) {
    xspeed = -5;
  }

  circle(xPos, 100, 30);
}
