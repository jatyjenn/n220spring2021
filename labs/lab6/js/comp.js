//the objects that hold all info about "basketball"
let basketball = {
  x: 10,
  y: 20,
  r: 10,
  color: [156, 255, 20],
  update: function() {
    fill(basketball.color);
    this.x += 0.6;
    this.y += 0.5;
    this.r += 0.6;
    ellipse(this.x, this.y, this.r);
  }
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  basketball.update();
}
