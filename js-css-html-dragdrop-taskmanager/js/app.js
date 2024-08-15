const taskContainerEl = document.querySelectorAll('.task-container');
const taskEl = document.querySelectorAll('.task');

let elSelected;

taskEl.forEach(task => task.addEventListener('dragstart', dragStart));

taskContainerEl.forEach(taskContainerEl => {
  taskContainerEl.addEventListener('drop', dragDrop)
  taskContainerEl.addEventListener('dragover', (e) => e.preventDefault())
})

function dragStart(e) {
  elSelected = e.target;
}

function dragDrop(e) {
  e.target.append(elSelected);
}
