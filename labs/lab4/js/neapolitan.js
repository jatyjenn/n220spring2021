//defines items inside an array
let colors = ["#542e1a", "#faaff0", "#f7f4e4"];

function setup() {
  createCanvas(300, 300);
  background(100);
  //defines starting point, lenght, condition of loop
  for (var i = 0; i < 3; i++) {
    //fill variable i with items inside the array
    fill(colors[i]);
    //controls  x and y postion, spacing, and size of displayed item
    rect(55 * i, 120, 55, 75);
  }
}
