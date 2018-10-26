window.onload = function(e){
// get nav links
var links = document.querySelectorAll("sidenav a"); 
var links = document.querySelectorAll("nav a"); 

// iterate through links and assign on click action
links.forEach(function(link){
link.addEventListener("click", onLinkClick); 
});

function onLinkClick(e){
  // prevent default behavior so that it doesn't scroll instantly based on hash
  //e.preventDefault();

  
  links.forEach(function(link){
    if(link != e.target){
      link.classList.remove("current");
    }  
  });
  e.target.classList.add("current");
  }
}


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