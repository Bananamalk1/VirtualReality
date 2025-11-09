class House {
    constructor(x, y, z) {
        this.obj = document.createElement("a-entity");

        let walls = document.createElement("a-box");
        walls.setAttribute("color", "lightblue");
        walls.setAttribute("height", "2");
        walls.setAttribute("width", "2");
        walls.setAttribute("depth", "2");
        walls.setAttribute("position", "0 1 0");
        this.obj.append(walls);

        let roof = document.createElement("a-cone");
        roof.setAttribute("position", "0 2.5 0");
        roof.setAttribute("color", "darkred");
        roof.setAttribute("radius", "1.2");
        roof.setAttribute("height", "1");
        this.obj.append(roof);

        this.obj.setAttribute("position", { x: x, y: y, z: z });
        scene.append(this.obj);
    }
}