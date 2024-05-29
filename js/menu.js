const menuHamburguesa = document.querySelector('.menuHamburguesa');
const navRigth = document.querySelector('.nav-right');

menuHamburguesa.addEventListener('click', () => {
    navRigth.classList.toggle('show');
});