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

window.addEventListener('load', function() {
  triggerChat();
  closeChat();
  setupConversation('/api/new');
});
