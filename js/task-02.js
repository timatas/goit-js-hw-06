const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");
const markup = ingredients.map((ingrelient) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = ingrelient;
  return liElement;
});
listIngredients.append(...markup);
