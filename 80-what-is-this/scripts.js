"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var slideCount = document.querySelectorAll('section').length;

var controls = function controls(event) {
  var isCover = window.location.hash === '' || window.location.hash === '#start';

  if (isCover) {
    start(event);
  } else {
    navigate(event);
  }
};

var start = function start(event) {
  if (event.code === 'Space' || event.code === 'ArrowRight' || event.code === 'Period') {
    window.location.hash = '#slide1';
  }
};

var navigate = function navigate(event) {
  var isFirstSlide = window.location.hash === '#slide1';
  var isLastSlide = window.location.hash === '#slide' + (slideCount - 1);
  var activeSlide = document.querySelector('[id^="slide"]:target');
  var slideNum = parseInt(activeSlide.getAttribute('id').substring(5));

  if (activeSlide && !isLastSlide && (event.code === 'Space' || event.code === 'ArrowRight' || event.code === 'PageDown')) {
    window.location.hash = 'slide' + (slideNum + 1);
  }

  if (!isFirstSlide && (event.code === 'ArrowLeft' || event.code === 'PageUp')) {
    window.location.hash = 'slide' + (slideNum - 1);
  }

  if (isLastSlide && event.code === 'KeyR') {
    window.location.hash = '#start';
  }

  if (activeSlide && event.code === 'Period') {
    var winHash = window.location.hash;
    var activeList = document.querySelector(winHash + ' .revealable');

    if (activeList) {
      var listArray = _toConsumableArray(document.querySelectorAll(winHash + ' .revealable .fragment'));

      if (listArray[0]) {
        listArray[0].classList.remove('fragment');
      }
    }
  }

  if (activeSlide && event.code === 'Comma') {
    var _winHash = window.location.hash;

    var _activeList = document.querySelector(_winHash + ' .revealable');

    if (_activeList) {
      var _listArray = _toConsumableArray(document.querySelectorAll(_winHash + ' .revealable li'));

      var hideList = _listArray.forEach(function (list) {
        list.classList.add('fragment');
      });

      return hideList;
    }
  }
};

var launchFullscreen = function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
};

var toggleFullScreen = function toggleFullScreen(event) {
  if (event.code === 'KeyF') {
    launchFullscreen(document.documentElement);
  }
};

document.body.addEventListener('keydown', controls, false);
document.addEventListener('keydown', toggleFullScreen, false);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var gamepadConnected = 'ongamepadconnected' in window;
var controllers = {};
var gamepadLand;
var buttonsCache = [];
var buttonsStatus = []; // Mapping is subject to change
// Turn on debugger function to check

var leftJoyConMapping = {
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
};

if (!gamepadConnected) {
  setInterval(pollGamepads, 500);
}

var pollGamepads = function pollGamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : [];

  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      if (gamepads[i].index in controllers) {
        controllers[gamepads[i].index] = gamepads[i];
      } else {
        addGamepad(gamepads[i]);
      }
    }
  }
};

var addGamepad = function addGamepad(gamepad) {
  console.log(gamepad);
  window.location.hash = '#start';
  controllers[gamepad.index] = gamepad;
  var d = document.createElement('aside');
  d.className = 'controllers';
  var p = document.createElement('span');
  p.innerHTML = '🕹';
  p.setAttribute('id', 'controller' + gamepad.index);
  d.appendChild(p);
  document.body.appendChild(d);
  gamepadLand = requestAnimationFrame(updateStatus);
};

var updateStatus = function updateStatus() {
  if (!gamepadConnected) {
    pollGamepads();
  }

  for (var j in controllers) {
    var controller = controllers[j];
    var buttonsArray = controller.buttons;

    for (var i = 0; i < buttonsArray.length; i++) {
      if (buttonPressed(buttonsArray[i])) {
        mappingDebugger(i);
        var isCover = window.location.hash === '' || window.location.hash === '#start';
        var isFirstSlide = window.location.hash === '#slide1';
        var isLastSlide = window.location.hash === '#slide' + (slideCount - 1);

        if (isCover) {
          window.location.hash = '#slide1';
        } else {
          var activeSlide = document.querySelector('[id^="slide"]:target');
          var slideNum = parseInt(activeSlide.getAttribute('id').substring(5));

          switch (leftJoyConMapping[i]) {
            case 'Left':
              if (!isFirstSlide) {
                window.location.hash = 'slide' + (slideNum - 1);
              }

              break;

            case 'Right':
              if (activeSlide && !isLastSlide) {
                console.log(slideNum);
                window.location.hash = 'slide' + (slideNum + 1);
              }

              break;

            case 'Up':
              break;

            case 'Down':
              break;

            case 'Minus':
              if (isLastSlide) {
                window.location.hash = '#slide1';
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

  gamepadLand = setTimeout(function () {
    return requestAnimationFrame(updateStatus);
  }, 200);
};

var buttonPressed = function buttonPressed(key) {
  if (_typeof(key) == 'object') {
    return key.pressed;
  }

  return false;
};

var mappingDebugger = function mappingDebugger(index) {
  console.log('Did you press ' + leftJoyConMapping[index] + '? If you see "Undefined", the mapping is off. Index position of pressed button is ' + index);
};

var connectHandler = function connectHandler(event) {
  addGamepad(event.gamepad);
};

var disconnectHandler = function disconnectHandler(event) {
  removeGamepad(event.gamepad);
};

var removeGamepad = function removeGamepad(gamepad) {
  var d = document.getElementById('controller' + gamepad.index);
  document.body.removeChild(d);
  delete controllers[gamepad.index];
  cancelAnimationFrame(gamepadLand);
};

var exitFullscreen = function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};

window.addEventListener("gamepadconnected", connectHandler);
window.addEventListener("gamepaddisconnected", disconnectHandler);