let foodList = document.querySelector("#food");

foodList.addEventListener("click", collapseBelowList);

function collapseBelowList(e) {
  let target = e.target;
  for (const item of target.children) {
    switch (true) {
      case item.tagName === "UL" && item.style.display === "block":
        item.style.display = "none";
        break;
      default:
        item.style.display = "block";
        break;
    }
  }
}
