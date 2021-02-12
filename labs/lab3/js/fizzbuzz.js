function setup() {
  createCanvas(1400, 200);
}
function draw() {
  var y = 50;
  //controls start of, amount of, and conditons of cirlces
  for (let i = 0; i < 25; ++i) {
    //controlls spacing between the shapes
    let x = i * 55;
    //controls blue squares and sets condtions
    if ((i % 3 == 0) & (i % 5 == 0)) {
      fill(3, 6, 171);
      square(x, y, 50);
      //controls green squares and sets condtions
    } else if (i % 5 == 0) {
      fill(3, 171, 31);
      square(x, y, 50);
      // controls purple circles sets conditions
    } else if (i % 3 == 0) {
      fill(108, 2, 201);
      ellipse(x + 25, y + 25, 50, 50);
      //sets remaining circle to black
    } else {
      fill(0);
      ellipse(x + 25, y + 25, 50, 50);
    }
  }
}
