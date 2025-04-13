document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    // Restore menu state
    const isMenuOpen = localStorage.getItem("menuOpen") === "true";
    if (isMenuOpen) {
        navLinks.style.display = "flex";
    }

    hamburger.addEventListener("click", () => {
        const currentlyVisible = navLinks.style.display === "flex";
        navLinks.style.display = currentlyVisible ? "none" : "flex";

        // Save state
        localStorage.setItem("menuOpen", !currentlyVisible);
    });
});

navLinks.classList.toggle("open");

hamburger.setAttribute("aria-expanded", !currentlyVisible);


