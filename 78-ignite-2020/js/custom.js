const slideCount = document.querySelectorAll('section').length
document.body.addEventListener('keydown', controls, false)
const isMain = document.getElementById('main')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const randNum = document.getElementById('randNum')

if (isMain) {
  startBtn.addEventListener('click', runAnimation, false)
  stopBtn.addEventListener('click', showNum, false)
}

function controls(event) {
  const isCover = window.location.hash === '' || window.location.hash === '#start'
  if (isCover) {
    start(event)
  } else {
    navigate(event)
  }
}

function start(event) {
  if((event.code === 'Space')|| (event.code === 'ArrowRight')) {
    window.location.hash = '#slide1'
  }
}

function navigate(event) {
  const isFirstSlide = window.location.hash === '#slide1'
  const isLastSlide = window.location.hash === '#slide' + (slideCount - 1)
  const activeSlide = document.querySelector('[id^="slide"]:target')
  const slideNum = parseInt(activeSlide.getAttribute('id').substring(5))

  if(activeSlide && !isLastSlide && ((event.code === 'Space') || (event.code === 'ArrowRight') || (event.code === 'PageDown'))) {
    window.location.hash = 'slide' + (slideNum + 1)
  }
  
  if(!isFirstSlide && ((event.code === 'ArrowLeft') || (event.code === 'PageUp'))) {
    window.location.hash = 'slide' + (slideNum - 1)
  }
  
  if(isLastSlide && event.code === 'KeyR') {
    window.location.hash = '#start'
  }
}

function runAnimation() {
  randNum.innerHTML = `<div class="num_animation">00220453386475668369126874203127722456847118518118905049373063640445614984272665739406245400974402082908210402446817910019961841220966268695509083924551702897199045677643021929965748824550251725709767717047663154169322883122638800682673526663456697904317695347748041774350911325407657575706056671092101</div>`;
}

function showNum() {
  const number = getRandomInt(1, 18).toString()
  if (number.length < 2) {
    randNum.innerHTML = '0' + number;
  } else {
    randNum.innerHTML = number;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
