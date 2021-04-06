// Slider

import Swiper from 'swiper';
import Scrollbar from 'smooth-scrollbar';

// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import scroll from './scroll';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

const slider = () => {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // swiper.init(scroll),
    on: {
      init: function () {
        Scrollbar.initAll();
      },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    // centeredSlides: true,
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 70,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      850: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });
};

var swiper = new Swiper('.swiper-vertical', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
export default slider;
