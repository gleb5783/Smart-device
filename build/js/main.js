var ESC_BUTTON = 'Esc';
var ESCAPE_BUTTON = 'Escape';
var popup = document.querySelector('.popup');
var closePopupButton = document.querySelector('.popup__close-btn');
var openPopup = document.querySelector('.header__list-contacts-btn');

function isEscEvent(evt) {
  return evt.key === ESCAPE_BUTTON || evt.key === ESC_BUTTON;
}

function closeEscMenu(evt) {
  if (isEscEvent(evt)) {
    popup.classList.add('popup--hidden');
  }
}

function closeClickPopup(evt) {
  if(evt.target === popup) {
    popup.classList.add('popup--hidden');
  }
}

var closePopup = () => {
  document.removeEventListener('click', closeClickPopup);
  document.removeEventListener('keydown', closeEscMenu);
  popup.classList.add('popup--hidden');
}

var showPopup = () => {
  document.getElementById('popup-name').focus();
  document.addEventListener('click', closeClickPopup);
  document.addEventListener('keydown', closeEscMenu);
  popup.classList.remove('popup--hidden');
  document.querySelector('#popup-name').focus();
}

openPopup.addEventListener('click', showPopup);
closePopupButton.addEventListener('click', closePopup);

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

var element = document.getElementById('tel');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask1 = IMask(element, maskOptions);

var elements = document.getElementById('popup-tel');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

var mask = IMask(elements, maskOptions);

var anchor = document.querySelector('.main-content__scrool-link');
var anchor2 = document.querySelector('.main-content__btn');

anchor.addEventListener('click', function (e) {
  e.preventDefault();

  var blockID = anchor.getAttribute('href').substr(1);

  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

anchor2.addEventListener('click', function (e) {
  e.preventDefault();

  var blockID = anchor.getAttribute('href').substr(1);

  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
