var circles = [
  { x: 120, y: 40, r: 50 }, //0
  { x: 140, y: 70, r: 100 }, //1
  { x: 130, y: 85, r: 60 } //2
];
function setup() {
  createCanvas(400, 400);
}

function draw() {
  for (var i = 0; i < circles.length; i++) {
    ellipse(circles[i].x, circles[i].y, circles[i].r);
    circles[i].x += 2;
    circles[i].y += 2;
    if (circles[i].y > 200) {
      circles[i].y = 30;
      circles[i].x = Math.random() * 100;
    }
  }
}
