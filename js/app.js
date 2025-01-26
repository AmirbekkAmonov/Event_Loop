const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

const updateCarousel = () => {
  const width = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * width}px)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
};

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.getAttribute('data-index'));
    updateCarousel();
  });
});

updateCarousel();


const drawer = document.querySelector('.drawer');
const overlay = document.querySelector('.overlay');
const toggleButton = document.querySelector('.drawer-toggle');

const openDrawer = () => {
  drawer.classList.add('open');
  overlay.classList.add('active');
};

const closeDrawer = () => {
  drawer.classList.remove('open');
  overlay.classList.remove('active');
};

toggleButton.addEventListener('click', openDrawer);

overlay.addEventListener('click', closeDrawer);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer.classList.contains('open')) {
    closeDrawer();
  }
});