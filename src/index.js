// styling navigation bar
const navbar = document.getElementById("navbar");
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function() {
  navbar.classList.toggle("show");
});

//Implementing the Slick Slider

$('.slider').slick ({
  centerMode: true,
  dots:true,
  autoplay:true,
  centerPadding: '60px',
  slidesShow: 3,
  responsive: [{
    breakpoints : 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      Infinity: true,
      slidesShow:1
    }
  }]

})