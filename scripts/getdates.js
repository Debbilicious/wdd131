document.addEventListener("DOMContentLoaded", () => {
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = "Last Modification: " + document.lastModified;
  }
  const currentYear = document.getElementById("currentyear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear(); // Sets to 2025
  }
});