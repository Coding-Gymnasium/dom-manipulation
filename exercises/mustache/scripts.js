let btn = document.getElementById("btn");
let person = document.getElementById("person");
let mustache = document.getElementById("mustache");

btn.addEventListener("click", () => {
  mustache.classList.toggle("hide");
  mustache.classList != "hide"
    ? (btn.textContent = "Remove Mustache ✂️")
    : (btn.textContent = "Add Mustache 🥸");
});
