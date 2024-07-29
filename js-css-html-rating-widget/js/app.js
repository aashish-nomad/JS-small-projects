const mouth = document.querySelector('#mouth')
const emotionElements = document.querySelectorAll('.rating-container > div')

function selectEmotion(e) {
  const chosenEmotion =  e.target.id;
  mouth.classList.remove('happy-mouth', 'indifferent-mouth', 'sad-mouth')

  if ('bad' == chosenEmotion) {
    mouth.classList.add('sad-mouth')
  } else if ('good' == chosenEmotion) {
    mouth.classList.add('happy-mouth')
  } else {
    mouth.classList.add('indifferent-mouth')
  }
}

emotionElements.forEach(emotionEl => {
  emotionEl.addEventListener('click', selectEmotion)
})