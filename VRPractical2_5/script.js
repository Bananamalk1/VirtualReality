let maze = [
  "m--xxxxxxxxxxxxxxxxxxxx",
  "---x--------x--x------x",
  "x--xxx--x--xxxx--x--x--",
  "x--x--x-----x--x--x----",
  "x--x--xxxxxxx--xxxx--x-",
  "x-----x------x--x-----x",
  "xxxx--xxxx--xxxxxxx--xx",
  "x--x--x------x--------x",
  "x--x--xxx--x--x--xxxx--",
  "xxxxxxxxxxxxxxxxxxxxxxx"
];

let scene;

window.addEventListener("DOMContentLoaded", function() {
  scene = document.querySelector("a-scene");
  for (let r = 0; r < maze.length; r++) {
    let row = maze[r];
    let cols = row.split("");
    for (let c = 0; c < cols.length; c++) {
      if (cols[c] == "x") {
        new Wall(4 * c, 5, 4 * r);
      }
      
    }
  }
});