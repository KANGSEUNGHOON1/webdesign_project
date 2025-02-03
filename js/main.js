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
    slidesPerView: 1.7,
    spaceBetween: 20,

    breakpoints: {
      390: {
        slidesPerView: 2.7,
        spaceBetween: 20,
      },
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
    slidesPerView: 1.7,
    spaceBetween: 20,

    breakpoints: {
      768: {
        slidesPerView: 2.7,
        spaceBetween: 20,
      },
      1050: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  // 햄버거바 메뉴창 열기
  const modal = document.querySelector(".hamburger-menu-wrap");
  const modalOpen = document.querySelector(".hamburger");
  modalOpen.addEventListener("click", function () {
    modal.style.display = "block";
    modalOpen.style.display = "none";
  });
  // 햄버거바 메뉴창 닫기

  const modalClose = document.querySelector(".menu-close");
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
    modalOpen.style.display = "block";
  });
  //상단 메뉴바 호버
  //브랜드
  const brand = document.querySelector(".brandhv");
  const brandList = document.querySelector(".brandhv-list");
  brand.addEventListener("mouseenter", function () {
    brandList.style.display = "flex";
  });
  brand.addEventListener("mouseleave", function () {
    brandList.style.display = "none";
  });
  //메뉴
  const menu = document.querySelector(".menuhv");
  const menuList = document.querySelector(".menuhv-list");
  menu.addEventListener("mouseenter", function () {
    menuList.style.display = "flex";
  });
  menu.addEventListener("mouseleave", function () {
    menuList.style.display = "none";
  });
  //이벤트
  const event = document.querySelector(".eventhv");
  const eventList = document.querySelector(".eventhv-list");
  event.addEventListener("mouseenter", function () {
    eventList.style.display = "flex";
  });
  event.addEventListener("mouseleave", function () {
    eventList.style.display = "none";
  });
  //오더
  const order = document.querySelector(".orderhv");
  const orderList = document.querySelector(".orderhv-list");
  order.addEventListener("mouseenter", function () {
    orderList.style.display = "flex";
  });
  order.addEventListener("mouseleave", function () {
    orderList.style.display = "none";
  });
};
