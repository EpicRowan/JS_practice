// Grab DOM elements
const todo_items = document.querySelector('.todo-items');
const todo_button = document.querySelector('.todo-button');

// Event Listeners

todo_button.addEventListener('click', addToDo);

// Functions 

function addToDo(event) {
    //prevent form from submitting
    event.preventDefault();

    /*Goal to create
    <div class="todo-container">
    <ul class="todo-list">
        <div class="todo">
            <li></li>
        </div>
    </ul>
    </div> */

    const todoDiv = document.createElement('div');
    // create with a class of "todo"
    todoDiv.classList.add('todo')

}