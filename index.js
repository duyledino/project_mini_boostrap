const getMenu = document.querySelector(".header .mobi");
const getIcon = document.querySelector(".header .inner-wrap .inner-title li:last-child a i");
const getlogo = document.querySelector(".header .inner-wrap");
let isHomeIcon = true;
const navIcon = document.getElementById('navIcon');

getIcon.addEventListener("click", () => {
    getlogo.classList.toggle("menu-on-logo");
    getMenu.classList.toggle("menu-on");
    navIcon.classList.add('fade-out');
        // Wait for the fade-out transition to complete
        setTimeout(() => {
            // Switch the icon class
            navIcon.classList.remove('fa-bars-staggered', 'fa-x');
            navIcon.classList.add(isHomeIcon ? 'fa-x' : 'fa-bars-staggered');
            isHomeIcon = !isHomeIcon;

            // Remove fade-out and add fade-in class
            navIcon.classList.remove('fade-out');
            navIcon.classList.add('fade-in');

            // Remove fade-in class after transition
            setTimeout(() => {
                navIcon.classList.remove('fade-in');
            }, 300); 
            // Match this duration with the transition time in CSS
        }, 300); // Match this duration with the transition time in CSS
})
