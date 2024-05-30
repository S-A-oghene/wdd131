// Product Array
const products = [
  { id: 1, name: "Smartphone X200" },
  { id: 2, name: "Laptop Pro 15" },
  { id: 3, name: "Wireless Earbuds Y" },
  { id: 4, name: "Smartwatch Series 4" },
  { id: 5, name: "4K TV Ultra HD" },
  { id: 6, name: "Gaming Console Z" },
  { id: 7, name: "Bluetooth Speaker Q" },
  { id: 8, name: "Tablet A10" },
  { id: 9, name: "E-Reader Kindle" },
  { id: 10, name: "Digital Camera Canon" }
];

// Populate Product Name options
const productNameSelect = document.getElementById("productName");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;  // Use product name as the value
  option.textContent = product.name;
  productNameSelect.appendChild(option);
});

// Setting current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Setting last modified date in footer
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
