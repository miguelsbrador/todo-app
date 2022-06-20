//Selectors
const nameInput = document.querySelector('.name-input');
const descriptionInput = document.querySelector('.description-input');
const assigntoInput = document.querySelector('.assignto-input');
const dateInput = document.querySelector('.date-input');
const taskInput = document.querySelector('.task-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCard);

//Functions
function addTodo(e){
    if(nameInput.value.length>0)  
  {
    e.preventDefault();
    //console.log('click me');

const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

const newName = document.createElement('li');
newName.innerText = nameInput.value;
const newDescription = document.createElement('li');
newDescription.innerText = descriptionInput.value;
const newAssignto = document.createElement('li');
newAssignto.innerText = assigntoInput.value;
const newDate = document.createElement('li');
newDate.innerText = dateInput.value;
const newTask = document.createElement('li');
newTask.innerText = taskInput.value;
newName.classList.add('todo-item');
todoDiv.appendChild(newName);
todoDiv.appendChild(newDescription);
todoDiv.appendChild(newAssignto);
todoDiv.appendChild(newDate);
todoDiv.appendChild(newTask);
const trashButton = document.createElement('button');
trashButton.innerHTML = '<button class="trash-btn">Delete</button>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
todoList.appendChild(todoDiv);  
    
nameInput.value = "";
descriptionInput.value = "";
assigntoInput.value = "";
dateInput.value = "";
taskInput.value = "";
todoButton.value = "";
todoList.value = "";
}
  }
   
  function deleteCard(e){
    //console.log(e.target);
    const item = e.target;
  
    if(item.classList[0] === "trash-btn"){
      const todo = item.parentElement.parentElement;
      todo.remove();
    }
  }