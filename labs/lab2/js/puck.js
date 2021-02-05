//This is my attemp at #2 Puck Side
function setup() {
  createCanvas(400, 300);
  background(110);
}
function draw() {
  if (mouseX < 200) {
    fill(0, 14, 204);
  } else {
    fill(232, 2, 2);
  }
  ellipse(mouseX, mouseY, 20, 20);
}
