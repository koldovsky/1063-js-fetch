const slides = [
    '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
    '<div><img src="img/banana.svg" alt="Banana"></div>',
    '<div><img src="img/girl.svg" alt="Girl"></div>',
    '<div><img src="img/viking.svg" alt="Viking"></div>'
];

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.products__carousel-slide');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 1024px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
    renderIndicators();
}

window.addEventListener('resize', renderSlide);

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}

// setInterval(nextSlide, 3000);

function renderIndicators() {
  const indicatorsContainer = document.querySelector('.products__carousel-indicators');
  indicatorsContainer.innerHTML = '';
  for (let i = 0; i < slides.length; i++) {
    indicatorsContainer.innerHTML += 
      `<button class="products__carousel-indicator ${i === currentSlideIdx ? 'products__carousel-indicator--active' : ''}"></button>`
  }
  const indicators = document.querySelectorAll('.products__carousel-indicator');
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlideIdx = index;
        renderSlide();
    })
  })
}

renderSlide();

const nextBtn = document.querySelector('.products__carousel-btn-next');
nextBtn.addEventListener('click', nextSlide);

const prevBtn = document.querySelector('.products__carousel-btn-prev');
prevBtn.addEventListener('click', prevSlide);
