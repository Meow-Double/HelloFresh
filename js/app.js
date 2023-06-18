const slider = new Swiper(".menu__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  // loop: true,
  pagination: {
    el: ".menu__slider-pagination",
  },
  navigation: {
    nextEl: ".menu__slider-arrow--right",
    prevEl: ".menu__slider-arrow--left",
  },
  breakpoints: {
    700: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    840: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },

    1070: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
  },
});

const accordionBtn = document.querySelectorAll(".questions__item-content");
const accordionImg = document.querySelectorAll(".questions__item-arrow");

accordionBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    try {
      const accordionItem = document.querySelector(
        `.${item.getAttribute("accordion-item")}`
      );
      accordionItem.classList.toggle("accordion--active");
      accordionImg[index].classList.toggle("accordion--img");
    } catch (error) {}
  });
});

const burgerBtn = document.querySelector(".burger");
const burgerPage = document.querySelector(".burger-page");

burgerBtn.addEventListener("click", () => {
  burgerPage.classList.toggle("burger-page--active");
  if (burgerPage.classList.contains("burger-page--active")) {
    console.log("yes");
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflowY = "auto";
    console.log("no");
  }
});
