const slideCount = document.querySelectorAll('section').length;

const controls = event => {
  const isCover = window.location.hash === '' || window.location.hash === '#start';
  if (isCover) {
    start(event);
  } else {
    navigate(event);
  }
}

const start = event => {
  if ((event.code === 'Space') || (event.code === 'ArrowRight') || (event.code === 'Period')) {
    window.location.hash = '#slide1'
  }
}

const navigate = event => {
  const isFirstSlide = window.location.hash === '#slide1'
  const isLastSlide = window.location.hash === '#slide' + (slideCount - 1)
  const activeSlide = document.querySelector('[id^="slide"]:target')
  const slideNum = parseInt(activeSlide.getAttribute('id').substring(5))

  if (activeSlide && !isLastSlide && ((event.code === 'Space') || (event.code === 'ArrowRight') || (event.code === 'PageDown'))) {
    window.location.hash = 'slide' + (slideNum + 1)
  }
  
  if (!isFirstSlide && ((event.code === 'ArrowLeft') || (event.code === 'PageUp'))) {
    window.location.hash = 'slide' + (slideNum - 1)
  }
  
  if (isLastSlide && event.code === 'KeyR') {
    window.location.hash = '#start'
  }

  if (activeSlide && event.code === 'Period') {
    const winHash = window.location.hash
    const activeList = document.querySelector(winHash + ' .revealable');
    if (activeList) {
      const listArray = [...document.querySelectorAll(winHash + ' .revealable .fragment')];
      if (listArray[0]) {
        listArray[0].classList.remove('fragment');
      }
    }
  }

  if (activeSlide && event.code === 'Comma') {
    const winHash = window.location.hash
    const activeList = document.querySelector(winHash + ' .revealable');
    if (activeList) { 
      const listArray = [...document.querySelectorAll(winHash + ' .revealable li')];
      const hideList = listArray.forEach(list => {
        list.classList.add('fragment')
      })
      return hideList;
    }
  }
}

const launchFullscreen = element => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

const toggleFullScreen = event => {
  if (event.code === 'KeyF') {
    launchFullscreen(document.documentElement);
  }
}

document.body.addEventListener('keydown', controls, false);
document.addEventListener('keydown', toggleFullScreen, false);