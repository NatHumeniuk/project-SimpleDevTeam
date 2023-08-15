document.addEventListener('DOMContentLoaded', function () {
  const aboutSection = document.querySelector('.about-us');
  const titleItems = aboutSection.querySelectorAll('.title-about-us-item');
  const windowHeight = window.innerHeight;

  let animationActive = false;
  let animationStartTime;

  function startCounter(targetH3, finalValue, step, isPercentage, showSymbol) {
    let interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - animationStartTime;
      if (elapsedTime <= 3500) {
        const progress = elapsedTime / 3500;
        let currentValue = Math.round(progress * (finalValue - step));
        if (currentValue < step) {
          currentValue = step;
        }
        targetH3.textContent =
          currentValue === step
            ? `${currentValue}${showSymbol}`
            : isPercentage
            ? `${currentValue}${showSymbol}`
            : `${currentValue}${showSymbol}`;
      } else {
        targetH3.textContent =
          finalValue === step
            ? `${finalValue}${showSymbol}`
            : isPercentage
            ? `${finalValue}${showSymbol}`
            : `${finalValue}${showSymbol}`;
        clearInterval(interval);
      }
    }, 50);
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
        let showSymbol = '';
        if (index === 0) {
          finalValue = 5;
          showSymbol = item.getAttribute('data-show-symbol');
        } else if (index === 1) {
          finalValue = 100;
          step = 10;
          isPercentage = true;
          showSymbol = item.getAttribute('data-show-symbol');
        } else if (index === 2) {
          finalValue = 500;
          step = 100;
          showSymbol = item.getAttribute('data-show-symbol');
        }
        startCounter(item, finalValue, step, isPercentage, showSymbol);
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
