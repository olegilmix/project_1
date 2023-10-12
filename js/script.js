let navMenu = document.querySelector('.nav__menu');
let menu = document.querySelector('#menu');
let menuLink = document.querySelector('.nav__menu-link');

menu.onclick = () => {
    navMenu.classList.toggle('nav__menu-mobile');
}

let changeIcon = function(icon) {
    icon.classList.toggle('fa-times');
}


