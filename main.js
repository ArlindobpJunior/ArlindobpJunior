const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".nav__menu");

// abrir nav menu
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// fechar nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// fechar nav menu quando clicar em um menu

if (window.innerWidth < 1024) {
  document.querySelectorAll(".nav__menu li a").forEach((navItem) => {
    navItem.addEventListener("click", closeNav);
  });
}
