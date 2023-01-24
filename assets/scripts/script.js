const btnMobile = document.getElementById("btn-mobile");
const itemsMenu = document.querySelectorAll(".links-menu");
const nav = document.getElementById("nav");
const active = nav.classList.contains("active");

function toggleMenu(event) {
  if (event.type === "click") event.preventDefault();
  nav.classList.toggle("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);

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

new TypeIt('#type-it', {
/*   strings: ['80% da população pesquisa produtos e serviços na Internet', 'Sua empresa se torna mais acessível aos clientes em potencial',
   'estabelece confiança e credibilidade com os clientes', 'pdoe se tornar uma poderosa ferramenta de marketing', 'ajuda a economizar tempo e recursos',
  'fornece informações importantes aos clientes'], */
  strings: ["Responsivo a todos os tamanhos de tela;", 'Otimizado para carregar rapidamente;', 'Com layout exclusivo;', 'Já integrado com as ferramentas necessárias;',
  'Focado em aumentar suas vendas e resultados;'],
  breakLines: false,
  loop: true,
  speed: 30,
  lifeLike: false,
  nextStringDelay: [3000, 3000],
  loopDelay: [3000, 3000]
}).go();
//end typeitjs


window.onscroll = function () {

  const btnBackToTop = document.getElementById("backToTop");
  const header = document.getElementById("header");

  //btn back to top
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnBackToTop.classList.add('back-to-top-active')
    btnBackToTop.classList.remove('back-to-top-inactive');
    header.classList.add('header-on-scroll');
  } else {
    btnBackToTop.classList.add('back-to-top-inactive')
    btnBackToTop.classList.remove('back-to-top-active');
    header.classList.remove('header-on-scroll');
  }

}

// When the user clicks on the button, scroll to the top of the document
function BackToTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//Carousel


$(document).ready(function(){
  $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});










$(document).ready(function(){
  $('.testimonyal-container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});