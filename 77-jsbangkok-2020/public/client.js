function triggerChat() {
  const button = document.getElementById('showChat');
  appendMessage('Hello! My name is Nanami. Chibi isn\'t with the Dragonians right now. But is there anything else you\'d like to talk about?', 'agent');
  button.addEventListener('click', event => {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('active');     
  }, false);
}

function closeChat() {
  const button = document.getElementById('closeChat');
  button.addEventListener('click', event => {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.remove('active');
  }, false);
}

const consoleStyle = [
  'background: radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -10vw -25vh, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -3vw 17em, linear-gradient(155.58deg,#de726f 4.46%, #2254b6 90.47%);',
  'background-size: 80vw 80vw, 80vw 80vw, 120vw 120vw, 100% 100%',
  'color: white',
  'text-shadow: 1px 1px 2px black',
  'font-size: calc(2em + 2vw)',
  'display: block',
  'text-align:center',
  'padding: 0.5em',
  'line-height: 1.4'
].join(';')

const consoleText = [
  'font-size: calc(1em + 1vw)',
  'line-height: 1.4'
].join(';')

function eventCode() {
  console.info('%c%s', consoleText, 'Sign up for a Nexmo account at https://dashboard.nexmo.com/sign-up');
  console.info('%c%s', consoleStyle, 'JSBK20');
}

window.addEventListener('load', function() {
  triggerChat();
  closeChat();
  setupConversation('/api/new');
  eventCode();
});
