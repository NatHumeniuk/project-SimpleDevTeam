document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  const menuItems = menu.querySelectorAll(".menu-li");
  const sections = document.querySelectorAll("section"); 

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
    menuButton.classList.toggle("open"); // Добавляем/удаляем класс для смены бургера на крестик и наоборот
    
    // Добавляем/удаляем класс для анимации выезда меню
    menu.classList.toggle("slide-out-right");
  });

  menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault();
      menu.classList.add("is-hidden");
      document.body.classList.remove("no-scroll");
      menuButton.classList.remove("open"); // Возвращаем бургер при клике на пункт меню
      
      const targetSection = sections[index];
      const targetOffset = targetSection.offsetTop;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth"
      });
      
      // Удаляем класс анимации выезда меню после клика
      menu.classList.remove("slide-out-right");
    });
  });
});
