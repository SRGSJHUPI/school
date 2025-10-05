// -----------------last updated date and time shown in footer-----------------------------
// Script 1: GitHub "Last updated"
  async function updateLastModified() {
    const res = await fetch("https://api.github.com/repos/SRGSJHUPI/school/commits/main");
    if (!res.ok) return;

    const data = await res.json();
    const dateStr = new Date(data.commit.committer.date).toLocaleString("en-IN", {
      dateStyle: "long",
      timeStyle: "medium"
    });

    document.getElementById("last-updated").innerText = `Last updated: ${dateStr}`;
  }

  // Script 2: Set current year in footer
  function updateYear() {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  // Run both
  updateLastModified();
  updateYear();

// smoothly scrolls the page to a specific element referenced by the URL hash after the page fully loads
  window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // wait for dynamic content to appear
  }
});

// Simple mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const sidebarOverlay = document.getElementById('sidebar-overlay');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-x-full');
  sidebarOverlay.classList.toggle('hidden');
});
sidebarOverlay.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full');
  sidebarOverlay.classList.add('hidden');
});