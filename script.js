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

function dropDown() {
  const resumePortoBtn = document.getElementById("resumePortoBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  function isMobileDevice() {
    return window.innerWidth <= 768;
  }

  resumePortoBtn.addEventListener("click", function (event) {
    if (isMobileDevice()) {
      event.preventDefault();
      dropdownMenu.style.display =
        dropdownMenu.style.display === "flex" ? "none" : "flex";
    }
  });

  document.addEventListener("click", function (event) {
    if (isMobileDevice() && !event.target.closest(".call-to-action")) {
      dropdownMenu.style.display = "none";
    }
  });

  resumePortoBtn.addEventListener("mouseenter", () => {
    dropdownMenu.style.display = "flex";
  });

  dropdownMenu.addEventListener("mouseleave", () => {
    dropdownMenu.style.display = "none";
  });

  resumePortoBtn.addEventListener("mouseleave", (event) => {
    setTimeout(() => {
      if (!dropdownMenu.matches(":hover")) {
        dropdownMenu.style.display = "none";
      }
    }, 200);
  });

  dropdownMenu.addEventListener("mouseenter", () => {
    dropdownMenu.style.display = "flex";
  });
}

// Run the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", dropDown);

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
