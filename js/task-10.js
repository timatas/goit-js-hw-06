const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const createBtn = document.querySelector("button");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtn);
function onCreateBtn(evt) {
  createBoxes(input.value);
}
function createBoxes(amount) {
  let style = {
    width: 30,
    height: 30,
    color: getRandomHexColor(),
  };
  let { width, height, color } = style;
  let arrayDiv = [];
  for (let i = 1; i <= amount; i++) {
    arrayDiv[
      i
    ] = `<div class = "div-item" style = "width: ${width}px; height: ${height}px; background-color: ${color}"></div>`;
    width += 10;
    height += 10;
    color = getRandomHexColor();
  }
  const markup = arrayDiv.join("");
  boxes.innerHTML = markup;
}
const destroyBtn = document.querySelector("button[data-destroy]");
destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
