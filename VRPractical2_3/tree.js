class Tree {
  constructor(x, y, z) {
    this.obj = document.createElement("a-entity");

    let pines = document.createElement("a-cone");
    pines.setAttribute("color", "darkgreen");
    pines.setAttribute("position", "0 2.5 0");
    pines.setAttribute("height", "3");
    pines.setAttribute("radius-bottom", "1.5");
    this.obj.append(pines);

    let upperPines = document.createElement("a-cone");
    upperPines.setAttribute("color", "seagreen");
    upperPines.setAttribute("position", "0 3.5 0");
    upperPines.setAttribute("height", "2");
    upperPines.setAttribute("radius-bottom", "1");
    this.obj.append(upperPines);

    let stump = document.createElement("a-cylinder");
    stump.setAttribute("position", "0 1 0");
    stump.setAttribute("color", "saddlebrown");
    stump.setAttribute("radius", "0.3");
    stump.setAttribute("height", "2");
    this.obj.append(stump);

    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }
}