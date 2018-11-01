window.onload = function(e){
// get nav links
var links = document.querySelectorAll("sidenav a"); 
var links = document.querySelectorAll("nav a"); 
// iterate through links and assign on click action
links.forEach(function(link){
link.addEventListener("click", onLinkClick); 
link.addEventListener("scroll", onLinkScroll)
});
function onLinkScroll(e){
  console.log("hola");
  links.forEach(function(link){
    if (link != e.target && window.location.hash){
      link.classList.remove("current");
    }
  });
  e.target.classList.add("current");
}
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
var welcome = document.getElementById("welcome");
var myWork = document.getElementById("my-work");
var about = document.getElementById("about");
var currentSection = '';

window.onscroll = function(e){
  // Getting the nav offsetTop element
  var d = document.getElementById("nav");
  // Assigning the value of offsetHeight with section welcome 
  var welcomePosition = welcome.offsetTop;
  var myworkPosition = myWork.offsetTop;
  var aboutPosition = about.offsetTop;

  
  
 //When the topnav is offsetTop, Sidenav will fade in
  if (window.scrollY > aboutPosition){
    if(currentSection !== 'aboutPosition' && history.pushState) {
      history.pushState(null, null, '#about');
      currentSection = 'aboutPosition';
      
    }
  } else if (window.scrollY > myworkPosition ) {
    if(currentSection !== 'myworkPosition' && history.pushState) {
      history.pushState(null, null, '#my-work');
      currentSection = 'myworkPosition';
      
    }
  } else if (window.scrollY > welcomePosition){
    if(currentSection !== 'welcomePosition' && history.pushState) {
      history.pushState(null, null, '#welcome');
      currentSection = 'welcomePosition';
      
    }
    document.getElementById("sidenav").classList.add("nav-active");
  }else{
  document.getElementById("sidenav").classList.remove("nav-active");
 } 
};






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