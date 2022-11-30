import "./style.css";

const hamburger = document.querySelector(".menu__hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("close");
  navLinks.classList.toggle("show__links");
});
