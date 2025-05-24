'use strict';

const switcher = document.querySelector('.btn');

// Ao carregar a página, aplica o tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  switcher.textContent = savedTheme === 'dark-theme' ? 'Light Mode' : 'Dark Mode';
} else {
  // Se não houver tema salvo, aplica o tema claro como padrão
  document.body.classList.add('light-theme');
  switcher.textContent = 'Dark Mode';
}

// Alternar tema ao clicar
switcher.addEventListener('click', function () {
  const isDark = document.body.classList.contains('dark-theme');

  document.body.classList.toggle('dark-theme', !isDark);
  document.body.classList.toggle('light-theme', isDark);

  const newTheme = isDark ? 'light-theme' : 'dark-theme';
  localStorage.setItem('theme', newTheme);

  this.textContent = isDark ? 'Dark Mode' : 'Light Mode';
});
