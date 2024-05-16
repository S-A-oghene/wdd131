// Get the current year
const today = new Date();

// Get a reference to the element that will display the current year
const currentYear = document.querySelector("#currentyear");

// Set the text content of the current year element
currentYear.textContent = today.getFullYear();

// Get a reference to the element that will display the last modification date
const lastModified = document.querySelector("#lastModified");

// Get the date of the last modification of the page
const dateModif = document.lastModified;

// Set the HTML content of the last modification element
// The date is formatted as "Last Modification: [date]"
lastModified.innerHTML = `Last Modification: ${dateModif}`;

// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
  // Constants for windchill calculation formula
  const windChillConstant1 = 35.74;
  const windChillConstant2 = 0.6215;
  const windChillConstant3 = 35.75;
  const windChillConstant4 = 0.16;
  const windChillConstant5 = 0.4275;

  // Calculate windchill in Fahrenheit
  const windChillFahrenheit =
    windChillConstant1 +
    windChillConstant2 * temperature -
    windChillConstant3 * Math.pow(windSpeed, windChillConstant4) +
    windChillConstant5 * temperature * Math.pow(windSpeed, windChillConstant4);

  // Convert windchill to Celsius
  const windChillCelsius = (windChillFahrenheit - 32) * (5 / 9);

  // Return windchill in Celsius
  return windChillCelsius.toFixed(2);
}

// Function to display windchill factor
function displayWindChill() {
  // Static values for temperature and wind speed (example values)
  const temperatureFahrenheit = 78; // Fahrenheit
  const windSpeedMPH = 15; // Miles per hour

  // Check if conditions for windchill calculation are met
  if (temperatureFahrenheit <= 50 && windSpeedMPH > 3) {
    const windChillCelsius = calculateWindChill(
      temperatureFahrenheit,
      windSpeedMPH
    );
    document.getElementById("windchill").textContent = windChillCelsius + "°C";
  } else {
    document.getElementById("windchill").textContent = "N/A";
  }
}

// Call displayWindChill function when the page loads
window.onload = displayWindChill;
