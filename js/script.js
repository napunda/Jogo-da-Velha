const addToggleRedClassEvent = (element) => {
  element.addEventListener("click", ({ target }) => togleRedClass(target));
};

const togleRedClass = (element) => element.classList.toggle("marked");

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => addToggleRedClassEvent(cell));
