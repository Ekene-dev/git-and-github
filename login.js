document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  const message = document.getElementById("loginMessage");

  const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (
    !storedUser ||
    storedUser.email !== email ||
    storedUser.password !== password
  ) {
    message.textContent = "Invalid email or password.";
    return;
  }

  // Save session info
  localStorage.setItem("loggedInUser", email);

  // Redirect to home
  window.location.href = "home.html";
});
