// add an item to the list
const addItemForm = document.querySelector(".add-bar");
const list = document.querySelector(".list");
const wholeList = document.querySelectorAll("#list-item");
const heading = document.querySelector(".heading");
const searchBar = document.querySelector(".item-search");

// ---- Add Item To List
addItemForm.addEventListener("submit", handleAddItem);

function handleAddItem(e) {
  e.preventDefault();

  // get data
  const formData = new FormData(addItemForm);

  // Add item to list
  let inputFieldValue = formData.get("add-bar");

  buildItemElement(inputFieldValue);

  // clear field
  document.querySelector("input[name='add-bar']").value = "";
}

function buildItemElement(data) {
  let input = parseInput(data);
  list.insertAdjacentHTML(
    "afterbegin",
    `<div id="list-item"><p>${input}</p><button type="submit">delete</button></div>`
  );
}

function parseInput(data) {
  let withoutFirst = data.slice(1).toLowerCase();
  let firstChar = data.slice(0, 1).toUpperCase();
  return firstChar + withoutFirst;
}

// ---- Remove Item

list.addEventListener("click", removeItem);

function removeItem(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
}

// ---- Hide List

heading.addEventListener("click", hideList);

function hideList(e) {
  e.target.checked
    ? list.classList.add("hideDiv")
    : list.classList.remove("hideDiv");
}

// ---- Search Items

searchBar.addEventListener("keyup", displayMatch);

function displayMatch(e) {
  e.preventDefault();

  for (const item of wholeList) {
    let parsed = item.textContent.toLowerCase();
    let inputParsed = e.target.value.toLowerCase();

    if (parsed.includes(inputParsed)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
}
