class Wall {
  constructor(x, y, z) {
    let wall = document.createElement("a-box");
    wall.setAttribute("material", "src: #brick-texture; repeat: 2 2"); // use the texture and repeat for tiling
    wall.setAttribute("scale", "3 8 3");
    wall.setAttribute("position", `${x} ${y} ${z}`);
    scene.append(wall);
  }
}