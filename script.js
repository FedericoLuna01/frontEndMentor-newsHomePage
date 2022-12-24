const hamburger = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav__list')
const body = document.querySelector('body')

hamburger.addEventListener('click', activarMenu);

let flag = true;

function activarMenu() {
    if (flag) {
        hamburger.src = "assets/images/icon-menu-close.svg";
        hamburger.classList.add('active');
        flag = false;
        menu.classList.add('active')
    } else {
        hamburger.src = "assets/images/icon-menu.svg";
        hamburger.classList.remove('active');
        flag = true;
        menu.classList.remove('active')
    }
}

const navItem = document.querySelectorAll('.nav__item');

navItem.forEach(e => {
    e.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.src = "assets/images/icon-menu.svg";
        flag = true;
    })
});