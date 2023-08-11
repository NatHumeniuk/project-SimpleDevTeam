(() => {
    const refs = {
      menuToggle: document.querySelector("[data-menu-toggle]"),
      Menu: document.querySelector("[data-menu]"),
    };
  
    refs.menuToggle.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      const targetMenu = refs.menuToggle.getAttribute('data-menu-target');
  
      if (refs.Menu.classList.contains("is-hidden")) {
        // Відкриття меню
        refs.Menu.classList.remove("is-hidden");
        document.body.classList.add('no-scroll');
        refs.Menu.classList.add("slide-out-right");
        // Змінити іконку на хрестик
        refs.menuToggle.querySelector("use").setAttribute("href", "../img/svg-icon.svg#icon-close");
      } else {
        // Закриття меню без анімації
        refs.Menu.classList.add("is-hidden");
        document.body.classList.remove('no-scroll');
        // Змінити іконку на бургер
        refs.menuToggle.querySelector("use").setAttribute("href", "./img/svg-icon.svg#icon-burger");
      }
    }
  })();
  