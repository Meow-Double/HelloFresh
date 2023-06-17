const slider = new Swiper(".menu__slider", {
  freeMode: true,
  slidesPerView: 3.5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".menu__slider-arrow--right",
    prevEl: ".menu__slider-arrow--left",
  },
});

const accordionBtn = document.querySelectorAll(".questions__item-content");
const accordionImg = document.querySelectorAll(".question__item-arrow");

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
    console.log("yes")
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflowY = "auto";
    console.log("no")
  }
});
