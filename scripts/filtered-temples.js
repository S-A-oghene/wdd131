// const hamburger = document.querySelector("#hamburger");
// const navItems = document.querySelector("#navItems");

// hamburger.addEventListener("click", () => {
//   navItems.classList.toggle("open");
//   hamburger.classList.toggle("open");
// });

// const today = new Date();
// const currentYear = document.querySelector("#currentyear");
// currentYear.textContent = today.getFullYear();

// const lastModified = document.querySelector("#lastModified");
// const dateModif = document.lastModified;

// lastModified.innerHTML = `Last Modification: ${dateModif}`;

// const temples = [
//   {
//     templeName: "Aba Nigeria",
//     location: "Aba, Nigeria",
//     dedicated: "2005, August, 7",
//     area: 11500,
//     imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
//   },
//   {
//     templeName: "Manti Utah",
//     location: "Manti, Utah, United States",
//     dedicated: "1888, May, 21",
//     area: 74792,
//     imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
//   },
//   {
//     templeName: "Payson Utah",
//     location: "Payson, Utah, United States",
//     dedicated: "2015, June, 7",
//     area: 96630,
//     imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
//   },
//   {
//     templeName: "Yigo Guam",
//     location: "Yigo, Guam",
//     dedicated: "2020, May, 2",
//     area: 6861,
//     imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
//   },
//   {
//     templeName: "Washington D.C.",
//     location: "Kensington, Maryland, United States",
//     dedicated: "1974, November, 19",
//     area: 156558,
//     imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
//   },
//   {
//     templeName: "Lima Perú",
//     location: "Lima, Perú",
//     dedicated: "1986, January, 10",
//     area: 9600,
//     imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
//   },
//   {
//     templeName: "Mexico City Mexico",
//     location: "Mexico City, Mexico",
//     dedicated: "1983, December, 2",
//     area: 116642,
//     imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
//   },
//   // Add more temple objects here...

//   {
//     templeName: "Adelaide Australia",
//     location: "Marden, South Australia",
//     dedicated: "2000, June, 15",
//     area: 10700,
//     imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-675332-wallpaper.jpg",
//   },

//   {
//     templeName: "Atlanta United States",
//     location: "Atlanta, United States",
//     dedicated: "1983, June, 1",
//     area: 34500,
//     imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-georgia-mormon-temple-900182-wallpaper.jpg",
//   },

//   {
//     templeName: "Campinas Brazil",
//     location: "Campinas, Brazil",
//     dedicated: "2002, May, 17",
//     area: 49100,
//     imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/mormon-temple-campinas-brazil-1029890-wallpaper.jpg",
//   },
// ];


// document.addEventListener("DOMContentLoaded", () => {
//   const templesSection = document.querySelector(".temples");
//   const templesContainer = document.createElement("div");
//   templesContainer.classList.add("temple-cards");

//   temples.forEach(temple => {
//     const templeCard = document.createElement("div");
//     templeCard.classList.add("temple-card");

//     const templeName = document.createElement("h3");
//     templeName.textContent = temple.templeName;

//     const templeLocation = document.createElement("p");
//     templeLocation.textContent = `Location: ${temple.location}`;

//     const templeDedicated = document.createElement("p");
//     templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;

//     const templeArea = document.createElement("p");
//     templeArea.textContent = `Area: ${temple.area} sq ft`;

//     const templeImage = document.createElement("img");
//     templeImage.src = temple.imageUrl;
//     templeImage.alt = temple.templeName;
//     templeImage.loading = "lazy";

//     templeCard.appendChild(templeName);
//     templeCard.appendChild(templeLocation);
//     templeCard.appendChild(templeDedicated);
//     templeCard.appendChild(templeArea);
//     templeCard.appendChild(templeImage);

//     templesContainer.appendChild(templeCard);
//   });

//   templesSection.appendChild(templesContainer);
// });


const hamburger = document.querySelector("#hamburger");
const navItems = document.querySelector("#navItems");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("open");
  hamburger.classList.toggle("open");
});

const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
const dateModif = document.lastModified;

lastModified.innerHTML = `Last Modification: ${dateModif}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Adelaide Australia",
    location: "Marden, South Australia",
    dedicated: "2000, June, 15",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-675332-wallpaper.jpg",
  },
  {
    templeName: "Atlanta United States",
    location: "Atlanta, United States",
    dedicated: "1983, June, 1",
    area: 34500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-georgia-mormon-temple-900182-wallpaper.jpg",
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas, Brazil",
    dedicated: "2002, May, 17",
    area: 49100,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/mormon-temple-campinas-brazil-1029890-wallpaper.jpg",
  },
];

// Function to create a temple card
function createTempleCard(temple) {
  return `
    <div class="temple-card">
      <h3>${temple.templeName}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    </div>
  `;
}

// Function to display temples based on a filter
function displayTemples(filterFunction) {
  const templeContainer = document.querySelector(".temple-cards");
  templeContainer.innerHTML = temples.filter(filterFunction).map(createTempleCard).join("");
}

// Event listeners for navigation menu items
document.querySelector("a[href='#Home']").addEventListener("click", () => displayTemples(() => true));
document.querySelector("a[href='#Old']").addEventListener("click", () => displayTemples(temple => new Date(temple.dedicated).getFullYear() < 1900));
document.querySelector("a[href='#New']").addEventListener("click", () => displayTemples(temple => new Date(temple.dedicated).getFullYear() > 2000));
document.querySelector("a[href='#Large']").addEventListener("click", () => displayTemples(temple => temple.area > 90000));
document.querySelector("a[href='#Small']").addEventListener("click", () => displayTemples(temple => temple.area < 10000));

// Display all temples by default on page load
displayTemples(() => true);
