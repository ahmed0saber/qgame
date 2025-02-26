const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navbarMenu = document.getElementById('navbarMenu');

mobileMenuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
