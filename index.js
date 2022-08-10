const form = document.getElementById("input-form");
const groceryList = document.getElementById("grocery-list");
const input = document.getElementById("new-item");

//kuunnellaan mitä submit laittaa meille
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newItem = input.value;

  //tehdään uusia elementtejä

  if (input.value === "") {
    console.log("ei mitään");
    window.alert("ei tullut mitään, syötä jokin tuote");
    return;
  }
  const grocery_list_item = document.createElement("li");
  const grocery_list_item_delete = document.createElement("button");
  grocery_list_item_delete.textContent = "delete this item";
  grocery_list_item.innerText = newItem;
  grocery_list_item.appendChild(grocery_list_item_delete);
  groceryList.appendChild(grocery_list_item);

  input.value = "";

  //poistaminen
  grocery_list_item_delete.addEventListener("click", () => {
    groceryList.removeChild(grocery_list_item);
  });
});
