// Grab DOM elements
const todo_items = document.querySelector('.todo-input');
const todo_button = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

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
    todoDiv.classList.add('todo');

    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append to list

    todoList.appendChild(todoDiv);
}