document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("successMsg").classList.remove("hidden");
});
