  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');

    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

const cartSent = document.querySelectorAll(".button-order");
const cartPopup = document.querySelector(".page__modal");
const cartClose = cartPopup.querySelector(".modal__button");

for (var i = 0; i < cartSent.length; i++) {
  (function(index) {
    cartSent[index].addEventListener("click", function(evt) {
      evt.preventDefault();
      cartPopup.classList.add("js-modal-show");
  });

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("js-modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("js-modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("js-modal-show");
    }
  }
});
