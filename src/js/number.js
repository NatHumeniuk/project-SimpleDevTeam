document.addEventListener('DOMContentLoaded', function () {
  const aboutSection = document.querySelector('.about-us');
  const titleItems = aboutSection.querySelectorAll('.title-about-us-item');
  const windowHeight = window.innerHeight;

  let animationActive = false;
  let animationStartTime;

  function startCounter(targetH3, finalValue, step, isPercentage) {
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
        targetH3.textContent =
          currentValue === 1
            ? `${currentValue}+`
            : isPercentage
            ? `${currentValue}%`
            : `${currentValue}+`;
      } else {
        targetH3.textContent =
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
      titleItems.forEach(item => {
        const finalValue = parseInt(item.getAttribute('data-final-value'));
        const step = parseInt(item.getAttribute('data-step')) || 1;
        const isPercentage = item.getAttribute('data-is-percentage') === 'true';
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
