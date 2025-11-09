javascript
class Cloud {
    constructor(x, y, z) {
        this.obj = document.createElement("a-entity");

        let mainPuff = document.createElement("a-sphere");
        mainPuff.setAttribute("color", "#dfefff");
        mainPuff.setAttribute("radius", "1.5");
        mainPuff.setAttribute("position", "0 0 0");
        this.obj.append(mainPuff);

        let sidePuff1 = document.createElement("a-sphere");
        sidePuff1.setAttribute("color", "#e6f2ff");
        sidePuff1.setAttribute("radius", "1.2");
        sidePuff1.setAttribute("position", "1.3 0.3 0");
        this.obj.append(sidePuff1);

        let sidePuff2 = document.createElement("a-sphere");
        sidePuff2.setAttribute("color", "#f0f8ff");
        sidePuff2.setAttribute("radius", "1");
        sidePuff2.setAttribute("position", "-1.2 0.2 0");
        this.obj.append(sidePuff2);

        let topPuff = document.createElement("a-sphere");
        topPuff.setAttribute("color", "#f5fbff");
        topPuff.setAttribute("radius", "0.9");
        topPuff.setAttribute("position", "0 0.9 0.2");
        this.obj.append(topPuff);

        this.obj.setAttribute("position", { x: x, y: y, z: z });
        scene.append(this.obj);
    }
}