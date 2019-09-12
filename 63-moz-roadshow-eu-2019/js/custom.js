const style1 = [
  'background: radial-gradient(circle, rgba(48, 230, 11, 0.4) 0.75rem, rgba(255, 255, 255, 0) 0.75rem, rgba(255, 255, 255, 0) 1.5rem, rgba(255, 148, 0, 0.2) 1.5rem, rgba(255, 148, 0, 0.2) 1.8rem, rgba(255, 255, 255, 0) 1.8rem) 0 0, radial-gradient(circle, rgba(255, 148, 0, 0.4) 0.75rem, rgba(255, 255, 255, 0) 0.75rem, rgba(255, 255, 255, 0) 1.5rem, rgba(48, 230, 11, 0.2) 1.5rem, rgba(48, 230, 11, 0.2) 1.8rem, rgba(255, 255, 255, 0) 1.8rem) 3rem 3rem, radial-gradient(circle, rgba(48, 230, 11, 0.2) 0.375rem, rgba(255, 255, 255, 0) 0.375rem) 3rem 0, radial-gradient(circle, rgba(255, 148, 0, 0.2) 0.3rem, rgba(255, 255, 255, 0) 0.3rem) 0 3rem',
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
  'background-color: rgba(148, 0, 255, 0.15)',
  'background-image: radial-gradient(closest-side, transparent 98%, rgba(255, 255, 255, 0.7) 99%), radial-gradient(closest-side, transparent 98%, rgba(255, 255, 255, 0.7) 99%)',
  'background-size: 3em 3em',
  'background-position: 0 0, 1.5em 1.5em',
  'color: black',
  'font-size: calc(1em + 1.5vw)',
  'display: block',
  'text-align: center',
  'padding: 1em',
  'line-height:1.4'
].join(';')

const style3 = [
  'background: repeating-linear-gradient(-45deg, transparent, transparent 1em, rgba(255, 228, 225, 0.4) 0, rgba(255, 228, 225, 0.1) 2rem, transparent 0, transparent 1rem, rgba(255, 228, 225, 0.3) 0, rgba(255, 228, 225, 0.2) 4rem, transparent 0, transparent 1rem, rgba(255, 255, 255, 0.6) 0, rgba(255, 255, 255, 0.2) 2rem), repeating-linear-gradient(45deg, transparent, transparent 1rem, rgba(255, 228, 225, 0.4) 0, rgba(255, 228, 225, 0.1) 2rem, transparent 0, transparent 1rem, rgba(255, 228, 225, 0.3) 0, rgba(255, 228, 225, 0.2) 4rem, transparent 0, transparent 1rem, rgba(255, 255, 255, 0.4) 0, rgba(255, 255, 255, 0.1) 2rem), #fff',
  'background-blend-mode: multiply',
  'color: black',
  'font-size: calc(1.25em + 2vw)',
  'display: block',
  'text-align: center',
  'padding: 0.5em',
  'line-height: 1.4',
  'font-family: "Apple Color Emoji", "Segoe UI Emoji"'
].join(';')

const style4 = [
  'color: black',
  'font-size: calc(0.75em + 1.5vw)',
  'background: white',
  'display: block',
  'text-align: center',
  'padding: 1em',
  'line-height: 1.4',
  'writing-mode: vertical-lr'
].join(';')

const message1 = 'Understanding modern CSS layouts with Firefox DevTools ❤️'
const message2 = 'Chen Hui Jing, Mozilla TechSpeaker'
const message3 = '@hj_chen'
const message4 = '🇲🇾👾🏀🚲🖌👟💻🖊🎙🦊🥑🧗‍♀️🏳️‍🌈'
const message5 = 'Look ma, vertical writing'

console.log('%c%s', style1, message1)
console.log('%c%s', style2, message3)
console.log('%c%s', style2, message2)
console.log('%c%s', style3, message4)
console.log('%c%s', style4, message5)