let mainNav = document.getElementById("menu-id");
let navBarToggle = document.getElementById("navbar-toggle-id");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});