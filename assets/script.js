"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

const headerBottom = document.querySelector(".header-bottom");
const clickMenu = document.querySelector(".pages");
const dropDown = document.getElementById("dropdown");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 80) {
    headerBottom.classList.add("fixed");
  } else {
    headerBottom.classList.remove("fixed");
  }
});

clickMenu.addEventListener("click", function () {
  console.log(5);
  dropDown.classList.remove("hide");
  dropDown.classList.add("pages-down");
});

window.onclick = function (event) {
  if (!event.target.matches(".dropPages")) {
    dropDown.classList.add("hide");
    dropDown.classList.remove("pages-down");
  }
};
