var body = document.body;
var canvas = document.createElement("div");
var dot = document.createElement("div");

function drawCanvas(x, y) {
  var style =
    "height:200px;" +
    "width:200px;" +
    "border:2px solid black;" +
    "position:relative;";
  canvas.style.cssText = style;
  body.append(canvas);
}

function drawDot(x, y) {
  var style =
    "height:20px;" +
    "width:20px;" +
    "border-radius:100%;" +
    "background:red;" +
    "position:absolute;" +
    `left:${x};` +
    `top:${y};`;
  dot.style.cssText = style;
  canvas.append(dot);
}

canvas.onmousemove = (event) => {
  var canvas_height = parseInt(canvas.style.height);
  var canvas_width = parseInt(canvas.style.height);

  var x = (event.offsetX * 100) / canvas_width + "%";
  var y = (event.offsetY * 100) / canvas_height + "%";

  canvas.onclick = () => {
    drawDot(x, y);
    if (x > "45%" && x < "50%" && y > "45%" && y < "50%") {
      alert("close enought" + x + y);
    }
  };
};

drawCanvas();
