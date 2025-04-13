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

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const temples = [
    {
        name: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        dedicated: "January 8, 1995",
        area: 104000,
        imageUrl: "images/bountiful_temple_lds.jpeg"
    },
    {
        name: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        dedicated: "January 8, 1995",
        area: 104000,
        imageUrl: "images/bountiful_temple_lds.jpeg"
    },
    {
        name: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        dedicated: "January 8, 1995",
        area: 104000,
        imageUrl: "images/bountiful_temple_lds.jpeg"
    },
    {
        name: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        dedicated: "January 8, 1995",
        area: 104000,
        imageUrl: "images/bountiful_temple_lds.jpeg"
    },
    {
        name: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        dedicated: "January 8, 1995",
        area: 104000,
        imageUrl: "images/bountiful_temple_lds.jpeg"
    },
    {
        name: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        dedicated: "January 8, 1995",
        area: 104000,
        imageUrl: "images/bountiful_temple_lds.jpeg"
    },
    {
        name: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        dedicated: "January 8, 1995",
        area: 104000,
        imageUrl: "images/bountiful_temple_lds.jpeg"
    },
    {
        name: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        dedicated: "January 8, 1995",
        area: 104000,
        imageUrl: "images/bountiful_temple_lds.jpeg"
    },
    {
        name: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        dedicated: "January 8, 1995",
        area: 104000,
        imageUrl: "images/bountiful_temple_lds.jpeg"
    },
    

];

function displayTemples(templeArray) {
    const grid = document.querySelector(".image-grid");
    grid.innerHTML = ""; // Clear existing

    templeArray.forEach((temple) => {
        const card = document.createElement("figure");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.name;
        img.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.innerHTML = `
      <strong>${temple.name}</strong><br>
      Location: ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area.toLocaleString()} sq ft
    `;

        card.appendChild(img);
        card.appendChild(caption);
        grid.appendChild(card);
    });
}

displayTemples(temples);

document.querySelectorAll(".menu a").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = btn.dataset.filter;
        let filteredTemples;

        switch (filter) {
            case "old":
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case "new":
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case "large":
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case "small":
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }

        displayTemples(filteredTemples);
    });
});

