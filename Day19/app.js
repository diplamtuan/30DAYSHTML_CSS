const color = document.querySelector("#color");
const eraser = document.querySelector("#eraser");
const minus = document.querySelector("#minus");
const sizeEl = document.querySelector("#size");
const plus = document.querySelector("#plus");
const download = document.querySelector("#download");
const reset = document.querySelector("#reset");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let x, y;
let isPressed = false;
let colorValue = "black";
let size = 10;
color.addEventListener("change", (e) => {
  colorValue = e.target.value;
});

eraser.addEventListener("click", () => {
  colorValue = "white";
});

minus.addEventListener("click", () => {
  size -= 5;
  size = size > 10 ? size : 10;
  sizeEl.innerText = size;
});
plus.addEventListener("click", () => {
  size += 5;
  size = size < 30 ? size : 30;
  sizeEl.innerText = size;
});

reset.addEventListener("click", () => {
  ctx.clearRect(
    0,
    0,
    canvas.getBoundingClientRect().width,
    canvas.getBoundingClientRect().height
  );
});

download.addEventListener("click", (e) => {
  const canvasURL = canvas.toDataURL("image/png");
  e.currentTarget.href = canvasURL;
});
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(xPos, yPos) {
  ctx.beginPath();
  ctx.fillStyle = colorValue;
  ctx.arc(xPos, yPos, size, 0, 2 * Math.PI);
  ctx.fill();
}

function drawLine(x1Pos, y1Pos, x2Pos, y2Pos) {
  ctx.beginPath();
  ctx.strokeStyle = colorValue;
  ctx.moveTo(x1Pos, y1Pos);
  ctx.lineTo(x2Pos, y2Pos);
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
