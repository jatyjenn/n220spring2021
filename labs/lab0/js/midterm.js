//Draws 10 circles
function setup() {
  createCanvas(400, 300);
}
function draw() {
  var x = 50;
  //controls start of, amount of, and conditons of cirlces
  for (let i = 0; i < 10; ++i) {
    ellipse(x, mouseY, 50, 50);
  }
}

//color changes
// function draw() {
//   if (mouseX < 200) {
//     fill(140, 14, 204);
//   } else {
//     fill(232, 100, 2);
//   }
//   circle(mouseX, mouseY, 20, 20);
// }
