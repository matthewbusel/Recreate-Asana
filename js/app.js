// Select elements
const addButton = document.querySelector('.add-task');
const input = document.querySelector('.input');
const list = document.querySelector('.list');

// Class names
let completed = 'completed';
let uncompleted = 'uncompleted';
let checked = 'checked';

// Initialize variables
let id = 0; // To  kep track of the id of each task for data purposes
let activeNum = 0; // To keep track of which input should be focused. Starts with the first input and increments or decrements based on adding or removing tasks.

// Add and remove tasks
function addTask() {
  list.insertAdjacentHTML('beforeend', `
    <li class="task" id=${id}>
      <i class="fas fa-check check" job="complete"></i>
      <input class="input" name="task-input" type="text" id=${id} placeholder="Write a task name" job="write"></input>
    </li>
  `)
    id++
};

// This function hasn't been completed yet
function deleteTask() {
  const task = document.getElementById('0');
  console.log(task);
};

// Event listeners
// Add tasks with Add Task button
addButton.addEventListener('click', function(event) {
  addTask();
  list.children[activeNum].children[1].focus();
  activeNum++; // Ensures that the newly added task is focused
});

// Add and remove tasks with enter and delete
document.addEventListener('keyup', function(event) {

  let activeElem = document.activeElement;

  if (activeElem.className.match('input') && event.keyCode == 13 && activeElem.value) {
    addTask();
    activeElem.parentNode.nextElementSibling.children[1].focus();
    activeNum++; // Ensures that the newly added task is focused
  }

  if (event.keyCode == 8 && activeElem.value == "") {
    let activeId = document.activeElement.id;
    let elem = document.getElementById(activeId);
    if (activeElem.parentNode.previousElementSibling) {
      activeElem.parentNode.previousElementSibling.children[1].focus()
    }
    activeElem.parentNode.parentNode.removeChild(elem);
    activeNum--; // Ensures that the task above the one deleted is focused
  };
})

// Check and uncheck tasks by targeting the tasks dynamically
list.addEventListener('click', function(event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;

  if (elementJob == 'complete') {
    element.parentNode.children[1].classList.toggle(completed)
    element.classList.toggle(checked)
  }
})
