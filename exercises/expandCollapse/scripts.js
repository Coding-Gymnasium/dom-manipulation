let btn = document.getElementById("show-more");
let content = document.getElementById("content");

btn.addEventListener("click", () => {
  if (btn.textContent === "Expand") {
    content.style = "max-height: fit-content";
    btn.textContent = "Collapse";
  } else {
    content.style = "max-height: 30px";
    btn.textContent = "Expand";
  }
});
