let output = document.getElementById("output");
let nameText = document.querySelector('input[type="text"]');

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  output.textContent = `A submit event has been fired at ${e.timeStamp}`;
});

nameText.addEventListener("input", () => {
  output.textContent = `The value entered is ${nameText.value}`;
});

nameText.addEventListener("focus", (e) => {
  e.target.style.background = "black";
  e.target.style.color = "yellowgreen";
});

nameText.addEventListener("copy", () => {
  // alert("you have copied text");
});
