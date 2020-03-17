"use strict";

const body = document.body;



// dropdown menu
const navMenuIcon = document.getElementById("nav-menu-icon");
const navList = document.getElementById("nav-menu-list");

// toggle menu list open or closed on navbar
navMenuIcon.addEventListener("click", ()=>{
    navList.classList.toggle("menu-display");
});

// close menu list when menu link clicked
// navList.addEventListener("click", ()=>{
//     navList.classList.remove("menu-display");
// });