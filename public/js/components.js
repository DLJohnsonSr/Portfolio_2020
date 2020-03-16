"use strict";

const body = document.body;



// dropdown menu
const navMenuIcon = document.getElementById("nav-menu-icon");
const navList = document.getElementById("nav-menu-list");

navMenuIcon.addEventListener("click", ()=>{
    navList.classList.toggle("menu-display");
});

navList.addEventListener("click", ()=>{
    navList.classList.remove("menu-display");
});