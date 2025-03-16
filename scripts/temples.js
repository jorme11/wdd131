document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    console.log("Current date and time: " + currentDate);
});

// Select the hamburger button and menu
const hamburgerButton = document.getElementById('hamburger-btn');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        hamburgerButton.innerHTML = '&times;';
    } else {
        hamburgerButton.innerHTML = '&#9776;';
    }
});
