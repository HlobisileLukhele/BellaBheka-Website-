
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



