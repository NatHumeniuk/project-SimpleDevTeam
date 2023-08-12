document.addEventListener('DOMContentLoaded', function () {
  const aboutSection = document.querySelector('.about-us');
  const titleItems = aboutSection.querySelectorAll('.title-about-us-item');
  const windowHeight = window.innerHeight;

  let animationActive = false;
  let animationStartTime;

  function startCounter(targetH4, finalValue, step, isPercentage) {
    let interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - animationStartTime;
      if (elapsedTime <= 3500) {
        // Час анімації (3500 мс)
        const progress = elapsedTime / 3500;
        let currentValue = Math.round(progress * (finalValue - step));
        if (currentValue < 1) {
          currentValue = 1;
        }
        targetH4.textContent =
          currentValue === 1
            ? `${currentValue}+`
            : isPercentage
            ? `${currentValue}%`
            : `${currentValue}+`;
      } else {
        targetH4.textContent =
          finalValue === 1
            ? `${finalValue}+`
            : isPercentage
            ? `${finalValue}%`
            : `${finalValue}+`;
        clearInterval(interval);
      }
    }, 50); // Швидкість зміни значення (50 мс)
  }

  function handleScroll() {
    const aboutSectionRect = aboutSection.getBoundingClientRect();
    if (
      aboutSectionRect.top <= windowHeight &&
      aboutSectionRect.bottom >= 0 &&
      !animationActive
    ) {
      animationActive = true;
      animationStartTime = Date.now();
      titleItems.forEach((item, index) => {
        let finalValue;
        let step = 1;
        let isPercentage = false;
        if (index === 0) {
          finalValue = 5;
        } else if (index === 1) {
          finalValue = 100;
          step = 10;
          isPercentage = true;
        } else if (index === 2) {
          finalValue = 500;
          step = 100;
        }
        startCounter(item, finalValue, step, isPercentage);
      });
    } else if (
      (aboutSectionRect.top > windowHeight || aboutSectionRect.bottom < 0) &&
      animationActive
    ) {
      animationActive = false;
      titleItems.forEach(item => {
        item.textContent = item.getAttribute('data-original-value');
      });
    }
  }

  titleItems.forEach(item => {
    item.setAttribute('data-original-value', item.textContent);
  });

  window.addEventListener('scroll', handleScroll);
});
