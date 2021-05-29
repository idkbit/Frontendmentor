const navLinks = document.querySelectorAll(".nav__link");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav__list");

window.addEventListener("click", e => {
  navLinks.forEach(link => {
    if (e.target !== link) {
      link.firstElementChild.classList.remove("nav__arrow_active");
      link.nextElementSibling.classList.remove("dropdown-container_active");
    }
  })
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    link.firstElementChild.classList.toggle("nav__arrow_active");
    link.nextElementSibling.classList.toggle("dropdown-container_active");
    navLinks.forEach(l => {
      if (link !== l) {
        l.firstElementChild.classList.remove("nav__arrow_active");
        l.nextElementSibling.classList.remove("dropdown-container_active");
      }
    })
  })
});

burger.addEventListener("click", () => {
  menu.classList.toggle("menu_active");
  navList.classList.toggle("nav__list_active");
});