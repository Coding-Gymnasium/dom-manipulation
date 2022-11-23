let drawingBlock = document.querySelector(".drawingBlock");
let message = document.querySelector("#message");

let count = 0;
let displayText = () => {
  message.textContent += `${(count += 1)} `;
};

drawingBlock.addEventListener("mousemove", displayText);
