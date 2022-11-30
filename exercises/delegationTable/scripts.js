let container = document.querySelector(".container");
console.log(container.childNodes);

container.addEventListener("click", changeColor);

function changeColor(e) {
  let box = document.querySelector(`.${e.path[0].classList[2]}`);

  box.classList.add('boxClicked')

  for (let i = 0; i < container.childNodes.length; i++) {
    if ( container.childNodes[i].classList === undefined ) continue;
    
    let list = container.childNodes[i].classList;
    console.log(list[2], box.classList[2])
  }

}
