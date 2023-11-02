const span = document.querySelector("#text");
const rangeInput = document.querySelector("#font-size-control");

rangeInput.addEventListener("input", () => {
  span.style.fontSize = rangeInput.value + "px";
});
