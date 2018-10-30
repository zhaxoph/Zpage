window.onload = function(e){
// get nav links
var links = document.querySelectorAll("sidenav a"); 
var links = document.querySelectorAll("nav a"); 
var hash = location.hash;
var hash = location.hash.substr(1);
// iterate through links and assign on click action
links.forEach(function(link){
link.addEventListener("click", onLinkClick); 
});

function onLinkClick(e){
  // prevent default behavior so that it doesn't scroll instantly based on hash
  //e.preventDefault();

  
  links.forEach(function(link){
    if(link != e.target && window.location.hash){
      link.classList.remove("current"); 
    }  
  });
  e.target.classList.add("current");
  }
}

window.onscroll = function(e){
  // Getting the nav offsetTop element
  var d = document.getElementById("nav");
  // Assigning the value of offsetTop
  var topPos = d.offsetTop;  

  var y = window.scroll;
 //When the topnav is offsetTop, Sidenav will fade in
 if (window.scrollY > 500){
   console.log(window.location.hash);
  document.getElementById("sidenav").classList.add("nav-active");   
 } else{
  document.getElementById("sidenav").classList.remove("nav-active");
 } 
};



/*
window.onscroll = function() {scrollAppear()};
// Get the navbar
var navbar = document.getElementById("sidenav");

// Get the offset position of the navbar
var sticky = navbar.addEventListener("scroll", scrollAppear);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollAppear() {
  if (window.pageYOffset >= sticky) {
    sidenav.classList.add("vis")
  } else {
    sidenav.classList.remove("vis");
  }
}
*/
/*
var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "all"; 
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block"; 
      dots[slideIndex-1].className += " active";
    }
    */