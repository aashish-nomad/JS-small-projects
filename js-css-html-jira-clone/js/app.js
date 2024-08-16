const taskLists = document.querySelectorAll('.task-list');
const backlogTasks = document.querySelector('#backlog .task-list');
const titleInput = document.querySelector('#title');
const descInput = document.querySelector('#description');
const from = document.querySelector('form.input-container');
const errorContainer = document.querySelector('.error-container');

let elSelected;

let tasks = [
  {
    id: 0,
    title: 'Complete page Optimization Task',
    description: 'Make sure pages have Google Page Speed score above 50.'
  },
  {
    id: 1,
    title: 'Fix Video Embeds on Make a Wish Page.',
    description: 'Videos links seems not be working please fix it.'
  },
  {
    id: 2,
    title: 'Upload new Images in Cookie Page.',
    description: 'Please optimize image before uploading it.'
  }
]

taskLists.forEach(el => {
  el.addEventListener('dragover', dragOver);
  el.addEventListener('drop', dragDrop);
})


function dragStart(e) {
  elSelected = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  let columnId = this.parentNode.id;
  elSelected.firstChild.style.backgroundColor = addColor(columnId);
  this.append(elSelected)
}

function addColor(column) {
  let color;
  switch (column) {
    case 'backlog':
      color = 'rgb(96,96,192)'
      break;

    case 'in-progress':
      color = 'rgb(83,156,174)'
      break;

    case 'ready-to-test':
      color = 'rgb(222,208,130)'
      break;

    case 'released':
      color = 'rgb(122,208,130)'
      break;

    default:
      color = 'rgb(232,232,232)'
  }

  return color;
}

function showError(message) {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.innerText = message;
  errorContainer.append(errorMessage);

  setTimeout(() => {
    errorContainer.textContent = ''
  }, 2000);
}

function createTask(taskId, title, description) {
  const taskCard = document.createElement('div');
  const taskHeader = document.createElement('div');
  const taskTitle = document.createElement('p');
  const deleteEl = document.createElement('p');
  const taskDescriptionContainer = document.createElement('div')
  const taskDescription = document.createElement('p');

  taskCard.classList.add('task-container');
  taskCard.setAttribute('draggable', true);
  taskCard.setAttribute('task-id', taskId);

  taskCard.addEventListener('dragstart', dragStart);

  taskHeader.classList.add('task-header');

  taskTitle.innerText = title;
  deleteEl.innerText = '⊝';
  deleteEl.setAttribute('role', 'button');
  deleteEl.addEventListener('click', deleteTask);

  taskDescriptionContainer.classList.add('task-description-container');

  taskDescription.innerText = description;

  taskHeader.append(taskTitle, deleteEl);
  taskDescriptionContainer.append(taskDescription);
  taskCard.append(taskHeader, taskDescriptionContainer);
  backlogTasks.append(taskCard)
}

function addTasks() {
  tasks.forEach(task => createTask(task.id, task.title, task.description));
}

function addTask(e) {
  e.preventDefault();
  const filteredTitles = tasks.filter(task => task.title == titleInput.value);

  if (filteredTitles.length == 0) {
    tasks.push({
      id: tasks.length,
      title: titleInput.value,
      description: descInput.value
    });
    createTask(tasks.length, titleInput.value, descInput.value);
    titleInput.value = '';
    description.value = '';
  } else {
    showError('Please enter a unique title for each task!')
  }
}

function deleteTask() {
  let elementToDelete = this.parentNode.parentNode;

  const filteredTasks = tasks.filter(task => task.title == this.parentNode.firstChild.innerText);

  tasks = tasks.filter(task => task != filteredTasks[0]);
  elementToDelete.remove();
}


addTasks();
from.addEventListener('submit', addTask)