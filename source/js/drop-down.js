var btn = document.querySelector('.footer__list-nav-open');
var dropDown = document.querySelector('.footer__list-nav-item-bottom');
var btn2 = document.querySelector('.footer__list-address-open');
var dropDown2 = document.querySelector('.footer__list-address-item-bottom');

if(document.documentElement.scrollWidth < 768) {
  dropDown.classList.add('footer__list-nav-item--hidden');
  dropDown2.classList.add('footer__list-nav-item--hidden');
  btn.classList.remove('footer__list-nav-close');
  btn2.classList.remove('footer__list-address-close');
}

function showDropDown() {
  if(dropDown2.classList.length === 1) {
    btn2.classList.toggle('footer__list-address-close');
    dropDown2.classList.toggle('footer__list-nav-item--hidden');
  }
  btn.classList.toggle('footer__list-nav-close');
  dropDown.classList.toggle('footer__list-nav-item--hidden');
}

function showDropDown2() {
  if(dropDown.classList.length === 1) {
    btn.classList.toggle('footer__list-nav-close');
    dropDown.classList.toggle('footer__list-nav-item--hidden');
  }
  btn2.classList.toggle('footer__list-address-close');
  dropDown2.classList.toggle('footer__list-nav-item--hidden');
}

btn.addEventListener('click', showDropDown);
btn2.addEventListener('click', showDropDown2);
