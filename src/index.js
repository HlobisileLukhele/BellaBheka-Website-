// styling navigation bar
const navbar = document.getElementById("navbar");
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function() {
  navbar.classList.toggle("show");
});

//Implementing the slider carousel

$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel();
 
});
