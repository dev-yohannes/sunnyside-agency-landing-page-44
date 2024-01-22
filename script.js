const hamburgerBars = document.querySelector(".hamburger");
const extendedHamburger = document.querySelector(".extended-hamburger-menu");

extendedHamburger.classList.add("extended-hamburger-menu-display");

hamburgerBars.addEventListener("click", () => {
  extendedHamburger.classList.toggle("extended-hamburger-menu-display");
  console.log("clicked");
});
