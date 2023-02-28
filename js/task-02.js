const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElement = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const element = document.createElement("li");

  element.textContent = ingredient;

  element.classList.add("item");

  ingredientsElement.append(element);
});
