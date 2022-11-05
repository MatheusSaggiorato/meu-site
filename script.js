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

  function typeWriter(elemento) {
    const textoArray = elemento.innerText.split('');
    elemento.innerText = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerText += letra
        }, 75 * i)
    })
}

  const titulo = document.querySelector('.title');
 typeWriter(titulo);