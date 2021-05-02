const canvas = document.getElementById("js-canvas");
const color = document.getElementsByClassName("js-color");
const range = document.getElementById("js-range");
const ctx = canvas.getContext('2d');
const mode = document.getElementById("js-mode")
const saveBtn = document.getElementsById("js-save")
const INITIAL_COLOR = "#2c2c2c";

canvas.width = 1500;
canvas.height= 900;
ctx.lineWidth = "2.5"

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 1500, 900);
ctx.strokeStyle = "#2c2c2c";
ctx.fillStyle = "";

function startPaint() {
  painting = true;
  
}
function mouseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
  else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  
}

let painting = false;
let filling = false;
function stop() {
  painting = false;
}
function mouseDown(event) {
  painting = true;
}


function canvasClick(){
  if (filling) {
    ctx.fillRect(0, 0, 1500, 900);

  }
}
function noContext(event){
  event.preventDefault();
}

if(canvas) {
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mousedown", startPaint);
  canvas.addEventListener("mouseleave", stop);
  canvas.addEventListener("mouseup", stop);
  canvas.addEventListener("click", canvasClick);
  canvas.addEventListener("contextmenu", noContext);
}

function changeColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
Array.from(color).forEach(color => color.addEventListener("click", changeColor));

function rangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

if (range) {
  range.addEventListener("input", rangeChange)
}

function changeMode() {
  if (filling === true) {
  filling = false;
  mode.innerText = "PAINT";
  }
  else {
    filling = true;
    mode.innerText = "FILL";
    
  }
}
if (mode) {
  mode.addEventListener("click", changeMode)
}

