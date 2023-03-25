var toDoInput = document.getElementById('to-do-input');
var addButton = document.getElementById('add-button');
var toDoList = document.getElementById('to-do-list');

// Function to add a new to-do item
function addToDo() {
    // Create a new li element
    var newToDo = document.createElement('li');

    // Create a new input element with type "checkbox"
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', completeToDo);
    newToDo.appendChild(checkBox);

    // Create a new span element with the text of the to-do item
    var toDoText = document.createElement('span');
    toDoText.innerText = toDoInput.value;
    newToDo.appendChild(toDoText);

    // Create a new button element with the text "Delete"
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', removeToDo);
    newToDo.appendChild(deleteButton);

    // Add the new to-do item to the list
    toDoList.appendChild(newToDo);

    // Clear the input field
    toDoInput.value = '';
}

// Function to complete a to-do item
function completeToDo() {
    var toDoItem = this.parentElement;
    toDoItem.classList.toggle('completed');   
}

// Function to remove a to-do item
function removeToDo() {
    var toDoItem = this.parentElement;
    toDoList.removeChild(toDoItem);
}

// Add event listener to the "Add" button
addButton.addEventListener('click', addToDo);
