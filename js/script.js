document.addEventListener("DOMContentLoaded", () => {
    // === Menu Mobile ===
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("ativo"); // Usa a classe .ativo para exibir
            console.log("Menu alternado");
        });
    }

    // === Carrossel ===
    const carrossel = document.querySelector(".carrossel-container");
    const items = document.querySelectorAll(".carrossel-item");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarrossel();
    }

    function updateCarrossel() {
        const offset = -currentIndex * 100;
        carrossel.style.transform = `translateX(${offset}%)`;
    }

    if (carrossel && items.length > 0) {
        setInterval(nextSlide, 5000);
    }

    // === Envio de Formulários ===
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", e => {
            e.preventDefault();
            alert("Formulário enviado com sucesso!");
            form.reset();
        });
    });

    // === Botões de Candidatura ===
    const botoesCandidatar = document.querySelectorAll(".btn-candidatar");

    botoesCandidatar.forEach(botao => {
        botao.addEventListener("click", () => {
            const formulario = document.querySelector(".formulario-candidatura");
            if (formulario) {
