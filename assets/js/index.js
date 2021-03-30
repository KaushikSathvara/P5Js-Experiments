var resetBtn = document.getElementById("reset-btn");
var clearBtn = document.getElementById("clear-btn");

var range_m1 = document.getElementById('range_m1');
var range_m2 = document.getElementById('range_m2');
var range_g = document.getElementById('range_g');
var range_R = document.getElementById('range_R');
var range_s1 = document.getElementById('range_s1');
var range_s2 = document.getElementById('range_s2');

resetBtn.onclick = () => resetValues();
clearBtn.onclick = () => clearCanvas();
