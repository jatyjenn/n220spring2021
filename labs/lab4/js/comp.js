//defines items inside an array
let colors = ["#8addd2", "#7f7adb", "#bbcaf1", "#404258"];

function setup() {
  createCanvas(400, 300);
  background(100);
  //defines starting point, lenght, condition of loop
  for (var i = 0; i < 4; i++) {
    //fill variable i with items inside the array
    fill(colors[i]);
    //controls  x and y postion, spacing, and size of displayed item
    rect(200, 50 * i, 35, 35);
    rect(50 * i, 50, 35, 35);
  }
  for (var i = 0; i < 4; i++) {
    //fill variable i with items inside the array
    fill(colors[i]);
    //controls  x and y postion, spacing, and size of displayed item
    rect(250, 50 * i, 35, 35);
    rect(50 * i, 100, 35, 35);
  }
}
