// Grab DOM elements
const todoInput = document.querySelector('.todo-input');
const todo_button = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners

todo_button.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);

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
    newTodo.innerText = todoInput.value;
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

    //clear todo input value

    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    //delete
    if (item.classList[0] == 'trash-btn') {
        const todo = item.parentElement;
        todo.remove()
    }

    //check mark

    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}