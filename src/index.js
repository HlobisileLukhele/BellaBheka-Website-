
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

  const total = counts.reduce((acc, item) => acc + item.value, 0);
  const totalEl = document.querySelector('.total');
  updateCount(totalEl, total);
};

countUp();

//animating the services cards

const cardsContainer = document.querySelector('.cards-container');
const cards = cardsContainer.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-up');
      observer.unobserve(entry.target);
    }
  });
});

cards.forEach(card => {
  observer.observe(card);
});
  


