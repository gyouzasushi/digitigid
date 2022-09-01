import { predict } from "../pkg";
const N = 28 * 9;
const D = 15;
const HALF_D = Math.floor(D / 2);
const data = new Int32Array(N * N).fill(0);
const gyouza = <HTMLCanvasElement>document.getElementById('gyouza')!;
gyouza.style.border = "3px solid";
const ctx = gyouza.getContext('2d')!;
let isMouseDown = false;
gyouza.onmousedown = function (ev) {
    ev.preventDefault();
    const y = ev.clientY;
    const x = ev.clientX;
    ctx.beginPath();
    isMouseDown = true;
};
gyouza.onmousemove = function (ev) {
    ev.preventDefault();
    if (!isMouseDown) return;
    const x = ev.clientX;
    const y = ev.clientY;
    ctx.lineTo(x - HALF_D, y - HALF_D);
    ctx.lineCap = "round";
    ctx.lineWidth = D;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    const y0 = Math.max(0, Math.floor(y) - HALF_D);
    const y1 = Math.min(N - 1, Math.floor(y) + HALF_D);
    const x0 = Math.max(0, Math.floor(x) - HALF_D);
    const x1 = Math.min(N - 1, Math.floor(x) + HALF_D);
    for (let i = y0; i <= y1; i++) {
        for (let j = x0; j <= x1; j++) {
            data[i * N + j] = 1;
        }
    }
    const prob = predict(data).split("$").map((x) => Number(x));
    const num = prob.map((x, i) => [x, i]).reduce((a, b) => a[0] > b[0] ? a : b)[1];
    document.getElementById('num')!.textContent = num.toString();
};
gyouza.onmouseup = function (_ev) {
    isMouseDown = false;
};
const button = document.getElementById('clear')!;
button.onclick = function () {
    ctx.clearRect(0, 0, gyouza.width, gyouza.height);
    data.fill(0);
    document.getElementById('num')!.textContent = "?";
};
gyouza.ontouchstart = function (ev) {
    ev.preventDefault();
    const y = ev.touches[0].clientY;
    const x = ev.touches[0].clientX;
    ctx.beginPath();
    isMouseDown = true;
};
gyouza.ontouchmove = function (ev) {
    ev.preventDefault();
    if (!isMouseDown) return;
    const y = ev.touches[0].clientY;
    const x = ev.touches[0].clientX;
    ctx.lineTo(x - HALF_D, y - HALF_D);
    ctx.lineCap = "round";
    ctx.lineWidth = D;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    const y0 = Math.max(0, Math.floor(y) - HALF_D);
    const y1 = Math.min(N - 1, Math.floor(y) + HALF_D);
    const x0 = Math.max(0, Math.floor(x) - HALF_D);
    const x1 = Math.min(N - 1, Math.floor(x) + HALF_D);
    for (let i = y0; i <= y1; i++) {
        for (let j = x0; j <= x1; j++) {
            data[i * N + j] = 1;
        }
    }
    const prob = predict(data).split("$").map((x) => Number(x));
    const num = prob.map((x, i) => [x, i]).reduce((a, b) => a[0] > b[0] ? a : b)[1];
    document.getElementById('num')!.textContent = num.toString();
};
gyouza.ontouchend = function (_ev) {
    isMouseDown = false;
};
