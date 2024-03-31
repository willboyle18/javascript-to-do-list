function addNewItem(){
    // Create a new list item element
    var newItem = document.createElement("li");

    // Add text to the new list item
    newItem.textContent = "New List Item";

    // Find the list by its ID
    var list = document.getElementById("dynamicList");

    // Append the new list item to the list
    list.appendChild(newItem);
}

addNewItem();
console.log("Function Called");