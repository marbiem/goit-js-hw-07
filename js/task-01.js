const categories = document.querySelector("#categories");
const categoriesItems = categories.querySelectorAll("li.item");

console.log("Number of categories:", categoriesItems.length);

categoriesItems.forEach((categoryItem) => {
  const title = categoryItem.querySelector("h2");
  const elements = categoryItem.querySelectorAll("li");
  console.log("Category:", title.textContent);
  console.log("Elements:", elements.length);
});
