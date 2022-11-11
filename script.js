const btnMobile = document.getElementById("btn-mobile");
const itemsMenu = document.querySelectorAll(".linksMenu");
const nav = document.getElementById("nav");
const active = nav.classList.contains("active");
function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

itemsMenu.forEach(function (event) {
  event.addEventListener("click", function () {
    nav.classList.remove("active");
    btnMobile.removeAttribute("aria-expanded");
    btnMobile.removeAttribute("aria-label");
  })
})






//start typeitjs.com
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#element", {
    strings: ["This is my string!"],
  }).go();
});

new TypeIt('#typeIt', {
  strings: ['Motivo 1', 'Motivo 2'],
  breakLines: false,
  loop: true,
  speed: 100,
  lifeLike: false,
  nextStringDelay: [3000, 3000],
  loopDelay: [3000, 3000]
}).go();
//end typeitjs


window.onscroll = function () {

  const mybutton = document.getElementById("backToTop");
  const header = document.getElementById("header");

  //btn back to top
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  //change background header
  if (document.documentElement.scrollTop !== 0) {
    header.style.background = "var(--dark-theme)";
    header.style.background = "var(--dark-gradient)";
  } else {
    header.style.background = "transparent";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}