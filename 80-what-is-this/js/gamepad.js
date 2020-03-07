let gamepadConnected = 'ongamepadconnected' in window;
let controllers = {};
let gamepadLand;
let buttonsCache = [];
let buttonsStatus = [];
// Mapping is subject to change
// Turn on debugger function to check
const leftJoyConMapping = {
  0: 'Left',
  1: 'Down',
  2: 'Up',
  3: 'Right',
  4: 'LSL',
  5: 'LSR',
  8: 'Minus',
  10: 'LStick',
  13: 'Capture',
  14: 'L',
  15: 'ZL'
}

if (!gamepadConnected) {
  setInterval(pollGamepads, 500);
}

const pollGamepads = () => {
  const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

  for (let i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      if (gamepads[i].index in controllers) {
        controllers[gamepads[i].index] = gamepads[i];
      } else {
        addGamepad(gamepads[i]);
      }
    }
  }
}

const addGamepad = gamepad => {
  console.log(gamepad);
  window.location.hash = '#start';
  controllers[gamepad.index] = gamepad;
  const d = document.createElement('aside');
  d.className = 'controllers';
  const p = document.createElement('span');
  p.innerHTML = '🕹';
  p.setAttribute('id', 'controller' + gamepad.index);
  d.appendChild(p);
  document.body.appendChild(d);
  gamepadLand = requestAnimationFrame(updateStatus);
}

const updateStatus = () => {
  if (!gamepadConnected) {
    pollGamepads();
  }

  for (let j in controllers) {
    const controller = controllers[j];
    const buttonsArray = controller.buttons;
    for (let i = 0; i < buttonsArray.length; i++) {
      if (buttonPressed(buttonsArray[i])) {
        mappingDebugger(i);
        const isCover = window.location.hash === '' || window.location.hash === '#start';
        const isFirstSlide = window.location.hash === '#slide1'
        const isLastSlide = window.location.hash === '#slide' + (slideCount - 1)

        if (isCover) {
          window.location.hash = '#slide1'
        } else {
          const activeSlide = document.querySelector('[id^="slide"]:target')
          const slideNum = parseInt(activeSlide.getAttribute('id').substring(5))
          switch (leftJoyConMapping[i]) {
            case 'Left':
              if(!isFirstSlide) {
                window.location.hash = 'slide' + (slideNum - 1)
              }
              break;
            case 'Right':
              if(activeSlide && !isLastSlide) {
                console.log(slideNum)
                window.location.hash = 'slide' + (slideNum + 1)
              }
              break;
            case 'Up':
              
              break;
            case 'Down':
  
              break;
            case 'Minus':
              if(isLastSlide) {
                window.location.hash = '#slide1'
              }
              break;
            case 'L':
              launchFullscreen(document.documentElement);
              break;
            case 'ZL':
              exitFullscreen();
              break;
            default:
              console.log('The mapping is probably off. Turn on debugger to check. ¯\\\_(ツ)_/¯');
          }
        }
      }
    }
  }
  gamepadLand = setTimeout(() => requestAnimationFrame(updateStatus), 200);
}

const buttonPressed = key => {
  if (typeof key == 'object') {
    return key.pressed;
  }
  return false;
};

const mappingDebugger = index => {
  console.log('Did you press ' + leftJoyConMapping[index] + '? If you see "Undefined", the mapping is off. Index position of pressed button is ' + index)
}

const connectHandler = event => {
  addGamepad(event.gamepad);
}

const disconnectHandler = event => {
  removeGamepad(event.gamepad);
}

const removeGamepad = gamepad => {
  const d = document.getElementById('controller' + gamepad.index);
  document.body.removeChild(d);
  delete controllers[gamepad.index];
  cancelAnimationFrame(gamepadLand);
}

const exitFullscreen = () => {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

window.addEventListener("gamepadconnected", connectHandler);
window.addEventListener("gamepaddisconnected", disconnectHandler);