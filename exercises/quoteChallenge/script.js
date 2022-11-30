let container = document.querySelector(".container");

container.addEventListener("click", closeQuoteBox);

function closeQuoteBox(e) {
  let target = e.target;
  if (target.className != "close") {
    return;
  } else {
    target.parentElement.classList.add("remove");
  }
}
