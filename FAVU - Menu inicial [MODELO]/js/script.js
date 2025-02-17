// Seleciona os slides e o contêiner do slideshow
const slides = document.querySelectorAll('.slide');
const slideshow = document.querySelector('.slideshow');
const totalSlides = slides.length;
let currentSlide = 0;

// Variáveis para interação manual (clicar e arrastar)
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

// Função para avançar os slides automaticamente
function nextSlide() {
    slides[currentSlide].style.opacity = 0; // Oculta o slide atual
    currentSlide = (currentSlide + 1) % totalSlides; // Avança para o próximo slide
    slides[currentSlide].style.opacity = 1; // Exibe o próximo slide
}

// Inicia o slideshow com uma transição automática a cada 5 segundos
const interval = setInterval(nextSlide, 5000);

// Funções para interação manual (pausa e clique/arraste)
function pauseSlideshow() {
    clearInterval(interval); // Pausa o slideshow automático
}

function resumeSlideshow() {
    setInterval(nextSlide, 5000); // Reinicia o slideshow automático
}

// Eventos para o clique e arraste (desktop)
slideshow.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slideshow.offsetLeft;
    scrollLeft = slideshow.scrollLeft;
    pauseSlideshow();
    slideshow.style.cursor = 'grabbing';
});

slideshow.addEventListener('mouseleave', () => {
    isDragging = false;
    slideshow.style.cursor = 'grab';
});

slideshow.addEventListener('mouseup', () => {
    isDragging = false;
    slideshow.style.cursor = 'grab';
    resumeSlideshow();
});

slideshow.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slideshow.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste de velocidade
    slideshow.scrollLeft = scrollLeft - walk;
});

// Eventos para toque (touch) em dispositivos móveis
slideshow.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - slideshow.offsetLeft;
    scrollLeft = slideshow.scrollLeft;
    pauseSlideshow();
});

slideshow.addEventListener('touchend', () => {
    isDragging = false;
    resumeSlideshow();
});

slideshow.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - slideshow.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste de velocidade
    slideshow.scrollLeft = scrollLeft - walk;
});

// Inicializa o primeiro slide como visível
slides[currentSlide].style.opacity = 1;
