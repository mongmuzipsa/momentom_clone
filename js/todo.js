const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  const listItem = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(listItem.id));
  listItem.remove();
  saveToDos();

}

function paintToDo(newTodoObj){
  const listItem = document.createElement("li");
  listItem.id = newTodoObj.id;
  const toDoText = document.createElement("span");
  toDoText.innerText = newTodoObj.text;
  const toDoBtn = document.createElement("button");
  toDoBtn.innerText = '❌';
  toDoBtn.addEventListener("click", deleteToDo);
  listItem.appendChild(toDoBtn);
  listItem.appendChild(toDoText);
  toDoList.appendChild(listItem);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  const newTodoObj = {
    text:newTodo,
    id : Date.now()
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  
}