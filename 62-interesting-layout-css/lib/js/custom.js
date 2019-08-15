"use strict";

var magic = document.getElementById('magic'); // Technique from CSS Tricks article, Restart CSS Animation (https://css-tricks.com/restart-css-animation)

magic.addEventListener('click', function (e) {
  e.preventDefault;
  magic.classList.remove('animate');
  void magic.offsetWidth;
  magic.classList.add('animate');
}, false);