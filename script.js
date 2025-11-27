// script.js

// Alterna o modo escuro adicionando a classe 'dark-mode' ao :root (body)
// botão #darkToggle controla a alternância
const darkToggle = document.getElementById('darkToggle');

darkToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  // Guarda preferência no localStorage
  const isDark = document.documentElement.classList.contains('dark-mode');
  localStorage.setItem('prefersDark', isDark ? '1' : '0');
});

// Aplica preferência salva ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('prefersDark');
  if (saved === '1') {
    document.documentElement.classList.add('dark-mode');
  }
});