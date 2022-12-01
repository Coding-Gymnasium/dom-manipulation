let foodList = document.querySelector("#food");

foodList.addEventListener("click", collapseBelowList);

function collapseBelowList(e) {
  let target = e.target;
  for (const item of target.children) {
    item.classList.toggle("display");
  }
}
