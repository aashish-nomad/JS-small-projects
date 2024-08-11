const colorsContainer = document.querySelector('.colors-container');
const spawnButton = document.querySelector('#spawn-button');

const randomColorArr = ['', '', '', ''];

function randomNumGenerator() {
  return Math.floor(Math.random() * 255);
}

function spawnColors() {
  colorsContainer.innerHTML = '';
  const commonNum = randomNumGenerator();

  randomColorArr.forEach((_color, index) => {
    randomColorArr[index] = 'rgb(' + commonNum + ',' + randomNumGenerator() + ',' + randomNumGenerator() + ')';
  })

  randomColorArr.forEach(color => {
    const divEl = document.createElement('div');
    divEl.innerHTML = color;
    divEl.style.backgroundColor = color;
    colorsContainer.append(divEl)
  })
}

spawnColors();
spawnButton.addEventListener('click', spawnColors)
document.addEventListener('keydown', function (e) {
  if (e.code == 'Space') {
    spawnColors();
  }
})