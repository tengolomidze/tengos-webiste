var websit = document.getElementById("websit");
var preload = document.getElementById("preload");
const videodiv = document.querySelector(".videodivv");
const background = document.querySelector(".background");
const icon = document.querySelector("#img");
const videotext = document.querySelector(".videotext");
const particlesjs = document.querySelector("#particles-js"); 
const video = document.querySelector(".backdiv");
const background2 = document.querySelector(".background2");
const particlesjs2 = document.querySelector("#particles-js2"); 
const vid = document.querySelector("#vid");
const iconn = document.querySelector("#icon");

window.addEventListener('load', function(){

websit.style.display = 'block'
preload.style.display = 'none'

videodiv.style.animationName = 'videoanim2' 
icon.style.animationName = 'img2anim'
background.style.animationName = 'backgroundanim'
videotext.style.animationName = 'videoanim22' 
particlesjs.style.animationName = 'img2anim'
particlesjs.style.left = '0vw'
background2.style.animationName = 'backgroundanim'
background2.style.left = '0vw'
particlesjs2.style.left = '0vw'
vid.style.transform = 'translateX(0vw)'
iconn.style.animationName = 'navanim'
particlesjs2.style.animationName = 'img2anim'
vid.style.animationName = 'bodyanim11'
});







window.addEventListener('scroll', function(){
var scrollnumber = this.scrollY
console.log(scrollnumber)


})