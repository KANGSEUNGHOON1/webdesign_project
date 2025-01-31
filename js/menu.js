window.onload = function () {
  // 햄버거바 메뉴창 열기
  const modal = document.querySelector(".hamburger-menu-wrap");
  const modalOpen = document.querySelector(".hamburger");
  modalOpen.addEventListener("click", function () {
    modal.style.display = "block";
  });
  // 햄버거바 메뉴창 닫기
  const modalcl = document.querySelector(".hamburger-menu-wrap");
  const modalClose = document.querySelector(".menu-close");
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });
};
