// Check if email is stored in localStorage and autofill the form
const storedEmail = localStorage.getItem("storedEmail");
const storedPassword = localStorage.getItem("storedPassword");

if (storedEmail) {
  document.getElementById("email").value = storedEmail;
}
if (storedPassword) {
  document.getElementById("password").value = storedPassword;
}

const signInButton = document.getElementById("signInButton");
signInButton.addEventListener("click", (event) => {
  // Save the email to localStorage when "Sign In" is clicked
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  localStorage.setItem("storedEmail", emailInput.value);
  localStorage.setItem("storedPassword", passwordInput.value);
});
