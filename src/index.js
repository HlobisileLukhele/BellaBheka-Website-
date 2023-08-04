
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

 // Constants for the counters
const yearsOfExperience = 5;
const teamMembers = 4;
const happyClients = 25;

// Function to animate the counter from 0 to the target value
function animateCounter(target, value) {
  let currentCount = 0;
  const duration = 2000;
  const stepTime = Math.abs(Math.floor(duration / value));

  const timer = setInterval(() => {
    currentCount++;
    document.getElementById(target).textContent = currentCount;
    if (currentCount === value) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Function to initialize and update the counters
function updateCounters() {
  // Initially update the counters without animation
  document.getElementById("yearsCount").textContent = yearsOfExperience;
  document.getElementById("teamCount").textContent = teamMembers;
  document.getElementById("clientsCount").textContent = happyClients;

  // Update the counters every second
  setInterval(() => {
    // Increment the counters by 1 every second
    yearsOfExperience++;
    teamMembers++;
    happyClients++;

    // Update the displayed values using the animateCounter function
    animateCounter("yearsCount", yearsOfExperience);
    animateCounter("teamCount", teamMembers);
    animateCounter("clientsCount", happyClients);
  }, 1000);
}

// Call the updateCounters function to start the counter updates
updateCounters();


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
  


