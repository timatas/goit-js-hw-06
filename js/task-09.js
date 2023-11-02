const colorBody = document.querySelector(".widget");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

const changeColor = (evt) => {
  const color = getRandomHexColor();
  colorBody.style.backgroundColor = color;
  span.textContent = color;
};
button.addEventListener("click", changeColor);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
