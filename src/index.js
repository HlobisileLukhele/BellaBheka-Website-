// styling navigation bar
const navbar = document.getElementById("navbar");
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function() {
  navbar.classList.toggle("show");
});

<<<<<<< Updated upstream
//Implementing the slider carousel

=======
//Implementing the Slick Slider
>>>>>>> Stashed changes
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
<<<<<<< Updated upstream
      autoPlay: 4000, //Set AutoPlay to 3 seconds
 
      items : 8,
=======
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
>>>>>>> Stashed changes
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});