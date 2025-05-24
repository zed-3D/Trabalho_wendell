// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');

    menuToggle.addEventListener('click', function() {
        menuItems.classList.toggle('active');
    });
});

// Carrossel
document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel-container');
    const items = document.querySelectorAll('.carrossel-item');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarrossel();
    }

    function updateCarrossel() {
        const offset = -currentIndex * 100;
        carrossel.style.transform = `translateX(${offset}%)`;
    }

    // Avança o carrossel automaticamente a cada 5 segundos
    setInterval(nextSlide, 5000);
});

// Formulários
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar a lógica para enviar os dados do formulário
            alert('Formulário enviado com sucesso!');
            form.reset();
        });
    });
});

// Botões de Candidatura
document.addEventListener('DOMContentLoaded', function() {
    const botoesCandidatar = document.querySelectorAll('.btn-candidatar');
    
    botoesCandidatar.forEach(botao => {
        botao.addEventListener('click', function() {
            const formulario = document.querySelector('.formulario-candidatura');
            if (formulario) {
                formulario.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}); 