// styling navigation bar
const navbar = document.getElementById("navbar");
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function() {
  navbar.classList.toggle("show");
});

//owl carousel slider 

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 9,
      itemsDesktop : [1199,9],
      itemsDesktopSmall : [979,9]
 
  });
 
});

//counter function 

function updateCounters() {
  document.getElementById("yearsCount").textContent = yearsOfExperience;
  document.getElementById("teamCount").textContent = teamMembers;
  document.getElementById("clientsCount").textContent = happyClients;
}

// Call the updateCounters() function initially
updateCounters();

// Update the counters every second
setInterval(updateCounters, 1000);

const yearsOfExperience = 15;
const teamMembers = 8;
const happyClients = 25;

function animateCounter(target, value) {
  const start = 0;
  const duration = 2000; // 2 seconds animation duration
  const stepTime = Math.abs(Math.floor(duration / value));

  let timer = setInterval(() => {
    start++;
    document.getElementById(target).textContent = start;
    if (start === value) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateCounter('yearsCount', yearsOfExperience);
animateCounter('teamCount', teamMembers);
animateCounter('clientsCount', happyClients);



