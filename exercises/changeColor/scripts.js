let btnBlue = document.getElementById("blue");
let btnRed = document.getElementById("red");
let container = document.getElementsByTagName("container");

btnBlue.addEventListener("click", () => {
  Array.from(container).forEach((element) => {
    element.style = "color: blue;";
  });
});

btnRed.addEventListener("click", () => {
  for (const element of container) {
    element.style = "color: red;";
  }
});
