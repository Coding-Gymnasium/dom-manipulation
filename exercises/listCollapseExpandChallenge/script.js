let foodList = document.querySelector("#food");

foodList.addEventListener("click", collapseBelowList);

function collapseBelowList(e) {
  let target = e.target;
  console.log(target.children);
  for (const item of target.children) {
    switch (true) {
      case item.tagName === "UL":
        item.style.display = "none";
        break;

      default:
        continue;
    }
  }
}
