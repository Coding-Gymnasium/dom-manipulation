let btnBlue = document.getElementById("blue");
let btnRed = document.getElementById("red");
let container = document.getElementById("container");

btnBlue.addEventListener("click", () => {
  container.classList.add("blueText");
});

btnRed.addEventListener("click", () => {
  container.classList.add("redText");
});
