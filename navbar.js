const btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

if (links.classList.contains("active")) {
  links.classList.remove("active");
}

btn.addEventListener("click", () => {
  links.classList.toggle("active");
});
