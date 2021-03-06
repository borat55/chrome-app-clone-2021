const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintingToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.setAttribute("class", "list-row")
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.setAttribute("class", "deleteBtn")
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintingToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit",handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintingToDo);
}

function coolFilter(){

}