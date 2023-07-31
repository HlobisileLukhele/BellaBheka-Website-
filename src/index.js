
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


// //counter function 

// // Constants for the counters
// const yearsOfExperience = 15;
// const teamMembers = 8;
// const happyClients = 25;

// // Function to animate the counter from 0 to the target value
// function animateCounter(target, value) {
//   let currentCount = 0; // Initialize the counter at 0
//   const duration = 2000; // 2 seconds animation duration
//   const stepTime = Math.abs(Math.floor(duration / value)); // Calculate the step time to achieve the target value in 2 seconds

//   const timer = setInterval(() => {
//     currentCount++;
//     document.getElementById(target).textContent = currentCount;
//     if (currentCount === value) {
//       clearInterval(timer); // Stop the timer when the counter reaches the target value
//     }
//   }, stepTime);
// }

// // Initially update the counters without animation
// document.getElementById("yearsCount").textContent = yearsOfExperience;
// document.getElementById("teamCount").textContent = teamMembers;
// document.getElementById("clientsCount").textContent = happyClients;

// // Update the counters every second
// setInterval(() => {
//   // Increment the counters by 1 every second
//   yearsOfExperience++;
//   teamMembers++;
//   happyClients++;

//   // Update the displayed values using the animateCounter function
//   animateCounter("yearsCount", yearsOfExperience);
//   animateCounter("teamCount", teamMembers);
//   animateCounter("clientsCount", happyClients);
// }, 1000);
