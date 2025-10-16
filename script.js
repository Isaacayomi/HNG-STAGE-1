let time = document.querySelector('[data-testid="test-user-time"]');
setInterval(() => {
  time.textContent = "Time: " + Date.now();
}, 1000);
