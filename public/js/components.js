"use strict";

const body = document.body;

// NAVBAR
const navbarMenu = document.getElementById("navbar-menu");
const navbarList = document.getElementById("navbar-list");
const navbarIcon = document.getElementById("navbar-icon");

// toggle menu list open or closed on navbar
navbarMenu.addEventListener("click", ()=>{
    navbarList.classList.toggle("menu-display");
    navbarIcon.classList.toggle("icon-spin");
});

// close menu list when menu link clicked
navbarList.addEventListener("click", ()=>{
    navbarList.classList.toggle("menu-display");
    navbarIcon.classList.toggle("icon-spin");
});
