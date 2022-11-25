let btn = document.getElementById("btn");
let person = document.getElementById("person");
let mustache = document.createElement("img");
mustache.id = "mustache";
mustache.src = "./mustache.png";

btn.addEventListener("click", () => {
  person.after(mustache);
});
