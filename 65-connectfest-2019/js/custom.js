const style1 = [
  'background: radial-gradient(circle, rgba(255, 233, 0, 0.2) 0.75rem, rgba(255, 255, 255, 0) 0.75rem, rgba(255, 255, 255, 0) 1.5rem, rgba(9, 42, 153, 0.2) 1.5rem, rgba(9, 42, 153, 0.1) 1.8rem, rgba(255, 255, 255, 0) 1.8rem) 0 0, radial-gradient(circle, rgba(9, 42, 153, 0.2) 0.75rem, rgba(255, 255, 255, 0) 0.75rem, rgba(255, 255, 255, 0) 1.5rem, rgba(255, 233, 0, 0.1) 1.5rem, rgba(255, 233, 0, 0.1) 1.8rem, rgba(255, 255, 255, 0) 1.8rem) 3rem 3rem, radial-gradient(circle, rgba(255, 233, 0, 0.1) 0.375rem, rgba(255, 255, 255, 0) 0.375rem) 3rem 0, radial-gradient(circle, rgba(9, 42, 153, 0.1) 0.3rem, rgba(255, 255, 255, 0) 0.3rem) 0 3rem',
  'background-size: 6rem 6rem',
  'background-color: #f9f9fa',
  'background-repeat: repeat',
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
  'background-color: rgba(255, 233, 0, 0.4)',
  'background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 50%, transparent 50%), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 50%, transparent 50%), linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.4) 50%), linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.5) 50%)',
  'background-size: 13px, 29px, 37px, 53px',
  'color: black',
  'font-size: calc(1em + 1.5vw)',
  'display: block',
  'text-align: center',
  'padding: 1em',
  'line-height:1.4'
].join(';')

const style3 = [
  'background: repeating-linear-gradient(-45deg, transparent, transparent 1em, rgba(9, 42, 153, 0.2) 0, rgba(9, 42, 153, 0.05) 2rem, transparent 0, transparent 1rem, rgba(9, 42, 153, 0.15) 0, rgba(9, 42, 153, 0.1) 4rem, transparent 0, transparent 1rem, rgba(255, 255, 255, 0.3) 0, rgba(255, 255, 255, 0.1) 2rem), repeating-linear-gradient(45deg, transparent, transparent 1rem, rgba(9, 42, 153, 0.2) 0, rgba(9, 42, 153, 0.05) 2rem, transparent 0, transparent 1rem, rgba(9, 42, 153, 0.15) 0, rgba(9, 42, 153, 0.1) 4rem, transparent 0, transparent 1rem, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.05) 2rem), #fff',
  'background-blend-mode: multiply',
  'color: black',
  'font-size: calc(1.25em + 2vw)',
  'display: block',
  'text-align: center',
  'padding: 0.5em',
  'line-height: 1.4',
  'font-family: "Apple Color Emoji", "Segoe UI Emoji"'
].join(';')

const message1 = 'Using DevTools to understand modern CSS layouts ❤️'
const message2 = 'Chen Hui Jing, Mozilla TechSpeaker'
const message3 = '@hj_chen'
const message4 = '🇲🇾👾🏀🚲🖌👟💻🖊🎙🦊🥑🧗‍♀️🏳️‍🌈'

console.log('%c%s', style1, message1)
console.log('%c%s', style2, message3)
console.log('%c%s', style2, message2)
console.log('%c%s', style3, message4)