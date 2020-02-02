function init() {
  appendMessage('Hello! My name is Nanami. Chibi isn\'t with the Dragonians right now. But is there anything else you\'d like to talk about?', 'agent');
}

window.addEventListener('load', function() {
  setupConversation('/api/jwt/agent');
  init();
});
