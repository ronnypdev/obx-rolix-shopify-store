// Put your applicaiton javascript here
// toggle menu script
const hamburgerButton = document.querySelector('#nav-toggle');
const mobileNavOverlay = document.querySelector('.mobile-nav');

hamburgerButton.addEventListener('click', function () {
  this.classList.toggle('active');

  mobileNavOverlay.classList.toggle('is-mobile-overlay');
});

let glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 4,
});

glide.mount();
