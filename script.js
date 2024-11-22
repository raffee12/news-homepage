const body = document.querySelector("body");
const hamburgermenu = document.querySelector(".hamburger__menu ");
const navOpen = document.querySelector(".nav__open");
const navclose  = document.querySelector(".nav__close");
const nav = document.querySelector("nav")
const menu = document.querySelector(".menu")
hamburgermenu.addEventListener("click",()=> {
hamburgermenu.classList.toggle("open");
nav.classList.add("active");
  
menu.classList.add("dark");
})

navOpen.addEventListener("click",()=> {
    
})

body.addEventListener("click",(e)=> {
    let targetElem = e.target;
    if(!targetElem.classList.contains("nav__open") && !targetElem.classList.contains(("menu"))) {
    nav.classList.remove("active")
    menu.classList.remove("dark")
    }
    
    console.log(targetElem)
})