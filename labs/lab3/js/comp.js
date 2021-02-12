//defines items inside an array
let colors = ["#A0A887", "#DEA360", "#E0894F", "#C07A47"];

function setup() {
  createCanvas(400, 300);
  //defines starting point, lenght, condition of loop
  for (var i = 0; i < 4; i++) {
    //fill variable i with items inside the array
    fill(colors[i]);
    //controls  x and y postion, spacing, and size of displayed item
    rect(50 * i, 150, 35, 35);
  }
}
