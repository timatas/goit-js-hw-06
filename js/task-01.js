const numberCategory = document.querySelector("#categories");
console.log("Number of categories: ", numberCategory.children.length);

const item = document.querySelectorAll(".item");
[...item].forEach((el) => {
  console.log("Category: ", el.firstElementChild.textContent);
  console.log("Elements: ", el.lastElementChild.childElementCount);
});
