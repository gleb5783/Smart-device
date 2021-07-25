var btn = document.querySelector('#drop-down1');
var dropDown = document.querySelector('.footer__list-nav-item-bottom');
var btn2 = document.querySelector('#drop-down2');
var dropDown2 = document.querySelector('.footer__list-address-item-bottom');
var allDropDownBtn = document.querySelectorAll('.footer__list-drop-down-open');

if(document.documentElement.scrollWidth < 768) {
  dropDown.classList.add('footer__list-drop-down--hidden');
  dropDown2.classList.add('footer__list-drop-down--hidden');
  btn.classList.remove('footer__list-drop-down-close');
  btn2.classList.remove('footer__list-drop-down-close');
}

function showDropDown (evt) {
  if(dropDown.classList.length === 1) {
    btn.classList.toggle('footer__list-drop-down-close');
    dropDown.classList.toggle('footer__list-drop-down--hidden');
  }
  if(dropDown2.classList.length === 1) {
    btn2.classList.toggle('footer__list-drop-down-close');
    dropDown2.classList.toggle('footer__list-drop-down--hidden');
  }
  evt.target.classList.toggle('footer__list-drop-down-close');
  evt.target.closest('ul').lastElementChild.classList.toggle('footer__list-drop-down--hidden');
}

allDropDownBtn.forEach(element => element.addEventListener('click', showDropDown));
