// dropdown в боковой панеле
const dropdownBtn = document.querySelectorAll('.dropdown__button');
dropdownBtn.forEach((el) => {
  el.addEventListener('click', () => {
    dropdownBtn.forEach(function (element) {
      element.classList.remove('is-active');
    });
    el.classList.add('is-active');
  });
});

// больше услуг
const serviceMore = document.querySelectorAll('.service__card--more');
serviceMore.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    el.previousElementSibling.classList.add('is-open');
  });
});