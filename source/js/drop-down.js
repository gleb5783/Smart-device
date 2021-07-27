var allDropDownBtn = document.querySelectorAll('.footer__drop-down-btn');
var allDropDownContainers = document.querySelectorAll('.footer__list-drop-down-container');

if(document.documentElement.scrollWidth < 768) {
  allDropDownContainers.forEach(element => element.classList.add('footer__list-drop-down--hidden'));
  allDropDownBtn.forEach(element => element.classList.remove('footer__drop-down-btn--close'));
}
else {
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
