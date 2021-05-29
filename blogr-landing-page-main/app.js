const navLinks = document.querySelectorAll(".nav__link");

window.addEventListener("click", e => {
  navLinks.forEach(link => {
    if (e.target !== link) {
      link.firstElementChild.classList.remove("nav__arrow_active");
      link.nextElementSibling.classList.remove("dropdown-container_active");
    }
  })
})

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
})