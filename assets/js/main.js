"use strict";

// Open & Close Aside Navigation

const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const asideOverlay = document.querySelector(".aside-navigation-overlay");
const asideNav = document.querySelector(".aside-navigation");

openNav.addEventListener("click", function(){
	asideOverlay.classList.add("active");
	asideNav.classList.add("active");
})

closeNav.addEventListener("click", function(){
	asideOverlay.classList.remove("active");
	asideNav.classList.remove("active");
})
