const burger = document.querySelector(".burger-menu");
const nav = document.querySelector(".links");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-menu_active");
  nav.classList.toggle("links_active");
});

window.addEventListener("click", e => {
  if (burger.contains(e.target) || nav.contains(e.target)) return;

  burger.classList.remove("burger-menu_active");
  nav.classList.remove("links_active");
});