document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const menuItems = menu.querySelectorAll('.menu-li');
  const sections = document.querySelectorAll('section');
  const aboutUs = document.querySelector('.about-us');
  const bestsellers = document.querySelector('.bestsellers');
  const reviews = document.querySelector('.reviews');
  const ourProducts = document.querySelector('.our-products');
  const subscription = document.querySelector('.subscription');

  aboutUs.setAttribute('id', 'about_u');
  bestsellers.setAttribute('id', 'beteller');
  reviews.setAttribute('id', 'review');
  ourProducts.setAttribute('id', 'our_product');
  subscription.setAttribute('id', 'contact');

  menuButton.addEventListener('click', function () {
    menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
    menuButton.classList.toggle('open'); // Добавляем/удаляем класс для смены бургера на крестик и наоборот

    // Добавляем/удаляем класс для анимации выезда меню
    menu.classList.toggle('slide-out-right');
  });

  menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', function (event) {
      event.preventDefault();
      menu.classList.add('is-hidden');
      document.body.classList.remove('no-scroll');
      menuButton.classList.remove('open'); // Возвращаем бургер при клике на пункт меню

      const name = menuItem.textContent
        .toLowerCase()
        .trim()
        .replace(/\s/g, '_')
        .replace(/s/g, '');
      const targetSection = document.querySelector(`#${name}`);
      const targetOffset = targetSection.offsetTop;

      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });

      // Удаляем класс анимации выезда меню после клика
      menu.classList.remove('slide-out-right');
    });
  });
});
