var body = document.body;
var playground = document.createElement("div");
var ball = document.createElement("div");
var bounceHeight;
var speed = 5;
var ballTopPosition = 0;

function drawPlayground(height, width) {
  const style =
    `height:${height}px;` +
    `width:${width}px;` +
    `border:1px solid red;` +
    `position:relative`;
  playground.style.cssText = style;
}

function drawBall(diameter) {
  const style =
    `width:${diameter}px;` +
    `height:${diameter}px;` +
    `background:red;` +
    `position:absolute;` +
    `top:0;` +
    `border-radius:100px`;
  bounceHeight = parseInt(playground.style.height) - diameter;
  ball.style.cssText = style;
}

function bounce() {
  ballTopPosition = parseInt(ball.style.top); // 1. Get current vertical position of the ball
  ballTopPosition += speed; // 2. Update position by adding speed
  ball.style.top = ballTopPosition + "px"; // 3. Apply new position to the ball

  // 4. Check if the ball hits the top or bottom of the playground
  if (ballTopPosition <= 0 || ballTopPosition >= bounceHeight) {
    speed *= -1; // 5. Reverse direction if ball hits top or bottom
  }

  window.requestAnimationFrame(bounce);
}

body.append(playground);
playground.append(ball);

drawPlayground(400, 400);
drawBall(80);
window.requestAnimationFrame(bounce);
