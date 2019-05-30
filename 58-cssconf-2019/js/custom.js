const style1 = [
  'background: radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0, linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%)',
  'background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%',
  'color: white',
  'display: block',
  'height: 60vh',
  'line-height:1.4',
  'text-align: center',
  'font-weight: bold',
  'font-size: calc(1.75em + 1.5vw)',
  'padding-top: 2em'
].join(';')

const style2 = [
  'background-image: radial-gradient(closest-side, transparent 0%, transparent 75%, #bdf07f 76%, #bdf07f 85%, #e0f8c4 86%, #e0f8c4 94%, #fff 95%, #fff 103%, #c9f396 104%, #c9f396 112%, #effddd 113%, #effddd 121%, #fff 122%, #fff 130%, #b1ed68 131%, #b1ed68 140%), radial-gradient(closest-side, transparent 0%, transparent 75%, #bdf07f 76%, #bdf07f 85%, #e0f8c4 86%, #e0f8c4 94%, #fff 95%, #fff 103%, #c9f396 104%, #c9f396 112%, #effddd 113%, #effddd 121%, #fff 122%, #fff 130%, #b1ed68 131%, #b1ed68 140%)',
  'background-size: 110px 110px',
  'background-color: #fff',
  'background-position: 0 0, 55px 55px',
  'color: black',
  'font-size: calc(1em + 1.5vw)',
  'display: block',
  'text-align:center',
  'padding: 1em',
  'line-height:1.4'
].join(';')

const style3 = [
  'background-image: radial-gradient(closest-side, transparent 0%, transparent 75%, #bdf07f 76%, #bdf07f 85%, #e0f8c4 86%, #e0f8c4 94%, #fff 95%, #fff 103%, #c9f396 104%, #c9f396 112%, #effddd 113%, #effddd 121%, #fff 122%, #fff 130%, #b1ed68 131%, #b1ed68 140%), radial-gradient(closest-side, transparent 0%, transparent 75%, #bdf07f 76%, #bdf07f 85%, #e0f8c4 86%, #e0f8c4 94%, #fff 95%, #fff 103%, #c9f396 104%, #c9f396 112%, #effddd 113%, #effddd 121%, #fff 122%, #fff 130%, #b1ed68 131%, #b1ed68 140%)',
  'background-size: 110px 110px',
  'background-color: #fff',
  'background-position: 0 0, 55px 55px',
  'color: black',
  'font-size: calc(1.5em + 2.5vw)',
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
const message3 = '🇲🇾👾🏀🚲🖌👟💻✒️🎙🦊🥑🧗‍♀️🏳️‍🌈'
const message4 = 'Look ma, vertical writing'

console.log('%c%s', style1, message1)
console.log('%c%s', style2, message2)
console.log('%c%s', style3, message3)
console.log('%c%s', style4, message4)