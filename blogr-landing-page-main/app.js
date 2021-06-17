const navLinks = document.querySelectorAll(".nav__link");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav__list");


//if click outside menu
window.addEventListener("click", e => {
  const isClickInsideMenu = menu.contains(e.target);
  const isBurger = burger.contains(e.target);
  if (!isClickInsideMenu && menu.classList.contains("menu_active") && !isBurger) {
    menu.classList.remove("menu_active");
    navList.classList.remove("nav__list_active");
    burger.firstElementChild.classList.toggle("burger__icon_hidden");
    burger.lastElementChild.classList.toggle("burger__icon_close_active");
    navLinks.forEach(link => {
      link.firstElementChild.classList.remove("nav__arrow_active");
      link.lastElementChild.classList.remove("nav__arrow_dark_active");
      link.nextElementSibling.classList.remove("dropdown-container_active");
    })
  }
  navLinks.forEach(link => {
    if (link.nextElementSibling === e.target || link.nextElementSibling.contains(e.target)) return;
    if (e.target !== link) {
      link.firstElementChild.classList.remove("nav__arrow_active");
      link.lastElementChild.classList.remove("nav__arrow_dark_active");
      link.nextElementSibling.classList.remove("dropdown-container_active");
    }
  })
});

// menu.addEventListener("click", e => {
//   navLinks.forEach(link => {
//     if (e.target !== link) {
//       link.firstElementChild.classList.remove("nav__arrow_active");
//       link.lastElementChild.classList.remove("nav__arrow_dark_active");
//       link.nextElementSibling.classList.remove("dropdown-container_active");
//     }
//   });
// });

window.addEventListener("resize", () => {
  if (window.innerWidth > 891) {
    menu.classList.remove("menu_active");
    navList.classList.remove("nav__list_active");
    burger.firstElementChild.classList.remove("burger__icon_hidden");
    burger.lastElementChild.classList.remove("burger__icon_close_active");
  }
});

window.addEventListener("scroll", () => {
  const burgerStripes = burger.firstElementChild.firstElementChild;
  const closeSvg = burger.lastElementChild.firstElementChild;
  const aboutSectionOffset = document.querySelector(".about").offsetTop;
  const speedSectionOffset = document.querySelector(".speed").offsetTop + document.querySelector(".speed__heading3").offsetTop;
  const featuresSectionOffset = document.querySelector(".features").offsetTop;
  if (window.pageYOffset < aboutSectionOffset) {
    burgerStripes.style.fill = "#fff";
    closeSvg.style.fill = "#fff";
  }
  if (window.pageYOffset > aboutSectionOffset - 60) {
    burgerStripes.style.fill = "#000";
    closeSvg.style.fill = "#000";
  }
  if (window.pageYOffset > speedSectionOffset - 75) {
    burgerStripes.style.fill = "#fff";
    closeSvg.style.fill = "#fff";
  }
  if (window.pageYOffset > featuresSectionOffset - 60) {
    burgerStripes.style.fill = "#000";
    closeSvg.style.fill = "#000";
  }
})

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    link.firstElementChild.classList.toggle("nav__arrow_active");
    link.lastElementChild.classList.toggle("nav__arrow_dark_active");
    link.nextElementSibling.classList.toggle("dropdown-container_active");
    navLinks.forEach(l => {
      if (link !== l) {
        l.firstElementChild.classList.remove("nav__arrow_active");
        l.lastElementChild.classList.remove("nav__arrow_dark_active");
        l.nextElementSibling.classList.remove("dropdown-container_active");
      }
    })
  })
});

burger.addEventListener("click", () => {
  menu.classList.toggle("menu_active");
  navList.classList.toggle("nav__list_active");
  burger.firstElementChild.classList.toggle("burger__icon_hidden");
  burger.lastElementChild.classList.toggle("burger__icon_close_active");
});