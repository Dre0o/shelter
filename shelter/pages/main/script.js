const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView:3,
  spaceBetween: 30,
  slidesPerGroup:3,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
});
document.querySelector('.swiper').swiper