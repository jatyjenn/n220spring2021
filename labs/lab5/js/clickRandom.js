//let colors = ["#9a88ff", "#3f00b5", "#98fc03", "#ff0011"];
let w, h, a, t;

function setup() {
  createCanvas(400, 400);
  //set colors
  w = (255, 0, 17);
  h = (152, 252, 3);
  a = (154, 136, 255);
  //t = (63, 0, 181);
}

function draw() {
  background(127);
  // Draw a circle
  fill(w, h, a, 127);
  ellipse(150, 150, 30);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 300, 200);
  if (d < 100) {
    // Pick new random color values
    w = (255, 0, 17);
    h = (152, 252, 3);
    a = (154, 136, 255);
    //t = (63, 0, 181);
  }
}
