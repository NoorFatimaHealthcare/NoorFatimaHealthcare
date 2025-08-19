document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("blogSearch");
  const blogCards = document.querySelectorAll(".blog-card");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase().trim();

      blogCards.forEach(card => {
        const title = card.querySelector("h2").innerText.toLowerCase();
        const tags = card.querySelector(".blog-tags")?.innerText.toLowerCase() || "";

        if (title.includes(query) || tags.includes(query)) {
          card.style.display = "flex";
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200); // matches CSS transition
        }
      });
    });
  }
});
