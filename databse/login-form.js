// Check if email is stored in localStorage and autofill the form
const storedEmail = localStorage.getItem("storedEmail");
if (storedEmail) {
  document.getElementById("email").value = storedEmail;
}

const signInButton = document.getElementById("signInButton");
signInButton.addEventListener("click", function (event) {
  // Save the email to localStorage when "Sign In" is clicked
  const emailInput = document.getElementById("email");
  localStorage.setItem("storedEmail", emailInput.value);
});
