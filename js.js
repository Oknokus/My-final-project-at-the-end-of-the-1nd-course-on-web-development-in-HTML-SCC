// // header
const headerSame = () => {
  const header = document.querySelector(`.header__compound`);
  window.onscroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('header__compound-active');
    } else {
      header.classList.remove('header__compound-active');
    }
  };
};
headerSame();



// Scroll
(function() {
  const smoothScroll = function(anchor, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight;
    let target = document.getElementById(anchor);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.scrollY;
    let startTime = null;

    const ease = function(t, b, c, d) {
      t /= d / 1;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = function(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);

  };

  const scrollTo = function() {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach(link => {
      link.addEventListener('click', function() {

        const currentTarget = link.getAttribute('href');
        if (!currentTarget) {
          return
        }
        const [link, anchor] = currentTarget.split('#')

        if (anchor) {
          smoothScroll(anchor, 500);
        }
      });
    });
  };
  scrollTo();
  window.addEventListener('load', () => {
    const anchor = decodeURIComponent(window.location.hash.substring(1));
    if (anchor) {
      smoothScroll(anchor, 500);
    }
  })
}());


window.scrollY


  
