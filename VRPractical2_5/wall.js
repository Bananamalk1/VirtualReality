class Wall {
  constructor(x, y, z) {
    let wall = document.createElement("a-box");
    wall.setAttribute("color", "blue");  
    wall.setAttribute("scale", "3 8 3");  
    wall.setAttribute("position", `${x} ${y} ${z}`);
    scene.append(wall);
  }
}