// const today = new Date();
// const currentYear = document.querySelector("#currentyear");
// currentYear.textContent = today.getFullYear();
// const lastModified = document.querySelector("#lastModified");
// const dateModif = document.lastModified;
// lastModified.innerHTML = `Last Modification: ${dateModif}`;

document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // Set last modified date in footer
  document.getElementById("lastModified").textContent = document.lastModified;
});
