const dropdownBtn = document.querySelectorAll('.dropdown__button');
dropdownBtn.forEach((el) => {
  el.addEventListener('click', () => {
    dropdownBtn.forEach(function (element) {
      element.classList.remove('is-active');
    });
    el.classList.add('is-active');
  });
});