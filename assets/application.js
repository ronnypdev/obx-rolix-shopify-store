// toggle menu script
const hamburgerButton = document.querySelector('#nav-toggle');
const mobileNavOverlay = document.querySelector('.mobile-nav');
const glideSlider = document.querySelector('.glide');

hamburgerButton.addEventListener('click', function () {
  this.classList.toggle('active');

  mobileNavOverlay.classList.toggle('is-mobile-overlay');
});

const glide = new Glide(glideSlider, {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  arrows: true,
  keyboard: true,
  hoverpause: true,
});

glide.mount();
