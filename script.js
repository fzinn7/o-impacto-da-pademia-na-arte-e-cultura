const darkToggle = document.getElementById('darkToggle');

darkToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');

  const isDark = document.documentElement.classList.contains('dark-mode');
  localStorage.setItem('prefersDark', isDark ? '1' : '0');
});

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('prefersDark');
  if (saved === '1') {
    document.documentElement.classList.add('dark-mode');
  }
});
