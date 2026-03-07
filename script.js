function toggleMenu(){

const nav = document.querySelector(".nav-links");
const icon = document.getElementById("menuIcon");

nav.classList.toggle("active");

if(nav.classList.contains("active")){
icon.classList.remove("fa-bars");
icon.classList.add("fa-times");
}
else{
icon.classList.remove("fa-times");
icon.classList.add("fa-bars");
}

}

/* SCROLL ANIMATION */

const slides = document.querySelectorAll(".slide-left, .slide-right, .slide-up");

function revealSlide(){

slides.forEach(slide => {

const rect = slide.getBoundingClientRect();

if(rect.top < window.innerHeight && rect.bottom > 0){

slide.classList.add("show");

}

});

}

window.addEventListener("scroll", revealSlide);
window.addEventListener("load", revealSlide);