// Seleciona os slides
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;

// Função para avançar os slides
function nextSlide() {
    slides[currentSlide].style.opacity = 0; // Oculta o slide atual
    currentSlide = (currentSlide + 1) % totalSlides; // Avança para o próximo slide (retorna ao primeiro após o último)
    slides[currentSlide].style.opacity = 1; // Exibe o próximo slide
}

// Verifica a largura da tela
const isMobile = window.innerWidth <= 768;

// Ajuste do intervalo para mobile (750ms) e desktop (1500ms)
const slideInterval = isMobile ? 750 : 1500; // Mobile mais rápido com 750ms, desktop com 1500ms

// Inicia o slideshow com a transição conforme o intervalo determinado
setInterval(nextSlide, slideInterval);

// Inicializa o primeiro slide como visível
slides[currentSlide].style.opacity = 1;
