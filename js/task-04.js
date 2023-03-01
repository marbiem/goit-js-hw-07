function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");

const boxes = document.querySelector("#boxes");

const createBoxes = () => {
  for (let i = 0; i < input.value; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
