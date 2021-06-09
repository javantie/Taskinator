var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");

//var taskSumbit = document.querySelector(".text-input")


//Take handler function who's only take is to handle the adds task function.
var createTaskHandler = function(event) {
  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
}
//taskSumbit.addEventListener("clcik", createTaskHandler);
formEl.addEventListener ("submit", createTaskHandler);



