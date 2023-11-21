

const btnHome = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile');

const toggleMenu = () =>{
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('visible');
}

btnHome.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("click", toggleMenu);

