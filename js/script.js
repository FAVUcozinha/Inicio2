// Seleciona os slides
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;

// Inicializa todos os slides como invisíveis e define o primeiro como visível
slides.forEach((slide, index) => {
    slide.style.opacity = 0;
    slide.style.transition = 'opacity 1s ease-in-out'; // Sincroniza com o CSS
});
slides[currentSlide].style.opacity = 1;

// Função para avançar os slides
function nextSlide() {
    // Oculta o slide atual
    slides[currentSlide].style.opacity = 0;
    
    // Avança para o próximo slide (ou volta ao primeiro)
    currentSlide = (currentSlide + 1) % totalSlides;
    
    // Exibe o próximo slide
    slides[currentSlide].style.opacity = 1;
}

// Inicia o slideshow com uma transição a cada 5 segundos
setInterval(nextSlide, 5000);