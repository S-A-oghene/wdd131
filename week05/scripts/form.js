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
  
  // Placeholder for dynamically populated checkboxes for useful features
  const features = [
    { id: 'feature1', name: 'Long Battery Life' },
    { id: 'feature2', name: 'High Resolution' },
    { id: 'feature3', name: 'Waterproof' },
    { id: 'feature4', name: 'Bluetooth Connectivity' },
    { id: 'feature5', name: 'Fast Charging' }
  ];
  
  const usefulFeaturesDiv = document.getElementById("usefulFeatures");
  features.forEach(feature => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = feature.id;
    checkbox.name = "usefulFeatures";
    checkbox.value = feature.name;
  
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(feature.name));
    usefulFeaturesDiv.appendChild(label);
  });
  
  // Setting current year in footer
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  
  // Setting last modified date in footer
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  