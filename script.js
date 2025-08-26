function searchDestinations() {
  let query = document.getElementById("searchInput").value.trim();
  if (query === "") {
    alert("Please enter a valid search query.");
  } else {
    window.location.href = "destinations.html";
  }
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
}

// Contact Form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully!");
      form.reset();
    });
  }
});
