let icon = document.querySelector('.icon');
let menuMobile = document.querySelector('.menu')

function menuOpen() {
    icon.classList.toggle('icon-x');
    menuMobile.classList.toggle('ativo')
}


icon.addEventListener('click', menuOpen);