var m1 = 10,
  m2 = 10,
  m3 = 10;
var r1 = 150,
  r2 = 50,
  r3 = 100;
var a1 = Math.PI / 2,
  a2 = Math.PI / 2,
  a3 = Math.PI / 8;
var a1_v = -0.05,
  a2_v = 0.05,
  a3_v = 0.05;
var g = 0.98;
var px2, py2;

var dW = 1200,
  dH = 800;
var x1, y1, x2, y2, x3, y3;

var cx = 500,
  cy = 300;

function setup() {
  createCanvas(dW, dH);
  background(255);
  buffer = createGraphics(dW, dH);
  buffer.background(255);
  buffer.translate(cx, cy);
}

function draw() {
  background(255);
  image(buffer, 0, 0, dW, dH);

  strokeWeight(4);
  stroke(0);
  translate(cx, cy);

  x1 = r1 * Math.sin(a1);
  y1 = r1 * Math.cos(a1);

  line(0, 0, x1, y1);
  fill(0);
  ellipse(x1, y1, m1, m1);

  x2 = x1 + r2 * Math.sin(a2);
  y2 = y1 + r2 * Math.cos(a2);
  line(x1, y1, x2, y2);
  fill(0);
  ellipse(x2, y2, m2, m2);

  // x3 = x2 + r3 * Math.sin(a3);
  // y3 = y2 + r3 * Math.cos(a3);
  // line(x2, y2, x3, y3);
  // fill(0);
  // ellipse(x3, y3, m3, m3);

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
  a1_v *= 0.99;
  a2_v *= 0.99;
  if (frameCount > 1) {
    buffer.line(px2, py2, x2, y2);
  }
  px2 = x2;
  py2 = y2;
}
