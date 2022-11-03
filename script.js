

window.onscroll = function (e) {
    let header = document.getElementById("header");
    if(document.documentElement.scrollTop !== 0) {
        header.style.backgroundColor = "var(--dark-theme)";
    } else {
        header.style.backgroundColor = "transparent";
    }
  } 
