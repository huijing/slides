const style1 = [
  'background: radial-gradient(circle at right, rgba(255, 255, 255, 0) 2rem, rgba(242, 242, 176, 0.75) 2rem, rgba(242, 242, 176, 0.75) 3rem, rgba(255, 255, 255, 0) 3rem) 0 0, radial-gradient(circle at left, rgba(255, 255, 255, 0) 2rem, rgba(242, 242, 176, 0.75) 2rem, rgba(242, 242, 176, 0.75) 3rem, rgba(255, 255, 255, 0) 3rem) 0 5rem, radial-gradient(circle at right, rgba(255, 255, 255, 0) 2rem, rgba(186, 229, 213, 0.75) 2rem, rgba(186, 229, 213, 0.75) 3rem, rgba(255, 255, 255, 0) 3rem) 2.6rem 0, radial-gradient(circle at left, rgba(255, 255, 255, 0) 2rem, rgba(186, 229, 213, 0.75) 2rem, rgba(186, 229, 213, 0.75) 3rem, rgba(255, 255, 255, 0) 3rem) 2.6rem 5rem, radial-gradient(circle at right, rgba(255, 255, 255, 0) 2rem, rgba(215, 172, 212, 0.75) 2rem, rgba(215, 172, 212, 0.75) 3rem, rgba(255, 255, 255, 0) 3rem) 5.2rem 0, radial-gradient(circle at left, rgba(255, 255, 255, 0) 2rem, rgba(215, 172, 212, 0.75) 2rem, rgba(215, 172, 212, 0.75) 3rem, rgba(255, 255, 255, 0) 3rem) 5.2rem 5rem, radial-gradient(circle at right, rgba(255, 255, 255, 0) 2rem, rgba(238, 194, 194, 0.75) 2rem, rgba(238, 194, 194, 0.75) 3rem, rgba(255, 255, 255, 0) 3rem) 7.8rem 0, radial-gradient(circle at left, rgba(255, 255, 255, 0) 2rem, rgba(238, 194, 194, 0.75) 2rem, rgba(238, 194, 194, 0.75) 3rem, rgba(255, 255, 255, 0) 3rem) 7.8rem 5rem',
  'background-size: 10rem 10rem',
  'background-color: rgba(154, 155, 148, 0.75)',
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
  'background-color: hsla(107, 100%, 95%, 1)',
  'background-image: repeating-linear-gradient(45deg, transparent 5px, hsla(132, 62%, 30%, 0.2) 5px, hsla(132, 62%, 30%, 0.2) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.2) 35px, hsla(5, 53%, 63%, 0.2) 40px, hsla(132, 62%, 30%, 0.2) 40px, hsla(132, 62%, 30%, 0.2) 50px, hsla(132, 62%, 30%, 0) 50px, hsla(132, 62%, 30%, 0) 60px, hsla(5, 53%, 63%, 0.2) 60px, hsla(5, 53%, 63%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.2) 90px, hsla(5, 53%, 63%, 0.2) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(132, 62%, 30%, 0.2) 120px, hsla(132, 62%, 30%, 0.2) 140px), repeating-linear-gradient(135deg, transparent 5px, hsla(132, 62%, 30%, 0.2) 5px, hsla(132, 62%, 30%, 0.2) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.2) 35px, hsla(5, 53%, 63%, 0.2) 40px, hsla(132, 62%, 30%, 0.2) 40px, hsla(132, 62%, 30%, 0.2) 50px, hsla(132, 62%, 30%, 0) 50px, hsla(132, 62%, 30%, 0) 60px, hsla(5, 53%, 63%, 0.2) 60px, hsla(5, 53%, 63%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.2) 90px, hsla(5, 53%, 63%, 0.2) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(132, 62%, 30%, 0.2) 140px, hsla(132, 62%, 30%, 0.2) 160px)',
  'color: black',
  'font-size: calc(1em + 1.5vw)',
  'display: block',
  'text-align: center',
  'padding: 1em',
  'line-height:1.4'
].join(';')

const style3 = [
  'background-color: hsla(107, 100%, 95%, 1)',
  'background-image: repeating-linear-gradient(45deg, transparent 5px, hsla(132, 62%, 11%, 0.2) 5px, hsla(132, 62%, 11%, 0.2) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.2) 35px, hsla(5, 53%, 63%, 0.2) 40px, hsla(132, 62%, 11%, 0.2) 40px, hsla(132, 62%, 11%, 0.2) 50px, hsla(132, 62%, 11%, 0) 50px, hsla(132, 62%, 11%, 0) 60px, hsla(5, 53%, 63%, 0.2) 60px, hsla(5, 53%, 63%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.2) 90px, hsla(5, 53%, 63%, 0.2) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(132, 62%, 11%, 0.2) 120px, hsla(132, 62%, 11%, 0.2) 140px), repeating-linear-gradient(135deg, transparent 5px, hsla(132, 62%, 11%, 0.2) 5px, hsla(132, 62%, 11%, 0.2) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.2) 35px, hsla(5, 53%, 63%, 0.2) 40px, hsla(132, 62%, 11%, 0.2) 40px, hsla(132, 62%, 11%, 0.2) 50px, hsla(132, 62%, 11%, 0) 50px, hsla(132, 62%, 11%, 0) 60px, hsla(5, 53%, 63%, 0.2) 60px, hsla(5, 53%, 63%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.2) 90px, hsla(5, 53%, 63%, 0.2) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(132, 62%, 11%, 0.2) 140px, hsla(132, 62%, 11%, 0.2) 160px)',
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

const message1 = 'Using DevTools to understand modern CSS layouts ❤️'
const message2 = 'Chen Hui Jing, Mozilla TechSpeaker'
const message3 = '@hj_chen'
const message4 = '🇲🇾👾🏀🚲🖌👟💻🖊🎙🦊🥑🧗‍♀️🏳️‍🌈'
const message5 = 'Look ma, vertical writing'

console.log('%c%s', style1, message1)
console.log('%c%s', style2, message3)
console.log('%c%s', style2, message2)
console.log('%c%s', style3, message4)
console.log('%c%s', style4, message5)