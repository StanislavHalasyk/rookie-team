document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('[data-burger-btn]');
  const closeBtn = document.querySelector('[data-close-btn]');
  const menu = document.querySelector('[data-menu]');

  // Відкрити меню
  burgerBtn.addEventListener('click', () => {
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Забороняємо скрол
  });

  // Закрити меню
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('is-open');
    document.body.style.overflow = ''; // Дозволяємо скрол
  });

  // Закриття при натисканні на Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

  // Закриття при кліку поза контентом меню
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
});
