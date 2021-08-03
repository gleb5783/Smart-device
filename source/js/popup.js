var ESC_BUTTON = 'Esc';
var ESCAPE_BUTTON = 'Escape';
var popup = document.querySelector('.popup');
var closePopupButton = document.querySelector('.popup__close-btn');
var openPopup = document.querySelector('.header__list-contacts-btn');

function isEscEvent(evt) {
  return evt.key === ESCAPE_BUTTON || evt.key === ESC_BUTTON;
}

function asd () {
  document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', '-1'));
  popup.querySelectorAll('*').forEach((a) => a.setAttribute('tabindex', 'auto'));
  document.querySelector('.popup__form-checkbox').setAttribute('tabindex', '0');
}

function zxc () {
  document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', 'auto'));
  document.querySelector('.form__checkbox').setAttribute('tabindex', '0');
}

function closeEscMenu(evt) {
  if (isEscEvent(evt)) {
    popup.classList.add('popup--hidden');
    document.body.style.overflow = 'auto';
    zxc();
  }
}

function closeClickPopup(evt) {
  if(evt.target === popup) {
    popup.classList.add('popup--hidden');
    document.body.style.overflow = 'auto';
    zxc();
  }
}

var closePopup = () => {
  document.removeEventListener('click', closeClickPopup);
  document.removeEventListener('keydown', closeEscMenu);
  popup.classList.add('popup--hidden');
  document.body.style.overflow = 'auto';
  zxc();
}

var showPopup = () => {
  document.getElementById('popup-name').focus();
  document.addEventListener('click', closeClickPopup);
  document.addEventListener('keydown', closeEscMenu);
  popup.classList.remove('popup--hidden');
  document.querySelector('#popup-name').focus();
  document.body.style.overflow = 'hidden';
  asd();
}

openPopup.addEventListener('click', showPopup);
closePopupButton.addEventListener('click', closePopup);
