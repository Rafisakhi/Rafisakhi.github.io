const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav__links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});
