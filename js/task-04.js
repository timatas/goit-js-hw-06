let counterValue = 0;
const counter = document.querySelector("#value");
const decremBtn = document.querySelector(`button[data-action="decrement"]`);
const incremBtn = document.querySelector(`button[data-action="increment"]`);

decremBtn.addEventListener("click", () => {
  counterValue -= 1;
  counter.innerHTML = counterValue;
});
incremBtn.addEventListener("click", () => {
  counterValue += 1;
  counter.innerHTML = counterValue;
});
