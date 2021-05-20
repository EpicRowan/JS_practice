// Grab DOM elements
const todo_items = document.querySelector('.todo-items');
const todo_button = document.querySelector('.todo-button');

// Event Listeners

todo_button.addEventListener('click', addToDo);

// Functions 

function addToDo(event) {
    //prevent form from submitting
    event.preventDefault();

    console.log("I'm working");

}