class Wall {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-entity");
    let wall = document.createElement("a-box");
    wall.setAttribute("src", "#wall"); 
    wall.setAttribute("repeat", "0.5 2");
    wall.setAttribute("width", "4");
    wall.setAttribute("height", "10");
    wall.setAttribute("depth", "4");
    wall.setAttribute("position", { x: 0, y: 0, z: 0 });

    let baseboard = document.createElement("a-box");
    baseboard.setAttribute("color", "#888");
    baseboard.setAttribute("width", "4.1");
    baseboard.setAttribute("height", "0.2");
    baseboard.setAttribute("depth", "4.1");
    baseboard.setAttribute("position", { x: 0, y: -5, z: 0 });

    this.obj.append(wall);
    this.obj.append(baseboard);

    this.obj.setAttribute("position", { x, y, z });

    scene.appendChild(this.obj);
  }
}