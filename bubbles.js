var dW = 500,
  dH = 500;
var bubbleRadius = 50;
var x = bubbleRadius,
  y = bubbleRadius;
var speed = 3;

function setup() {
  createCanvas(dW, dH);
  background(0);
}

// bubbles = [];
// for (let i = 0; i < 10; i++) {
//   bubbles.push(bubble.f, bubble.e);
// }
function draw() {
  background(0);
  for (let i = 0; i < 10; i++) {
    bubble.f;
    bubble.e;
  }
  x += speed;
  y += speed;
  if (x > dW || y > dH || x < 0 || y < 0) {
    speed = -1 * speed;
  }
}
