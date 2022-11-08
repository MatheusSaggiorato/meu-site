/* 

window.onscroll = function (e) {
    let header = document.getElementById("header");
    if(document.documentElement.scrollTop !== 0) {
        header.style.backgroundColor = "var(--dark-theme)";
    } else {
        header.style.backgroundColor = "transparent";
    }
  }  */

/*   ScrollReveal({ reset: true });
  ScrollReveal().reveal('.scroll', {delay: 300});
 */

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





//typeitjs.com

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element", {
      strings: ["This is my string!"],
    }).go();
  });

  new TypeIt('#typeIt', {
    strings: ['Motivo 1', 'Motivo 2', 'Motivo 3', 'Motivo 4', 'etc...'],
    breakLines: false,
    loop: true,
    speed: 100,
    lifeLike: false,
    nextStringDelay: [2000, 1000],
  }).go();



  //back to top
  // Get the button:
let mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))