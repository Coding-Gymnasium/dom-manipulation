let btn = document.querySelector("#button");

btn.addEventListener("click", onButtonClick);

function onButtonClick() {
  let messageDiv = document.getElementById("message");
  let name = document.getElementById("name").value;
  let animal = document.getElementById("animal").value;

  messageDiv.textContent = `Hi ${name}, I would love to have your ${animal}`
}
