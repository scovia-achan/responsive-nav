const navLinks = document.querySelector(".link-items");
const toggleButton = document.querySelector(".toggle-btn");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
