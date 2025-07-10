document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const message = document.getElementById("signupMessage");

  if (!email || !password) {
    message.textContent = "Please fill in all fields.";
    return;
  }

  // Save user to localStorage
  const user = { email, password };
  localStorage.setItem("registeredUser", JSON.stringify(user));

  message.style.color = "green";
  message.textContent = "Signup successful! Redirecting to login...";

  // Redirect after short delay
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
});
