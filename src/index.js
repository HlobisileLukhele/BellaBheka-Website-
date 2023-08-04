
// // // carousel slider 

const flavoursContainer = document.getElementById('flavoursContainer');
const flavoursScrollWidth = flavoursContainer.scrollWidth;

window.addEventListener('load', () => {
  self.setInterval(() => {
    if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
      flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
    }
  }, 15);
});


 //counter function 

 const countUp = () => {
  const count = document.querySelectorAll('.count');

  const options = {
    duration: 2000,
    easing: 'linear',
    separator: ',',
    decimal: '.',
  };

  const updateCount = (el, value) => {
    const total = value.toLocaleString('en-US', options);
    el.textContent = total;
  };

  const counts = [
    { el: count[0], value: 5 },
    { el: count[1], value: 8 },
    { el: count[2], value: 25 },
  ];

  counts.forEach((item) => {
    const { el, value } = item;
    const intVal = parseInt(value, 10);
    updateCount(el, intVal);
  });

  const totalEl = document.querySelector('.total');
  totalEl.style.display = 'none';

  const countUp = () => {
    counts.forEach((item) => {
      const { el, value } = item;
      const intVal = parseInt(value, 10);
      const countTo = intVal + 1;
      const countInterval = setInterval(() => {
        updateCount(el, countTo);
        if (countTo >= intVal) {
          clearInterval(countInterval);
        }
      }, 10);
    });
  };

  const countInterval = setInterval(() => {
    countUp();
    if (counts.every((item) => parseInt(item.el.textContent, 10) >= parseInt(item.value, 10))) {
      clearInterval(countInterval);
      totalEl.style.display = 'block';
    }
  }, 1000);
};

countUp();

//animating the services cards

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addSlideUpAnimation(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-up');
      observer.unobserve(entry.target);
    }
  });
}


const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

// Apply slide-up animation on desktop devices only
if (window.matchMedia('(min-width: 768px)').matches) {
  // Select all cards with the class 'col-sm'
  const cards = document.querySelectorAll('.col-sm');

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(addSlideUpAnimation, options);

  // Observe each card to check when it is in the viewport
  cards.forEach(card => observer.observe(card));
}

  


