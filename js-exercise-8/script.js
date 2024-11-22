var body = document.body;

var canvas = document.createElement("div");
canvas.className = "canvas";
canvas.style.position = "relative";
canvas.style.width = "100px";
canvas.style.height = "100px";
canvas.style.border = "1px solid #999999";

body.append(canvas);

function plots(points) {
  var style =
    "height:12px;width:12px;background:red;border-radius:100%;position:absolute";

  points.forEach((element) => {
    var dot = document.createElement("div");
    dot.style.cssText = style;
    dot.style.top = element.x + "px";
    dot.style.left = element.y + "px";
    canvas.append(dot);
  });
}

var points = [
  { x: 10, y: 20 },
  { x: 40, y: 40 },
  { x: 60, y: 20 },
  { x: 90, y: 20 },
  { x: 60, y: 70 },
];

plots(points);
