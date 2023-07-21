// dropdown в боковой панеле
const dropdownBtn = document.querySelectorAll('.dropdown__button');
dropdownBtn.forEach((el) => {
  el.addEventListener('click', () => {
    dropdownBtn.forEach(function (element) {
      element.classList.remove('is-active');
    });
    el.classList.toggle('is-active');
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

// открытие поиска в шапке
const searchBtn = document.querySelector('.search__button--top');
const searchInput = document.querySelector('.search__input');
searchBtn.addEventListener('click', (e) => {
  // кнопка служит для открытия блока и дальнейшего поиска
  if (!searchInput.classList.contains('is-active')) {
    e.preventDefault();
  }
  searchInput.classList.add('is-active');
});
window.addEventListener('click', function (e) {
  if (!(searchInput.contains(e.target) || searchBtn.contains(e.target))) {
    searchInput.classList.remove('is-active');
  }
});

// перемещение элементов шапки
if (window.screen.width <= 1024) {
  let tel = document.querySelector('.aside__tel');
  let headerListLinks = document.querySelector('.nav__list');
  let headerListAction = document.querySelector('.main__top--right');
  let headerListContact = document.querySelector('.main__top--left');

  // new containers
  let headerTopMob = document.querySelector('.main__header--top');
  let headerListLinksMob = document.querySelector('.main__header--list-links');
  let headerListActionMob = document.querySelector('.main__header--list-action');
  let headerListContactMob = document.querySelector('.main__header--list-contact');

  // moving the desktop elements to new containers
  headerTopMob.appendChild(tel);
  headerListLinksMob.appendChild(headerListLinks);
  headerListActionMob.appendChild(headerListAction);
  headerListContactMob.appendChild(headerListContact);
}

// бургер
let burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  document.body.classList.toggle("header__open");
});