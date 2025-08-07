// script.js
// — all animations/AOS removed

// Optional scroll-to-top if you have a .scroll-to-top button
const scrollBtn = document.querySelector(".scroll-to-top");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
}
// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar nav');
menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});
<script>
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('open');
    });
  });
</script>

