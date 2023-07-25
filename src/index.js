// styling navigation bar
const navbar = document.getElementById("navbar");
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function() {
  navbar.classList.toggle("show");
});

//Implementing the slider carousel

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 4000, //Set AutoPlay to 3 seconds
 
      items : 8,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});