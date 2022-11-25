let drawingBlock = document.querySelector(".drawingBlock");
let message = document.querySelector("#message");
let dotDiv = document.createElement("div");
dotDiv.className = "dot";

let count = 0;
let OnMouseMove = (e) => {
  console.log(e.screenX, e.screenY);

  // message.textContent += `${(count += 1)} `;

  document.body.appendChild(dotDiv);
  dotDiv.style.top = `${e.y}px`;
  dotDiv.style.left = `${e.x}px`;
};

drawingBlock.addEventListener("mousemove", OnMouseMove);
