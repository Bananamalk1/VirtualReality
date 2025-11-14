let maze = [
  "m--xxx---x",
  "--x--x--x-",
  "x--xx--x--",
  "x--x--x--x",
  "x-----x--x",
  "xxxx--xxxx",
  "x-----x---",
  "x--xxxx--x",
  "x--------x",
  "xxxxxxxxxxx"
];

window.addEventListener("DOMContentLoaded", () => {
  let scene = document.querySelector("a-scene");

  maze.forEach((row, r) => {
    row.split("").forEach((ch, c) => {
      let x = 3 * c, z = 3 * r;
      let el = document.createElement(ch == "x" ? "a-box" : ch == "m" ? "a-sphere" : "a-plane");

      el.setAttribute("color", ch == "x" ? "gray" : ch == "m" ? "deepskyblue" : "lightgreen");
      el.setAttribute("position", { x, y: ch == "m" ? 1.5 : 0.5, z });

      if (ch == "-") el.setAttribute("rotation", "-90 0 0");
      if (ch == "m") el.setAttribute("radius", "1");

      scene.appendChild(el);
    });
  });
});