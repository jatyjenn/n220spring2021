//controls y postions of cirlces
var yPos = [];

//variable for x speed
var circ_speed = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(120);

  //controls start of and conditions of circles
  for (let i = 0; i < yPos.length; i++) {
    circle(200, yPos[i], 10, 10);

    //moves circles down 5 pixels each cycle
    yPos[i] = yPos[i] + 5;
  }

  //starts falling circle motion
  circ_speed = circ_speed + 1;
  //controls speed of falling cirlces and restarts cycles
  if (circ_speed == 10) {
    circ_speed = 0;
    //resets the y postion to 0
    yPos.push(0);
  }
}
