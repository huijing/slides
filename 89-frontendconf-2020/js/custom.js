const style1 = [
  'background-color: rgba(192, 192, 192, 0.4)',
  'background-image: radial-gradient(circle at 100% 150%, rgba(192, 192, 192, 0.4) 24%, white 24%, white 28%, rgba(192, 192, 192, 0.4) 28%, rgba(192, 192, 192, 0.4) 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, rgba(192, 192, 192, 0.4) 24%, white 24%, white 28%, rgba(192, 192, 192, 0.4) 28%, rgba(192, 192, 192, 0.4) 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, white 10%, rgba(192, 192, 192, 0.4) 10%, rgba(192, 192, 192, 0.4) 23%, white 23%, white 30%, rgba(192, 192, 192, 0.4) 30%, rgba(192, 192, 192, 0.4) 43%, white 43%, white 50%, rgba(192, 192, 192, 0.4) 50%, rgba(192, 192, 192, 0.4) 63%, white 63%, white 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, white 5%, rgba(192, 192, 192, 0.4) 5%, rgba(192, 192, 192, 0.4) 15%, white 15%, white 20%, rgba(192, 192, 192, 0.4) 20%, rgba(192, 192, 192, 0.4) 29%, white 29%, white 34%, rgba(192, 192, 192, 0.4) 34%, rgba(192, 192, 192, 0.4) 44%, white 44%, white 49%, transparent 49%, transparent), radial-gradient(circle at 0 50%, white 5%, rgba(192, 192, 192, 0.4) 5%, rgba(192, 192, 192, 0.4) 15%, white 15%, white 20%, rgba(192, 192, 192, 0.4) 20%, rgba(192, 192, 192, 0.4) 29%, white 29%, white 34%, rgba(192, 192, 192, 0.4) 34%, rgba(192, 192, 192, 0.4) 44%, white 44%, white 49%, transparent 49%, transparent)',
  'background-size: 100px 50px',
  'display: block',
  'height: 50vh',
  'text-align: center',
  'line-height: 1.4',
  'font-weight: bold',
  'font-size: calc(2em + 2vw)',
  'padding-top: 1.5em',
  'padding-left: 0.5em',
  'font-family: "Apple Color Emoji", "Segoe UI Emoji", "Input"'
].join(';')

const style2 = [
  'background-color: white',
  'background-image: linear-gradient(90deg, rgba(192, 192, 192, .5) 50%, transparent 50%),linear-gradient(rgba(192, 192, 192, .5) 50%, transparent 50%)',
  'background-size: 25px 25px',
  'font-size: calc(1em + 1.5vw)',
  'display: block',
  'text-align: center',
  'padding: 1em',
  'line-height:1.4'
].join(';')

const style3 = [
  'background: repeating-linear-gradient(-45deg, transparent, transparent 1em, rgba(192, 192, 192, 0.4) 0, rgba(192, 192, 192, 0.1) 2rem, transparent 0, transparent 1rem, rgba(192, 192, 192, 0.3) 0, rgba(192, 192, 192, 0.1) 4rem, transparent 0, transparent 1rem, rgba(255, 255, 255, 0.3) 0, rgba(255, 255, 255, 0.1) 2rem), repeating-linear-gradient(45deg, transparent, transparent 1rem, rgba(192, 192, 192, 0.4) 0, rgba(192, 192, 192, 0.1) 2rem, transparent 0, transparent 1rem, rgba(192, 192, 192, 0.3) 0, rgba(192, 192, 192, 0.1) 4rem, transparent 0, transparent 1rem, rgba(255, 255, 255, 0.4) 0, rgba(255, 255, 255, 0.1) 2rem), #fff',
  'background-blend-mode: multiply',
  'color: white',
  'font-size: calc(1.25em + 2vw)',
  'display: block',
  'text-align: center',
  'padding: 0.5em',
  'line-height: 1.4',
  'font-family: "Apple Color Emoji", "Segoe UI Emoji"'
].join(';')

const message1 = 'Demystify Modern CSS Layouts with DevTools '
const message2 = 'Chen Hui Jing | @hj_chen'
const message3 = '🇲🇾👾🏀🚲🖌👟💻🖊🎙🦊🧗‍♀️🎹🏳️‍🌈'

console.log('%c%s', style1, message1)
console.log('%c%s', style2, message2)
console.log('%c%s', style3, message3)
