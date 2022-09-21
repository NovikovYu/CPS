import '../scss/style.scss';

import {
  Autoplay,
  Navigation,
  Pagination,
  Swiper
} from 'swiper';

//хедер
if (document.querySelector('.js_header')) {
  var body = document.querySelector('.js_body')
  const header = document.querySelector('.js_header')
  const headerTop = document.querySelector('.js_header_top')
  const headerOpenBtn = document.querySelector('.js_header_open_btn')
  const headerNavLinks = document.querySelectorAll('.js_nav_link')

  //открываю и закрываю меню
  function toggleHeader() {
    header.classList.toggle('active');
    headerTop.classList.toggle('active');
    headerOpenBtn.classList.toggle('active');
    body.classList.toggle('fixed');
  }

  headerOpenBtn.addEventListener('click', toggleHeader);

  // при клике на фон, но не при клике в тело менюшки
  header.addEventListener('click', (event) => {
    if (event.target.classList.contains('js_header')) {
      toggleHeader()
    }
  });

  //переставляю класс active и закрываю меню
  headerNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      //удалить после добавления других страниц
      e.preventDefault();

      headerNavLinks.forEach(item => {
        item.classList.remove('active');
      })

      link.classList.add('active');

      if (window.screen.width < 1366) {
        toggleHeader();
      }

    })
  })
}

//свайперы
Swiper.use([Pagination, Navigation, Autoplay]);

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 480) {
    //свайпер в секции Бренды
    const swiperBrends = new Swiper('.brends__cards', {
      slidesPerView: 1.3,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    //свайпер в секции Виды техники
    const swiperTypes = new Swiper('.types__cards', {
      slidesPerView: 1.3,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    //свайпер в секции Цены
    const swiperPrices = new Swiper('.prices__cards', {
      slidesPerView: 1.2,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
})

//кнопки "Показать больше"
if (document.querySelector('.js_add_btn')) {
  const moreContentBtns = document.querySelectorAll('.js_add_btn');

  moreContentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      btn.parentNode.classList.toggle('active');
    })
  })
}

// попапы
// открытие и закрытие попапа
function openOrClosePopup(popupClass, openBtnClass, closeBtnClass, popupBgClass) {
  if (document.querySelector(popupClass)) {
    const popup = document.querySelector(popupClass);
    const openBtn = document.querySelector(openBtnClass);
    const closeBtn = document.querySelector(closeBtnClass);
    const popupBg = document.querySelector(popupBgClass);

    openBtn.addEventListener('click', () => {
      popup.classList.add('active');
      body.classList.add('fixed');
    })

    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
      checkMenuAndUnfixBody();
    })

    popupBg.addEventListener('click', () => {
      popup.classList.remove('active');
      checkMenuAndUnfixBody();
    })
  }
}

//снимаем фиксацию с body при закртии попапа, если не открыто левое меню
function checkMenuAndUnfixBody() {
  const header = document.querySelector('.js_header_top');

  if (header.classList.contains('active')) {

  } else {
    body.classList.remove('fixed');
  }
}

//попап Обратная связь
openOrClosePopup('.js_feedback', '.js_feedback_open_btn', '.js_feedback_close_btn', '.js_feedback_bg');

//попап Заказать звонок
openOrClosePopup('.js_call_back', '.js_call_back_open_btn', '.js_call_back_close_btn', '.js_call_back_bg');
