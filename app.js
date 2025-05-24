'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    let className = document.body.className;
    if (className.includes('light-theme')) {
        this.textContent = "Dark Mode";
    } else {
        this.textContent = "Light Mode";
    }
});
// Ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
}

// Ao alternar o tema
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);
});
