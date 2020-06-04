// Put your applicaiton javascript here
// toggle menu script
const hamburgerButton = document.querySelector('#nav-toggle');

hamburgerButton.addEventListener('click', function () {
  console.log(this);
  this.classList.toggle('active');
});
