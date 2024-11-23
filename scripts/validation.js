// Validation Functions
function validateLoginForm(event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
    alert("Login successful!");
    return true;
  }
  
  function validateRegisterForm(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (name.length === 0) {
      alert("Name cannot be empty.");
      return false;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
    alert("Registration successful!");
    return true;
  }
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Attach Event Listeners
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form[action='index.html']");
    if (loginForm) {
      loginForm.addEventListener("submit", validateLoginForm);
    }
  
    const registerForm = document.querySelector("form[action='register.html']");
    if (registerForm) {
      registerForm.addEventListener("submit", validateRegisterForm);
    }
  });
  