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
  }
});

menu.addEventListener("click", e => {
  navLinks.forEach(link => {
    if (e.target !== link) {
      link.firstElementChild.classList.remove("nav__arrow_active");
      link.lastElementChild.classList.remove("nav__arrow_dark_active")
      link.nextElementSibling.classList.remove("dropdown-container_active");
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 891) {
    menu.classList.remove("menu_active");
    navList.classList.remove("nav__list_active");
    burger.firstElementChild.classList.remove("burger__icon_hidden");
    burger.lastElementChild.classList.remove("burger__icon_close_active");
  }
});

window.addEventListener("scroll", e => {
  console.log(window.pageYOffset)
  if (window.pageYOffset < 526) {
    burger.style.backgroundColor = "";
  }
  if (window.pageYOffset > 526) {
    burger.style.backgroundColor = "rgba(0,0,0,0.3)";
  }
  if (window.pageYOffset > 1996) {
    burger.style.backgroundColor = "";
  }
  if (window.pageYOffset > 2591) {
    burger.style.backgroundColor = "rgba(0,0,0,0.3)"
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

burger.addEventListener("click", e => {
  menu.classList.toggle("menu_active");
  navList.classList.toggle("nav__list_active");
  burger.firstElementChild.classList.toggle("burger__icon_hidden");
  burger.lastElementChild.classList.toggle("burger__icon_close_active");
});