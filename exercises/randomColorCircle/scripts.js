let circle = document.querySelector(".circle");

circle.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  circle.style.backgroundColor = `#${randomColor}`;
});

// --- Dynamically add message after circle
let message = document.createElement("h3");
let content = "This is pure DOM manipulation";
message.textContent = content;
circle.after(message);
