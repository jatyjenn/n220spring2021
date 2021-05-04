let w = 100;
let grid = [
  ['','',''],
  ['','',''],
  ['','','']
]
let players = ['X','O']
let cont_time = false;
let turn = 0;

function setup() {
  createCanvas(3 * w, 3 * w);
}

function draw() {
  background(255);
  strokeWeight(3);
  addline();
  addplayers();
}

//adds lines to board
function addline() {
  line(0,w,w*3,w);
  line(0,w*2,w*3,w*2);
  line(w,0,w,w*3);
  line(w*2,0,w*2,w*3);
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
function o(x,y) {
  let d = w * 0.25;
  circle((w / 2) + (w * x),(w / 2) + (w * y),d);
}
// this  create an x
function x(x,y){
  let p = w * 0.10;
  line((w * x) + p,
       (w * y) + p,
       (w * x + w) - p,
       (w * y + w) - p);
  line((w * x + w) - p,
       (w * y) + p,
       (w * x) + p,
       (w * y + w) - p);
}

//this determines where the user clicked and places that user's symbol "x" or "o" in that spot
function mouseClicked() {
  let x = floor(mouseX / w);
  let y = floor(mouseY / w);
  if (!cont_time && grid[x][y] == '') {
    if (turn == 0) {
      turn = 1;
    } else {
      turn = 0;
    }
    grid[x][y] = players[turn];
    redraw();
  }
}