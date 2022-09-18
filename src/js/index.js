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

//попап Обратная связь
if (document.querySelector('.js_feedback')) {
  const popup = document.querySelector('.js_feedback');
  const openBtn = document.querySelector('.js_feedback_open_btn');
  const closeBtn = document.querySelector('.js_feedback_close_btn');
  const popupBg = document.querySelector('.js_feedback_bg');

  openBtn.addEventListener('click', () => {
    popup.classList.add('active');
    body.classList.add('fixed');
  })

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    body.classList.remove('fixed');
  })

  popupBg.addEventListener('click', () => {
    popup.classList.remove('active');
    body.classList.remove('fixed');
  })
}

//попап Заказать звонок
if (document.querySelector('.js_call_back')) {
  const popup = document.querySelector('.js_call_back');
  const openBtn = document.querySelector('.js_call_back_open_btn');
  const closeBtn = document.querySelector('.js_call_back_close_btn');
  const popupBg = document.querySelector('.js_call_back_bg');

  openBtn.addEventListener('click', () => {
    popup.classList.add('active');
    body.classList.add('fixed');
  })

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    body.classList.remove('fixed');
  })

  popupBg.addEventListener('click', () => {
    popup.classList.remove('active');
    body.classList.remove('fixed');
  })
}
