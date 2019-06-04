const style1 = [
  'background: radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0, linear-gradient(135deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%)',
  'background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%',
  'color: white',
  'display: block',
  'height: 60vh',
  'line-height: 1.4',
  'text-align: center',
  'font-weight: bold',
  'font-size: calc(1.5em + 1.5vw)',
  'padding-top: 2em'
].join(';')

const style2 = [
  'background-color: hsla(107, 100%, 95%, 1)',
  'background-image: repeating-linear-gradient(45deg, transparent 5px, hsla(132, 62%, 11%, 0.2) 5px, hsla(132, 62%, 11%, 0.2) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.2) 35px, hsla(5, 53%, 63%, 0.2) 40px, hsla(132, 62%, 11%, 0.2) 40px, hsla(132, 62%, 11%, 0.2) 50px, hsla(132, 62%, 11%, 0) 50px, hsla(132, 62%, 11%, 0) 60px, hsla(5, 53%, 63%, 0.2) 60px, hsla(5, 53%, 63%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.2) 90px, hsla(5, 53%, 63%, 0.2) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(132, 62%, 11%, 0.2) 120px, hsla(132, 62%, 11%, 0.2) 140px), repeating-linear-gradient(135deg, transparent 5px, hsla(132, 62%, 11%, 0.2) 5px, hsla(132, 62%, 11%, 0.2) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.2) 35px, hsla(5, 53%, 63%, 0.2) 40px, hsla(132, 62%, 11%, 0.2) 40px, hsla(132, 62%, 11%, 0.2) 50px, hsla(132, 62%, 11%, 0) 50px, hsla(132, 62%, 11%, 0) 60px, hsla(5, 53%, 63%, 0.2) 60px, hsla(5, 53%, 63%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.2) 90px, hsla(5, 53%, 63%, 0.2) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(132, 62%, 11%, 0.2) 140px, hsla(132, 62%, 11%, 0.2) 160px)',
  'color: black',
  'font-size: calc(1em + 1.5vw)',
  'display: block',
  'text-align:center',
  'padding: 1em',
  'line-height:1.4'
].join(';')

const style3 = [
  'background-color: hsla(107, 100%, 95%, 1)',
  'background-image: repeating-linear-gradient(45deg, transparent 5px, hsla(132, 62%, 11%, 0.2) 5px, hsla(132, 62%, 11%, 0.2) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.2) 35px, hsla(5, 53%, 63%, 0.2) 40px, hsla(132, 62%, 11%, 0.2) 40px, hsla(132, 62%, 11%, 0.2) 50px, hsla(132, 62%, 11%, 0) 50px, hsla(132, 62%, 11%, 0) 60px, hsla(5, 53%, 63%, 0.2) 60px, hsla(5, 53%, 63%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.2) 90px, hsla(5, 53%, 63%, 0.2) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(132, 62%, 11%, 0.2) 120px, hsla(132, 62%, 11%, 0.2) 140px), repeating-linear-gradient(135deg, transparent 5px, hsla(132, 62%, 11%, 0.2) 5px, hsla(132, 62%, 11%, 0.2) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.2) 35px, hsla(5, 53%, 63%, 0.2) 40px, hsla(132, 62%, 11%, 0.2) 40px, hsla(132, 62%, 11%, 0.2) 50px, hsla(132, 62%, 11%, 0) 50px, hsla(132, 62%, 11%, 0) 60px, hsla(5, 53%, 63%, 0.2) 60px, hsla(5, 53%, 63%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 70px, hsla(35, 91%, 65%, 0.2) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.2) 90px, hsla(5, 53%, 63%, 0.2) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(132, 62%, 11%, 0.2) 140px, hsla(132, 62%, 11%, 0.2) 160px)',
  'color: black',
  'font-size: calc(1.25em + 2vw)',
  'display: block',
  'text-align:center',
  'padding: 0.5em',
  'line-height:1.4',
  'font-family: "Apple Color Emoji", "Segoe UI Emoji"'
].join(';')

const style4 = [
  'color: black',
  'font-size: calc(0.75em + 1.5vw)',
  'background: white',
  'display: block',
  'text-align:center',
  'padding: 1em',
  'line-height:1.4',
  'writing-mode: vertical-lr'
].join(';')

const message1 = 'Using DevTools to understand modern CSS layouts'
const message2 = 'Chen Hui Jing, Developer Advocate @ Nexmo'
const message3 = '@hj_chen'
const message4 = '🇲🇾👾🏀🚲🖌👟💻✒️🎙🦊🥑🧗‍♀️🏳️‍🌈'
const message5 = 'Look ma, vertical writing'

console.log('%c%s', style1, message1)
console.log('%c%s', style2, message3)
console.log('%c%s', style2, message2)
console.log('%c%s', style3, message4)
console.log('%c%s', style4, message5)