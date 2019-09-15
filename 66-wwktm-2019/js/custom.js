const style1 = [
  'background-color: rgba(255, 125, 74, 0.5)',
  'background-image: repeating-linear-gradient(120deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(60deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) 1px, transparent 1px, transparent 60px), linear-gradient(60deg, rgba(69, 190, 244, 0.5) 25%, transparent 25%, transparent 75%, rgba(69, 190, 244, 0.5) 75%, rgba(69, 190, 244, 0.5)), linear-gradient(120deg, rgba(69, 190, 244, 0.5) 25%, transparent 25%, transparent 75%, rgba(69, 190, 244, 0.5) 75%, rgba(69, 190, 244, 0.5))',
  'background-size: 70px 120px',
  'display: block',
  'height: 45vh',
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
  'background-image: radial-gradient(rgba(208, 238, 252, 1.00) 4px, transparent 5px), repeating-radial-gradient(rgba(208, 238, 252, 1.00) 0, rgba(208, 238, 252, 1.00) 2px, transparent 3px, transparent 10px, rgba(208, 238, 252, 1.00) 11px, rgba(208, 238, 252, 1.00) 12px, transparent 13px, transparent 25px)',
  'background-size: 15px 15px, 45px 45px',
  'background-position: 30px',
  'color: black',
  'font-size: calc(1em + 1.5vw)',
  'display: block',
  'text-align: center',
  'padding: 1em',
  'line-height:1.4'
].join(';')

const style3 = [
  'background-color: rgba(255, 125, 74, 0.3)',
  'background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 50%, transparent 50%), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 50%, transparent 50%), linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.4) 50%), linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.5) 50%)',
  'background-size: 13px, 29px, 37px, 53px',
  'color: black',
  'font-size: calc(1.25em + 2vw)',
  'display: block',
  'text-align: center',
  'padding: 0.5em',
  'line-height: 1.4',
  'font-family: "Apple Color Emoji", "Segoe UI Emoji"'
].join(';')

const message1 = 'Using DevTools to understand modern CSS layouts ❤️'
const message2 = 'Chen Hui Jing, Developer advocate @ Nexmo'
const message3 = '@hj_chen'
const message4 = '🇲🇾👾🏀🚲🖌👟💻🖊🎙🦊🥑🧗‍♀️🏳️‍🌈'

console.log('%c%s', style1, message1)
console.log('%c%s', style2, message2)
console.log('%c%s', style2, message3)
console.log('%c%s', style3, message4)