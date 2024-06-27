
const hamburger = document.querySelector('.menuBars');
const navMenu = document.querySelector('.navMenu');
 
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});