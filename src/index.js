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
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

//counter function 

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


