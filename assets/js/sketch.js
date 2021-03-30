var [a1, a2] = [Math.PI / 2, Math.PI / 2];
var [a1_v, a2_v, a3_v] = [-0.05, 0.05, 0.05];
var px2, py2;

var [dW, dH] = [500, 500];
var x1, y1, x2, y2, x3, y3;
var [cx, cy] = [dW / 2, dH / 3];
var drawings;

var [prevLineX, prevLineY] = [p5.mouseX, p5.mouseY];

function setup() {
  var myCanvas = createCanvas(dW, dH);
  myCanvas.parent('my-canvas');

  buffer = createGraphics(dW, dH);
  buffer.background("#e6ffe8");

  drawings = createGraphics(dW, dH);

  for (var x = 0; x < dW; x += dW / 50) {
    for (var y = 0; y < dH; y += dH / 50) {
      buffer.stroke(color("#b1fcb7"));
      buffer.strokeWeight(0.5);
      buffer.line(x, 0, x, dH);
      buffer.line(0, y, dW, y);
    }
  }

}

function mouseReleased() {
  [prevLineX, prevLineY] = [p5.mouseX, p5.mouseY];
}

function draw() {
  var [r1, r2] = [range_s1.value, range_s2.value];

  var [m1, m2] = [range_m1.value, range_m2.value];
  var R = range_R.value / 100;
  var g = range_g.value;

  background(255);
  image(buffer, 0, 0, dW, dH);
  image(drawings, 0, 0, dW, dH);
  strokeWeight(2);
  stroke(0);

  if (mouseIsPressed && mouseY < dH && mouseX < dW) {
    if (prevLineX && prevLineY) {

      drawings.stroke(color("#ff547f"));
      drawings.line(mouseX, mouseY, prevLineX, prevLineY);
    }
    prevLineX = mouseX
    prevLineY = mouseY
    ellipse(mouseX, mouseY, 5, 5);
  }

  // Central Circle
  ellipse(cx, cy, 5, 5);

  x1 = cx + r1 * Math.sin(a1);
  y1 = cy + r1 * Math.cos(a1);

  x2 = x1 + r2 * Math.sin(a2);
  y2 = y1 + r2 * Math.cos(a2);

  fill(color("#a1578a"));
  ellipse(x1, y1, m1, m1);
  line(cx, cy, x1, y1);

  fill(color("rgb(111,111,111)"));
  ellipse(x2, y2, m2, m2);
  line(x1, y1, x2, y2);

  num1 = -g * (2 * m1 + m2) * Math.sin(a1);
  num2 = -m2 * g * Math.sin(a1 - 2 * a2);
  num3 = -2 * Math.sin(a1 - a2) * m2;
  num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * Math.cos(a1 - a2);
  den1 = r1 * (2 * m1 + m2 - m2 * Math.cos(2 * (a1 - a2)));

  var a1_a = (num1 + num2 + num3 * num4) / den1;

  num1 = 2 * sin(a1 - a2);
  num2 = a1_v * a1_v * r1 * (m1 + m2);
  num3 = g * (m1 + m2) * cos(a1);
  num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
  den1 = r2 * (2 * m1 + m2 - m2 * Math.cos(2 * (a1 - a2)));

  var a2_a = (num1 * (num2 + num3 + num4)) / den1;
  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v;
  a2 += a2_v;
  a1_v *= R;
  a2_v *= R;

  if (px2 && py2) {
    drawings.stroke(color("#7a9476"));
    drawings.line(px2, py2, x2, y2);
  }
  px2 = x2;
  py2 = y2;
}

function clearCanvas() {
  drawings.clear();
}


function resetValues() {
  console.log("redrawing..");
  clearCanvas();
  [a1, a2] = [Math.PI / 2, Math.PI / 2];
  [px2, py2] = [undefined, undefined]
  redraw();
}