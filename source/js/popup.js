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
    document.body.style.overflow = 'auto';
  }
}

function closeClickPopup(evt) {
  if(evt.target === popup) {
    popup.classList.add('popup--hidden');
    document.body.style.overflow = 'auto';
  }
}

var closePopup = () => {
  document.removeEventListener('click', closeClickPopup);
  document.removeEventListener('keydown', closeEscMenu);
  popup.classList.add('popup--hidden');
  document.body.style.overflow = 'auto';
}

var showPopup = () => {
  document.getElementById('popup-name').focus();
  document.addEventListener('click', closeClickPopup);
  document.addEventListener('keydown', closeEscMenu);
  popup.classList.remove('popup--hidden');
  document.querySelector('#popup-name').focus();
  document.body.style.overflow = 'hidden';
}

openPopup.addEventListener('click', showPopup);
closePopupButton.addEventListener('click', closePopup);
