document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  menuToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("menu-visible");
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("menu-visible");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });
});
