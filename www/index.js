"use strict";
exports.__esModule = true;
var pkg_1 = require("../pkg");
var N = 28 * 9;
var D = 15;
var HALF_D = Math.floor(D / 2);
var data = new Int32Array(N * N).fill(0);
var gyouza = document.getElementById('gyouza');
gyouza.style.border = "3px solid";
var ctx = gyouza.getContext('2d');
var isMouseDown = false;
gyouza.onmousedown = function (ev) {
    ev.preventDefault();
    var y = ev.clientY;
    var x = ev.clientX;
    ctx.beginPath();
    isMouseDown = true;
};
gyouza.onmousemove = function (ev) {
    ev.preventDefault();
    if (!isMouseDown)
        return;
    var x = ev.clientX;
    var y = ev.clientY;
    ctx.lineTo(x - HALF_D, y - HALF_D);
    ctx.lineCap = "round";
    ctx.lineWidth = D;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    var y0 = Math.max(0, Math.floor(y) - HALF_D);
    var y1 = Math.min(N - 1, Math.floor(y) + HALF_D);
    var x0 = Math.max(0, Math.floor(x) - HALF_D);
    var x1 = Math.min(N - 1, Math.floor(x) + HALF_D);
    for (var i = y0; i <= y1; i++) {
        for (var j = x0; j <= x1; j++) {
            data[i * N + j] = 1;
        }
    }
    var prob = (0, pkg_1.predict)(data).split("$").map(function (x) { return Number(x); });
    var num = prob.map(function (x, i) { return [x, i]; }).reduce(function (a, b) { return a[0] > b[0] ? a : b; })[1];
    document.getElementById('num').textContent = num.toString();
};
gyouza.onmouseup = function (_ev) {
    isMouseDown = false;
};
var button = document.getElementById('clear');
button.onclick = function () {
    ctx.clearRect(0, 0, gyouza.width, gyouza.height);
    data.fill(0);
    document.getElementById('num').textContent = "?";
};
gyouza.ontouchstart = function (ev) {
    ev.preventDefault();
    var y = ev.touches[0].clientY;
    var x = ev.touches[0].clientX;
    ctx.beginPath();
    isMouseDown = true;
};
gyouza.ontouchmove = function (ev) {
    ev.preventDefault();
    if (!isMouseDown)
        return;
    var y = ev.touches[0].clientY;
    var x = ev.touches[0].clientX;
    ctx.lineTo(x - HALF_D, y - HALF_D);
    ctx.lineCap = "round";
    ctx.lineWidth = D;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    var y0 = Math.max(0, Math.floor(y) - HALF_D);
    var y1 = Math.min(N - 1, Math.floor(y) + HALF_D);
    var x0 = Math.max(0, Math.floor(x) - HALF_D);
    var x1 = Math.min(N - 1, Math.floor(x) + HALF_D);
    for (var i = y0; i <= y1; i++) {
        for (var j = x0; j <= x1; j++) {
            data[i * N + j] = 1;
        }
    }
    var prob = (0, pkg_1.predict)(data).split("$").map(function (x) { return Number(x); });
    var num = prob.map(function (x, i) { return [x, i]; }).reduce(function (a, b) { return a[0] > b[0] ? a : b; })[1];
    document.getElementById('num').textContent = num.toString();
};
gyouza.ontouchend = function (_ev) {
    isMouseDown = false;
};
