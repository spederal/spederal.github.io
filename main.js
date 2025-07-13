document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('tech-btn').addEventListener('click', function () {
    document.getElementById('tech-output').textContent = 'You are a true Tech Dad! 🚀';
  });
  document.getElementById('music-btn').addEventListener('click', function () {
    document.getElementById('music-output').textContent = 'Music is life! 🎶';
  });
  document.getElementById('body-btn').addEventListener('click', function () {
    document.getElementById('body-output').textContent = 'Keep pushing! 💪';
  });
}); 