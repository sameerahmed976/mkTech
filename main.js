import "./style.css";

const hamburger = document.querySelector(".menu__hamburger");
const navLinks = document.querySelector(".nav__links");
const btnUp = document.querySelector(".btn--up");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("close");
  navLinks.classList.toggle("show__links");
});

btnUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnUp.style.display = "block";
    // console.log("Click");
  } else {
    btnUp.style.display = "none";
  }
  navLinks.classList.remove("show__links");
  hamburger.classList.remove("close");
});
