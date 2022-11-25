let drawingBlock = document.querySelector(".drawingBlock");
let message = document.querySelector("#message");

let count = 0;
let OnMouseMove = (e) => {
  // message.textContent += `${(count += 1)} `;

  let dotDiv = document.createElement("div");
  dotDiv.className = "dot";
  dotDiv.style.top = `${e.y + 5}px`;
  dotDiv.style.left = `${e.x - 5}px`;
  document.body.appendChild(dotDiv);
};

drawingBlock.addEventListener("mousemove", OnMouseMove);
