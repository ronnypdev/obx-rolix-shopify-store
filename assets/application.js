// Put your applicaiton javascript here
// toggle menu script
const hamburgerButton = document.querySelector('#nav-toggle');
const mobileNavOverlay = document.querySelector('.mobile-nav');

hamburgerButton.addEventListener('click', function () {
  this.classList.toggle('active');

  mobileNavOverlay.classList.toggle('is-mobile-overlay');
});
