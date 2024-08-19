const body = document.querySelector('body');

class Heart {
  constructor(fromLeft, backgroundColor, speed) {
    this.fromLeft = fromLeft;
    this.backgroundColor = backgroundColor;
    this.speed = speed;
  }

  render() {
    const divEl = document.createElement('div');
    let topPosition = 0;
    let timerId;

    divEl.classList.add('heart');
    divEl.style.backgroundColor = this.backgroundColor;
    divEl.style.left = this.fromLeft + 'px';

    body.append(divEl);

    function moveHeart() {
      topPosition += 10;
      divEl.style.top = topPosition + 'px';

      if (topPosition > window.innerHeight) {
        divEl.remove();
        clearInterval(timerId);
      }
    }
    timerId = setInterval(moveHeart, this.speed);
  }
}

function addHeart() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const randomPosition = Math.abs(Math.floor(Math.random() * window.innerWidth - 100));
  const randomSpeed = Math.floor(Math.random() * 500);

  const heart = new Heart(randomPosition, randomColor, randomSpeed);

  heart.render();
}

setInterval(addHeart, 300);