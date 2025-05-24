document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('.btn');
    const menuToggleBtn = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    const body = document.body;

    // Define tema padrão
    if (!body.classList.contains('light-theme') && !body.classList.contains('dark-theme')) {
        body.classList.add('light-theme'); // tema inicial
        themeToggleBtn.textContent = '🌙'; // ícone de lua
    }

    // Alternância de tema
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');

        const isDark = body.classList.contains('dark-theme');
        themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
    });

    // Menu mobile
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', () => {
            menuItems.classList.toggle('active');
        });
    }
});
