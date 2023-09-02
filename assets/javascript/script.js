const menuOpen = document.querySelector('.navMenuOpen')
const menuClose = document.querySelector('.navMenuClose')
const mobileNav = document.querySelector('.mobileNavigation')

menuOpen.addEventListener('click', ()=>{
    mobileNav.style.display = 'block';
})

menuClose.addEventListener('click', ()=>{
    mobileNav.style.display = 'none';
})