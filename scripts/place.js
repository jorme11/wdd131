document.addEventListener("DOMContentLoaded", function () {

    // Set the current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set the last modified date
    document.getElementById("last-modified").textContent = document.lastModified;

    // Calculate Wind Chill (only if temperature and wind speed are available)
    calculateWindChill();

// Function to calculate windchill based on the formula
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Static values for temperature and wind speed (for the purpose of this example)
const temperature = 5; // in Celsius
const windSpeed = 20; // in km/h

// Calculate the windchill using the static values
const windChill = calculateWindChill(temperature, windSpeed);

// Display the windchill on the page
document.getElementById("wind-chill").textContent = `${windChill.toFixed(1)}°C`;
