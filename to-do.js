

function addNewItem(){
    // Get references to the input field and the submit button
    // This code is only executed once on start-up and it sets up the asynchronous event listeners
    console.log("Function Call");
    const inputField = document.getElementById('userInput');
    const addButton = document.getElementById('addButton');

    // Asynchronous event listener for adding a task to the list
    addButton.addEventListener('click', function(){
        console.log("Adding task to list");
        if(inputField.value != ''){
            const task = inputField.value; // Extracts the text from the input field
            var newItem = document.createElement("li"); // Creates a new list element to insert into the list
            newItem.textContent = task; // Uses the extracted text for the task

            var completeButton = document.createElement("button"); // Create the complete task button
            completeButton.textContent = "Complete Task"; // Add text to the complete task button
            completeButton.style.marginLeft = "10px"; // Directly adds styling with DOM manipulation but CSS is recommended
            newItem.appendChild(completeButton); // Adds the complete button element to the new task

            var list = document.getElementById("dynamicList");
            list.appendChild(newItem); // Adds the task to the list
            console.log("Task added to list")

            // Asynchronous event listener for removing a task from the list
            completeButton.addEventListener('click', function() {
                newItem.remove(); // Removes 
                console.log("Task complete");
            });
        }
        else{
            alert('Please enter a task');
            console.log('Task failed to add');
        }
        
        inputField.value = '';
        console.log("Input field cleared");
    });

    

    /*
    // Create a new list item element
    var newItem = document.createElement("li");

    // Add text to the new list item
    newItem.textContent = "New List Item";

    // Find the list by its ID
    var list = document.getElementById("dynamicList");

    // Append the new list item to the list
    list.appendChild(newItem);
    */
}


window.onload = addNewItem;