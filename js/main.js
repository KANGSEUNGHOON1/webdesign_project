window.onload = function () {
  /* 스와이퍼 1 */
  const mainSwiper = new Swiper(".main1Swiper", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
  /* 스와이퍼 1 모바일 */
  const mainmbSwiper = new Swiper(".main1mbSwiper", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
  /* 스와이퍼 3 */
  const menuSwiper = new Swiper(".main3Swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1050: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
  /* 스와이퍼 4 */
  const itemSwiper = new Swiper(".main4Swiper", {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 20,

    breakpoints: {
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1050: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
};
