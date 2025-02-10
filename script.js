document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".navlinks");

    let isOpen = false;


    menuIcon.addEventListener("click", function() {
        navMenu.classList.toggle("active"); // Toggle menu
        isOpen = !isOpen;
        
        // Change icon based on state
        menuIcon.src = isOpen ? "./images/icon-close.svg" : "./images/icon-menu.svg";
    });  
});