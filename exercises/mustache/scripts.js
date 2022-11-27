let btn = document.getElementById("btn");
let person = document.getElementById("person");
let mustache = document.getElementById("mustache");

btn.addEventListener("click", () => {
  mustache.classList.toggle("hide");
  mustache.classList != "hide"
    ? (btn.textContent = "Remove Mustache ✂️")
    : (btn.textContent = "Add Mustache 🥸");
});

let onPersonClick = (e) => {
  let top = e.clientY;
  let left = e.clientX;
  mustache.style.top = `${top - 80}px`;
  mustache.style.left = `${left - 160}px`;
};

person.addEventListener("click", onPersonClick);
