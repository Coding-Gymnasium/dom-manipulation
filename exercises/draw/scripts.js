let drawingBlock = document.querySelector(".drawingBlock");
let message = document.querySelector("#message");
let dotDiv = document.createElement("div");
dotDiv.className = "dot";

let count = 0;
let OnMouseMove = () => {
  message.textContent += `${(count += 1)} `;

  document.body.appendChild(dotDiv);
};

drawingBlock.addEventListener("mousemove", OnMouseMove);
