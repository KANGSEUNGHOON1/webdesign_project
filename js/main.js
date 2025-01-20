window.onload = function () {
  const itemSwiper = new Swiper(".main4Swiper", {
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
     
      768: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },
    },
  });
};
