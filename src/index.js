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

$(".owl-carousel").owlCarousel({
 
  //Basic Speeds
  slideSpeed : 200,
  paginationSpeed : 800,

  //Autoplay
  autoPlay : false,
  goToFirst : true,
  goToFirstSpeed : 1000,

  // Navigation
  navigation : false,
  navigationText : ["prev","next"],
  pagination : true,
  paginationNumbers: true,

  // Responsive
  responsive: true,
  items : 5,
  itemsDesktop : [1199,4],
  itemsDesktopSmall : [980,3],
  itemsTablet: [768,2],
  itemsMobile : [479,1]

})
