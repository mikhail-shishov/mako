document.addEventListener(
  'DOMContentLoaded',
  function () {
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
        el.previousElementSibling.classList.toggle('is-open');
        if (el.previousElementSibling.classList.contains('is-open')) {
          el.innerHTML = 'Свернуть описание';
        } else {
          el.innerHTML = 'Показать все';
        }
      });
    });

    // читать дальше
    const readMore = document.querySelectorAll('.link--readmore');
    readMore.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        el.previousElementSibling.classList.toggle('is-open');
        if (el.previousElementSibling.classList.contains('is-open')) {
          el.innerHTML = 'Свернуть описание';
        } else {
          el.innerHTML = 'Показать больше';
        }
      });
    });

    // открытие поиска в шапке
    const searchBtn = document.querySelector('.search__button--top');
    const searchInput = document.querySelector('.search__input');
    const search = document.querySelector('.search');

    searchBtn.addEventListener('click', (e) => {
      // кнопка служит для открытия блока и дальнейшего поиска
      if (!search.classList.contains('is-active')) {
        e.preventDefault();
      }
      search.classList.add('is-active');
    });
    window.addEventListener('click', function (e) {
      if (!(searchInput.contains(e.target) || searchBtn.contains(e.target))) {
        search.classList.remove('is-active');
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
    let burger = document.querySelector('.burger');
    burger.addEventListener('click', function () {
      document.body.classList.toggle('header__open');
    });

    // doctor slider
    const doctorSwiper = new Swiper('.doctor-swiper', {
      // Optional parameters
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
      autoplay: true,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      },

      // If we need pagination
      pagination: {
        el: '.doctor-swiper__pagination',
        clickable: true,
      },
    });

    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        },
      },
    });
  },
  false
);
