let container = document.querySelector(".container");
let selectedElement = null;

container.addEventListener("click", changeColor);

function changeColor(e) {
  let target = e.target;
  highlight(target);
}

function highlight(node) {
  if (node.classList[0] === "container") return;

  if (selectedElement != null) {
    selectedElement.classList.remove("boxClicked");
  }

  selectedElement = node;
  selectedElement.classList.add("boxClicked");
}
