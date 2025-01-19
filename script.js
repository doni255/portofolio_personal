function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function toggleLoginInfo() {
  const loginInfo = document.querySelector(".login-info");
  const toggleButton = document.querySelector("toggle-login-info");

  if (loginInfo.style.display === "none") {
    loginInfo.style.display = "block";
    toggleButton.textContent = "Hide Demo Login Information";
  } else {
    loginInfo.style.display = "none";
    toggleButton.textContent = "Show demo Login Information";
  }
}
