const timerDisplay = document.querySelector('#time-left');
const btnStopTimer = document.querySelector('button');

let timeCount = 10;
const timerId = setInterval(runTimer, 1000);

timerDisplay.innerHTML = timeCount;

function runTimer() {
  if ( timeCount <= 0) {
    clearInterval(timerId);
  }
  timerDisplay.innerHTML = timeCount--;
}

btnStopTimer.addEventListener('click', () => clearInterval(timerId))
