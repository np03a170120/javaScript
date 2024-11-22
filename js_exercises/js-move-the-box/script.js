var body = document.body;

var box = document.createElement("div");
var style = "height:60px;width:60px;background:red;position:absolute";
box.style.cssText = style;
body.append(box);

let xPos = 1;
let speed = 6;
const moveBox = () => {
  xPos += speed;
  box.style.left = xPos + "px";
  if (xPos < 0 || xPos >= 600) {
    speed *= -1;
  }
  requestAnimationFrame(moveBox);
};
requestAnimationFrame(moveBox);
