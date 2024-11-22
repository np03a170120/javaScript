var body = document.body;
var canvas = document.createElement("div");

body.append(canvas);

var style =
  "height:300px;" +
  "width:300px;" +
  "border:1px solid black;position:relative;cursor:pointer;";
canvas.style.cssText = style;

canvas.onmousemove = (event) => {
  var x = event.offsetX;
  var y = event.offsetY;
  canvas.onclick = () => {
    var dot = document.createElement("div");
    var style_dot =
      "height:20px;" +
      "width:20px;" +
      "background:red;" +
      "border-radius:100px;" +
      `top:${y}px;` +
      `left:${x}px;` +
      "position:absolute;";
    dot.style.cssText = style_dot;
    canvas.append(dot);
  };
};
