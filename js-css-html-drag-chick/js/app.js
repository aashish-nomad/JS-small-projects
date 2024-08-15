const homeEl = document.querySelector('#home');
const chickEl = document.querySelector('#chick');

// Here we will be dragging chickEl, hence the drag event attached to chickEl.
chickEl.addEventListener('drag', (e) => console.log('dragging'));

// Here we will be dragging chickEl, hence the dragstart event attached to chickEl.
chickEl.addEventListener('dragstart', (e) => console.log('drag start'));

// Here we will be dragging chickEl, hence the dragend event attached to chickEl.
chickEl.addEventListener('dragend', (e) => console.log('drag end'));

// Here we will be dragging chickEl over homeEl,
// hence the dragover event attached to homeEl.
homeEl.addEventListener('dragover', (e) => {
  e.preventDefault();
  console.log('dragged over')
});

// Here we will be dragging chickEl inside the homeEl,
// hence the dragenter event attached to homeEl.
homeEl.addEventListener('dragenter', (e) => console.log('drag enter'));

// Here we will be dragging chickEl inside the homeEl and then leave the homeEl,
// hence the dragleave event attached to homeEl.
homeEl.addEventListener('dragleave', (e) => console.log('drag leave'));

// Here we will be dragging chickEl inside the homeEl and then drop it on the homeEl,
// hence the drop event attached to homeEl.
homeEl.addEventListener('drop', e => {
  homeEl.append(chickEl);
});
