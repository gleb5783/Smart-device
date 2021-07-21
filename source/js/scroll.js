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
