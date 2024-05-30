document.addEventListener("DOMContentLoaded", () => {
  // Get the current count from localStorage or initialize it to 0
  let reviewCount = localStorage.getItem("reviewCount");
  // Increment the count
  reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
  // Store the updated count back in localStorage
  localStorage.setItem("reviewCount", reviewCount);
  // Display the review count
  document.getElementById(
    "reviewCounter"
  ).textContent = `You have submitted ${reviewCount} reviews.`;
});
