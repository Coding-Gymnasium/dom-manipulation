let container = document.querySelector(".container");

container.addEventListener("click", closeQuoteBox);

function closeQuoteBox(e) {
  e.target.parentElement.classList.add('remove');
}
