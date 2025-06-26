const hamMenu = document.querySelector('.ham-menu');
const menu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
hamMenu.classList.toggle('active');
menu.classList.toggle('active');
})
