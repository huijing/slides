const slideCount = document.querySelectorAll('section').length

const controls = event => {
  const isCover = window.location.hash === '' || window.location.hash === '#start'
  if (isCover) {
    start(event)
  } else {
    navigate(event)
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
    const activeList = document.querySelector(winHash + ' .revealable')
    if (activeList) {
      const listArray = [...document.querySelectorAll(winHash + ' .revealable .fragment')]
      if (listArray[0]) {
        listArray[0].classList.remove('fragment')
      }
    }
  }

  if (activeSlide && event.code === 'Comma') {
    const winHash = window.location.hash
    const activeList = document.querySelector(winHash + ' .revealable')
    if (activeList) { 
      const listArray = [...document.querySelectorAll(winHash + ' .revealable li')]
      const hideList = listArray.forEach(list => {
        list.classList.add('fragment')
      })
      return hideList
    }
  }
}

const launchFullscreen = element => {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  }
}

const toggleFullScreen = event => {
  if (event.code === 'KeyF') {
    launchFullscreen(document.documentElement)
  }
}

document.body.addEventListener('keydown', controls, false)
document.addEventListener('keydown', toggleFullScreen, false)


const root = document.documentElement
const colourInput = document.getElementById('colour')
const hexCode = document.getElementById('hexCode')
const hexDigits = document.querySelectorAll('[data-digit]')
const hexValues = document.querySelectorAll('[data-value]')

colourInput.addEventListener('input', () => { 
  setRgb(colourInput.value)
  let hexChars = colourInput.value.substring(1).split('')
  hexCode.innerHTML = ''
  for (var i = 0; i < hexValues.length; i++) {
    hexValues[i].classList.remove('active')
  }
  hexChars.forEach(printHex)
  hexChars.forEach(getCharacter)
  hexCode.insertAdjacentHTML('afterbegin', '<span>#</span>')
}, false)

function setRgb(hex) {
  const tempHex = hex.replace('#', '')
  const r = parseInt(tempHex.substring(0, 2), 16)
  const g = parseInt(tempHex.substring(2, 4), 16)
  const b = parseInt(tempHex.substring(4, 6), 16)
  
  root.style.setProperty('--r', r)
  root.style.setProperty('--g', g)
  root.style.setProperty('--b', b)
}

function printHex(item, index, array) {
  hexCode.innerHTML += '<span>' + item + '</span>'
}

function getCharacter(item, index, array) {
  let set = hexDigits[index]
  let value = set.querySelector('[data-value="' + item + '"]')
  value.classList.add('active')
}
