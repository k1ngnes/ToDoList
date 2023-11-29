const field = document.querySelector(".field");
const addButton = document.querySelector(".add");
const listDiv = document.querySelector(".list");

addButton.addEventListener("click", () => addToDocument(field));

function createTask(value) {
  const task = document.createElement("div");
  task.setAttribute("class", "task");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("class", "checkboxTask");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", completeTask)
  task.appendChild(checkbox);

  const taskText = document.createElement("p");
  taskText.textContent = value;
  taskText.setAttribute("class", "newTask");
  task.appendChild(taskText);

  return task;
}

function addTask(field) {
  const value = field.value;
 
  if (value) {
    const newTask = createTask(value);
    field.value = "";
    return newTask;
  }

  return null;
}

function addToDocument(field) {
  const newTask = addTask(field);

  if (newTask) {
    listDiv.appendChild(newTask);
  }

}

function completeTask(event) {
  const target = event.target;
  const taskDiv = target.parentElement;
  const taskText = taskDiv.querySelector("p");

  if (target.checked) {
    taskText.classList.add("completedTask");
  }
  else {
    taskText.classList.remove("completedTask");
  }
}

