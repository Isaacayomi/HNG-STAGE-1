let time = document.querySelector('[data-testid="test-user-time"]');
setInterval(() => {
  time.textContent = "Time (ms): " + Date.now();
}, 1000);
