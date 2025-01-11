document.querySelectorAll('.item').forEach(item => {
    const carouselInner = item.querySelector('.carousel-inner');
    const images = carouselInner.querySelectorAll('img');
    const textos = item.querySelectorAll('.texto p'); // Seleciona todos os textos
    const prevButton = item.querySelector('.prev');
    const nextButton = item.querySelector('.next');
    let index = 0;

    function updateCarousel() {
        // Move o carrossel para a imagem correspondente
        carouselInner.style.transform = `translateX(-${index * 100}%)`;

        // Atualiza os textos, garantindo que apenas o texto da imagem atual seja exibido
        textos.forEach((texto, i) => {
            if (i === index) {
                texto.classList.add('active');
            } else {
                texto.classList.remove('active');
            }
        });
    }

    // Inicializa o carrossel
    updateCarousel();

    // Botão "Anterior"
    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        updateCarousel();
    });

    // Botão "Próximo"
    nextButton.addEventListener('click', () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateCarousel();
    });
});
