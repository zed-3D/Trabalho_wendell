document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('.btn');
    const menuToggleBtn = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    const body = document.body;

    const applyTheme = (theme) => {
        body.classList.remove('light-theme', 'dark-theme');
        body.classList.add(theme);
        themeToggleBtn.textContent = theme === 'dark-theme' ? '☀️' : '🌙';
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-theme' || savedTheme === 'light-theme') {
        applyTheme(savedTheme);
    } else {
        applyTheme('light-theme');
    }
    themeToggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-theme');
        const newTheme = isDark ? 'light-theme' : 'dark-theme';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    if (menuToggleBtn && menuItems) {
        menuToggleBtn.addEventListener('click', () => {
            menuItems.classList.toggle('active');
        });
    }
});
