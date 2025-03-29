document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    console.log("Current date and time: " + currentDate);
});

// Select the hamburger button and menu
const hamburgerButton = document.getElementById('hamburger-btn');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('show');
    hamburgerButton.innerHTML = menu.classList.contains('show') ? '&times;' : '&#9776;';
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Brazilia Brazil Temple",
        location: "Brazilia, Brazil",
        dedicated: "2023, September, 17",
        area: 25000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
        templeName: "Ogden Utah",
        location: "Ogden, Utah",
        dedicated: "2014, September, 21",
        area: 112232,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/ogden-utah-temple/ogden-utah-temple-38445-main.jpg"
    },
    {
        templeName: "Boise Idaho",
        location: "Boise, Idaho",
        dedicated: "2012, November, 18",
        area: 35868,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-41667-main.jpg"
    }, {
        templeName: "St George Utah",
        location: "St George, Utah",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
    },
];

createTempleCard();

const old = document.getElementById("old");

old.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
});

const newer = document.getElementById("newer");

newer.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
});

const large = document.getElementById("large");

large.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

const small = document.getElementById("small");

small.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

function createTempleCard(filteredTemples = temples) {
    const container = document.querySelector(".res-grid");
    container.innerHTML = ""; // Clear previous results

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple` );
        img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);
    
        container.appendChild(card);
});
}