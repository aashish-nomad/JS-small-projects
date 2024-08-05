const bob = document.querySelector('.bob');
const eyeContainer = document.querySelector('.eye-container');
let left = 50;

function moveRight() {
  left += 50;
  bob.style.left = left + 'px';
  eyeContainer.style.transform = 'rotate(0deg)'
  eyeContainer.style.left = '60px';
}

function moveLeft() {
  left -= 50;
  bob.style.left = left + 'px';
  eyeContainer.style.transform = 'rotate(180deg)';
  eyeContainer.style.left = '-60px';
}

function moveBob(e) {
  if (e.key  == 'ArrowLeft') {
    moveLeft();
  }

  if (e.key == 'ArrowRight') {
    moveRight();
  }
}

document.addEventListener('keydown', moveBob)