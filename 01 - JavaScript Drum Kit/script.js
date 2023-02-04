let keys = document.querySelectorAll('.key');

let playSoundByKey = (e) => {
  let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  let key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if(!audio) return;
  
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add('playing');
}

let playSoundByBtn = (e) => {
  console.log(e)
  let audio = document.querySelector(`audio[data-key='${e}']`);
  console.log(audio)
  let btnKey = document.querySelector(`.key[data-key='${e}']`)
  if(!audio) return;
  
  audio.currentTime = 0; // rewind to the start
  audio.play();
  btnKey.classList.add('playing');
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing')
}

window.addEventListener('keydown', playSoundByKey)
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', () => {
  playSoundByBtn(key.dataset.key)
}))