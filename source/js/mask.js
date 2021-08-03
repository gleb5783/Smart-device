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
