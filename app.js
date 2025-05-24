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
