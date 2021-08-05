var websit = document.getElementById("websit");
const background = document.querySelector(".background");
const icon = document.querySelector("#img");
const headline = document.querySelector(".headline");
const hero = document.querySelector(".hero"); 
const imgg = document.querySelector("#imgg");   
var preload = document.getElementById("preload");
const particlesjs = document.querySelector("#particles-js"); 
const body = document.querySelector(".body"); 
const particlesjs1 = document.querySelector("#particles-js1"); 
const bodychild = document.querySelector(".bodychild"); 
const fas = document.querySelector(".fas"); 
const iconn = document.querySelector("#icon");
const but  = document.querySelector(".but");
const particlesjs2 = document.querySelector("#particles-js2"); 
const body2 = document.querySelector(".body2");
const body2div = document.querySelector("#body2div");




window.addEventListener('load', function(){

websit.style.display = 'block'
preload.style.display = 'none'
hero.style.animationName = 'hero'
imgg.style.animationName = 'imganim'
background.style.animationName = 'backgroundanim'
icon.style.animationName = 'img2anim'
particlesjs.style.animationName = 'img2anim'
body.style.animationName = 'bodyanim'
particlesjs1.style.animationName = 'bodyanim'
particlesjs1.style.top = '100vh'
body.style.top = '99.9vh'
iconn.style.animationName = 'navanim'
imgg.style.objectFit = 'cover'
particlesjs2.style.animationName = 'bodyanim'
particlesjs2.style.top = '199.9vh'
body2.style.animationName = 'bodyanim'
body2.style.left = '0vw'
body2div.style.animationName = 'bodyanim'
});




function open(){
    bodychild.style.animationName = 'bodychildanim'
    bodychild.style.left = '0vw'
}



window.addEventListener('scroll', function(){
var scrollnumber = this.scrollY
console.log(scrollnumber)
if(scrollnumber > 100){
    open()
    console.log("animation opened")
}

})




