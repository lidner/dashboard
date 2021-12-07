const sideMenu = document.querySelector('aside'), 
    menuBtn = document.querySelector('#menu-btn'),
    closeMenuBtn = document.querySelector('#close-btn'),
    themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
});

closeMenuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})



themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})