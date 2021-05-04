let sz = 100;
let grid = [
  ['','',''],
  ['','',''],
  ['','','']
]
let players = ['X','O']
let turn = 0;


function setup() {
  createCanvas(3 * sz, 3 * sz);
}

function draw() {
  background(255);
  strokeWeight(3);
  addline();
  addplayers();
}

//adds lines to board
function addline() {
  line(0,sz,sz*3,sz);
  line(0,sz*2,sz*3,sz*2);
  line(sz,0,sz,sz*3);
  line(sz*2,0,sz*2,sz*3);
}
//this determine which player's turn it is
function addplayers() {
  for (let i in grid) {
    for (let d in grid[i]) {
       if (grid[i][d] == players[0]) {
           x(i,d);
       } else if (grid[i][d] == players[1]) {
          o(i,d);
       }
    }
  }
}
//this make the "O"
function o (x,y) {
  let d = sz * 0.25;
  circle((sz / 2) + (sz * x),(sz / 2) + (sz * y),d);
}
// this  create an x
function x (x,y){
  let p = sz * 0.10;
  line((sz * x + sz) - p,
       (sz * y) + p,
       (sz * x) + p,
       (sz * y + sz) - p);
  line((sz * x) + p,
       (sz * y) + p,
       (sz * x + sz) - p,
       (sz * y + sz) - p);
  
}

//this determines where the user clicked and places that user's symbol "x" or "o" in that spot
//I learned about the floor() at https://genekogan.com/code/p5js-transformations/ and on the p5js page seeing it on youtube. This basically calulate the position of something( in this case a mouse click) and rounds it down to the nearest whole number

function mouseClicked() {
  let x = floor (mouseX / sz);
  let y = floor (mouseY / sz);
  if (grid[x][y] == '') {
    if (turn == 0) {
      turn = 1;
    } else {
      turn = 0;
    }
    grid[x][y] = players[turn];
    redraw();
  }
}