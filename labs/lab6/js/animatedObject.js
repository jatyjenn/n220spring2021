//the objects that hold all info about "basketball"
let basketball = {
  x: 10,
  y: 20,
  r: 10,
  color: [227, 119, 11]
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  fill(basketball.color);
  basketball.x += 2.5;
  basketball.r += 0.5;

  ellipse(basketball.x, basketball.y, basketball.r);
}
