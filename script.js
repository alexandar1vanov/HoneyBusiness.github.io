// Select the menu icon and menu itself
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('#nav-menu');

// Add click event listener to menu icon
menuIcon.addEventListener('click', function() {
    // Toggle the 'show' class on the nav menu
    navMenu.classList.toggle('show');
});
