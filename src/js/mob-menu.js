(() => {
  const refs = {
    menuToggle: document.querySelector('[data-menu-toggle]'),
    Menu: document.querySelector('[data-menu]'),
  };

  refs.menuToggle.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const targetMenu = refs.menuToggle.getAttribute('data-menu-target');

    if (refs.Menu.classList.contains('is-hidden')) {
      // Відкриття меню
      refs.Menu.classList.remove('is-hidden');
      document.body.classList.add('no-scroll');
      refs.Menu.classList.add('slide-out-right');
      // Змінити іконку на хрестик
      refs.menuToggle
        .querySelector('use')
        .setAttribute('href', '../img/svg-icon.svg#icon-close');
    } else {
      // Закриття меню без анімації
      refs.Menu.classList.add('is-hidden');
      document.body.classList.remove('no-scroll');
      // Змінити іконку на бургер
      refs.menuToggle
        .querySelector('use')
        .setAttribute('href', '../img/svg-icon.svg#icon-burger');
    }
  }
})();
(() => {
  const refs = {
    menuToggle: document.querySelector('[data-menu-toggle]'),
    menu: document.querySelector('[data-menu]'),
    menuLinks: document.querySelectorAll('[data-menu] a'), // Змінили селектор
  };

  refs.menuToggle.addEventListener('click', toggleMenu);

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Змінили обробник події
      closeMenu(); // Викликаємо функцію закриття меню при кліку на посилання
    });
  });

  function toggleMenu() {
    if (refs.menu.classList.contains('is-hidden')) {
      // Відкриття меню...
    } else {
      // Закриття меню...
    }
  }

  function closeMenu() {
    // Закриття меню
    refs.menu.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    refs.menuToggle
      .querySelector('use')
      .setAttribute('href', '../img/svg-icon.svg#icon-burger');
  }
})();
