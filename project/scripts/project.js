// =============================
// Project JavaScript (Course Material Version)
// =============================

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {

  // -------------------------
  // Hamburger Menu Toggle
  // -------------------------
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active"); // show/hide navigation on mobile
    });
  }

  // -------------------------
  // Contact Form Handling
  // -------------------------
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault(); // prevent page reload

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value.trim();

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Store data in localStorage
      const formData = { name, email, subject, message, date: new Date().toLocaleString() };
      let messages = JSON.parse(localStorage.getItem("messages")) || [];
      messages.push(formData);
      localStorage.setItem("messages", JSON.stringify(messages));

      // Reset form and show confirmation
      contactForm.reset();
      alert("Your message has been sent!");
    });
  }

});