const timeDisplay = document.querySelector('.time-display');
const sliderFill      = document.querySelector('.fill');

let startTime = 60;
let timeLeft = startTime

const timerID = setInterval(() => {
  timeLeft--;

  timeDisplay.innerHTML = timeLeft;
  sliderFill.style.width = (timeLeft/startTime) * 100 + '%';

  if (timeLeft <= 0) {
    clearInterval(timerID);
    suprise();
    timeDisplay.innerHTML = 'FIN!';
  }
}, 1000);

function suprise() {
  const colors = [
    'rgba(255,105,97,0.5)',
    'rgba(97,168,255,0.5)',
    'rgba(247,255,97,0.5)',
    'rgba(97,255,184,0.5)',
    'rgba(255,255,255,0.5)',
  ]

  for (let i = 0; i < 500; i++) {
    setTimeout(() => {
      const circleEl = document.createElement('div')
      circleEl.classList.add('circle');
      circleEl.style.background = colors[getRandomNumber(colors.length)];
      circleEl.style.top = getRandomNumber(100) + '%';
      circleEl.style.left = getRandomNumber(100) + '%';
      timeDisplay.append(circleEl);
    }, 5 * i);
  }
}

function getRandomNumber(range) {
  return Math.floor(Math.random() * range)
}