
js
class Rocket {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.01 + Math.random() * 0.02;
        this.obj = document.createElement("a-entity");

        let body = document.createElement("a-cylinder");
        body.setAttribute("color", "#1976d2"); 
        body.setAttribute("radius", "1");
        body.setAttribute("height", "10");
        body.setAttribute("position", "0 0 0");
        this.obj.append(body);

        let tip = document.createElement("a-cone");
        tip.setAttribute("color", "#ffb300"); 
        tip.setAttribute("radius-bottom", "1");
        tip.setAttribute("radius-top", "0");
        tip.setAttribute("height", "7");
        tip.setAttribute("position", "0 7 0");
        this.obj.append(tip);

        let cross = document.createElement("a-sphere");
        cross.setAttribute("color", "#fffde7"); 
        cross.setAttribute("position", "0 2 0");
        cross.setAttribute("scale", "0.5 2 0");
        cross.setAttribute("radius", "3");
        this.obj.append(cross);

        let cross2 = document.createElement("a-sphere");
        cross2.setAttribute("color", "#fffde7");
        cross2.setAttribute("position", "0 2 0");
        cross2.setAttribute("scale", "0 2 0.5");
        cross2.setAttribute("radius", "3");
        cross2.setAttribute("rotation", "0 45 0");
        this.obj.append(cross2);

        let layer = document.createElement("a-cylinder");
        layer.setAttribute("color", "#e1f5fe"); 
        layer.setAttribute("position", "0 3 0");
        layer.setAttribute("radius", "1.02");
        layer.setAttribute("height", "5");
        this.obj.append(layer);

        let layer2 = document.createElement("a-cylinder");
        layer2.setAttribute("color", "#ffa726"); 
        layer2.setAttribute("position", "0 -3 0");
        layer2.setAttribute("radius", "1.5");
        layer2.setAttribute("height", "7");
        this.obj.append(layer2);

        let layer3 = document.createElement("a-cylinder");
        layer3.setAttribute("color", "#90caf9"); 
        layer3.setAttribute("position", "1 -3 1");
        layer3.setAttribute("radius", "0.5");
        layer3.setAttribute("height", "4");
        this.obj.append(layer3);

        let layer4 = document.createElement("a-cylinder");
        layer4.setAttribute("color", "#ffa726");
        layer4.setAttribute("position", "-1 -3 -1");
        layer4.setAttribute("radius", "0.5");
        layer4.setAttribute("height", "4");
        this.obj.append(layer4);

        let layer5 = document.createElement("a-cylinder");
        layer5.setAttribute("color", "#00897b"); 
        layer5.setAttribute("position", "-1 -3 1");
        layer5.setAttribute("radius", "0.5");
        layer5.setAttribute("height", "4");
        this.obj.append(layer5);

        let layer6 = document.createElement("a-cylinder");
        layer6.setAttribute("color", "#26c6da"); 
        layer6.setAttribute("position", "1 -3 -1");
        layer6.setAttribute("radius", "0.5");
        layer6.setAttribute("height", "4");
        this.obj.append(layer6);

        let layer7 = document.createElement("a-cylinder");
        layer7.setAttribute("color", "#0288d1");
        layer7.setAttribute("position", "0 -5 0");
        layer7.setAttribute("radius", "0.5");
        layer7.setAttribute("height", "4");
        this.obj.append(layer7);

    

        this.obj.setAttribute("position", { x: x, y: y, z: z });
        scene.append(this.obj);
    }
    fly() {
        this.y += this.dy;
        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    }
}