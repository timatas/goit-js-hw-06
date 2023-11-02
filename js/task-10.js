const controls = document.querySelector("#controls");
console.log(controls);
const input = document.querySelectorAll("input");
console.log(input);
const createBtn = document.querySelectorAll("button");
console.log(createBtn);
const boxes = document.querySelector("#boxes");
console.log(boxes);

const htmlDiv = `<div class = "div-item" style = "width: 30px; height: 30px; background-color: red"></div>`;
boxes.innerHTML += htmlDiv;

function createBoxes(amount) {
  return;
}

function destroyBoxes() {}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
