document.addEventListener(
  'DOMContentLoaded',
  function () {
    // dropdown в боковой панеле
    const dropdownBtn = document.querySelectorAll('.arrow');
    dropdownBtn.forEach((el) => {
      el.addEventListener('click', () => {
        // dropdownBtn.forEach(function (element) {
        //   element.parentElement.classList.remove('is-active');
        // });
        el.parentElement.classList.toggle('is-active');
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

    // accordion
    const accordionBtn = document.querySelectorAll('.accordion__button');
    accordionBtn.forEach((el) => {
      el.addEventListener('click', () => {
        el.parentElement.parentElement.classList.toggle('is-open');
      });
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
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      },

      // If we need pagination
      pagination: {
        el: '.doctor-swiper__pagination',
        clickable: true
      }
    });

    const doctorSmallSwiper = new Swiper('.doctor-small-swiper', {
      // Optional parameters
      slidesPerView: 1,
      loop: true,
      autoplay: true,

      // If we need pagination
      pagination: {
        el: '.doctor-small-swiper__pagination',
        clickable: true
      }
    });

    var thumbsSwiper = new Swiper('.thumbs-swiper', {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 2,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        375: {
          slidesPerView: 3
        },
        576: {
          slidesPerView: 4
        },
        1280: {
          slidesPerView: 5
        }
      }
    });
    var photoSwiper = new Swiper('.photo-swiper', {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      thumbs: {
        swiper: thumbsSwiper
      }
    });

    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Загружается изображение #%curr%...',
      mainClass: 'mfp-img',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">Изображение #%curr%</a> не вышло загрузить.'
      }
    });

    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false
    });

    checkInputValue('input');
    checkInputValue('textarea');
    $('.contact-form').validate({
      errorElement: 'span',

      rules: {
        name: {
          required: true
        },
        enquiry: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },

      messages: {
        name: {
          required: 'Пожалуйста, введите имя'
        },
        email: {
          required: 'Пожалуйста, введите email',
          email: 'Введите корректный email'
        },
        enquiry: {
          required: 'Пожалуйста, введите сообщение'
        }
      },
      submitHandler: function(form) {
        //здесь я сам напишу код
         
       }
    });
  },
  false
);

