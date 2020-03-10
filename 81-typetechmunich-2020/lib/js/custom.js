const spacInput = document.getElementById('space')
const wghtInput = document.getElementById('weight')

spacInput.addEventListener('change', function(event) {
  document.documentElement.style.setProperty('--spac', event.target.value);
})

wghtInput.addEventListener('change', function(event) {
  document.documentElement.style.setProperty('--wght', event.target.value);
})