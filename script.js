// Dark/Light Mode Toggle
document.getElementById("toggleMode").addEventListener("click", function () { // Toggles dark mode on button click
  document.body.classList.toggle("dark-mode");
});

// Smooth Scroll Navigation (optional enhancement)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) { // Smooth scroll to  section 
    e.preventDefault(); // Prevent default anchor behavior 
    const targetId = this.getAttribute("href").substring(1); // Get target section ID
    const targetSection = document.getElementById(targetId); // Find the target section
    if (targetSection) { // If the section exists, scroll to it smoothly
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) { // Listens for the form’s submit event.
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim(); // Trim whitespace 
  const email = document.getElementById("email").value.trim(); // Trim whitespace
  const message = document.getElementById("message").value.trim(); // Trim whitespace
  const feedback = document.getElementById("formFeedback"); // Feedback element 

  // Reset feedback
  feedback.textContent = ""; // Clear previous feedback
  feedback.style.color = "red";// Default to red for errors

  // Validation checks
  /* If the name is less than 2 characters, shows an error and stops. */
  if (name.length < 2) { 
    feedback.textContent = "Name must be at least 2 characters.";
    return;
  }
// Simple email regex for basic validation
/* If the email does not match the basic email pattern, shows an error and stops. */
  const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    return;
  }
    // Message length check
    /* If the message is less than 10 characters, shows an error and stops. */
  if (message.length < 10) {
    feedback.textContent = "Message must be at least 10 characters.";
    return;
  }

  // Success feedback
    /*If all checks pass (see the rest of the code), it will show a success message and reset the form. This ensures users fill out the form correctly before it is accepted. */
  feedback.textContent = "Message sent successfully!";
  feedback.style.color = "green";

  // Clear form fields
  /* Resets the form fields to empty after successful submission. */
  document.getElementById("contactForm").reset();
});
// Collapsible FAQ Section
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});