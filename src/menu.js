const burgerBtn = document.querySelector('[data-burger-btn]');
const menu = document.querySelector('[data-menu]');
const closeBtn = document.querySelector('.modal-close-btn');

burgerBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
});
const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
});
 