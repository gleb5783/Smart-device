var allDropDownBtn = document.querySelectorAll('.footer__drop-down-btn');
var allDropDownContainers = document.querySelectorAll('.footer__list-drop-down-container');
var mainBtn = document.querySelector('.main-content__btn');

if(document.documentElement.scrollWidth < 768) {
  allDropDownContainers.forEach(element => element.classList.add('footer__list-drop-down--hidden'));
  allDropDownBtn.forEach(element => element.classList.remove('footer__drop-down-btn--close'));
}
else {
  mainBtn.innerText = 'Получить бесплатную консультацию';
  allDropDownBtn.forEach(element => element.setAttribute("disabled", "disabled"));
}

allDropDownBtn.forEach((element) => element.addEventListener('click', () => {
    var parent = element.closest('ul').lastElementChild;

    function hideDropDown () {
      for (let i = 0; i < allDropDownContainers.length; i++) {
        if (allDropDownContainers[i].classList.length === 1) {
          allDropDownContainers[i].classList.add('footer__list-drop-down--hidden');
        }
      }
    }

    if(parent.classList.contains('footer__list-drop-down--hidden')) {
      hideDropDown();
      parent.classList.remove('footer__list-drop-down--hidden');
      allDropDownBtn.forEach(el => el.className = "footer__drop-down-btn");
    }
    else {
      hideDropDown();
    }

    element.classList.toggle('footer__drop-down-btn--close');
  })
);




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


function inputCheck () {
  if (element.value.length !== 16) {
    element.setCustomValidity ('Введите полный номер');
  }
  else {
    element.setCustomValidity('');
  }

  element.reportValidity();
}

function inputPopUpCheck () {
  if (elements.value.length !== 16) {
    elements.setCustomValidity ('Введите полный номер');
  }
  else {
    elements.setCustomValidity('');
  }

  elements.reportValidity();
}

elements.addEventListener('input', inputPopUpCheck)
element.addEventListener('input', inputCheck);

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
