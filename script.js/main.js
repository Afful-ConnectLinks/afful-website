// main.js
// Runs on all pages
document.addEventListener('DOMContentLoaded', function() {
  // Example: mobile menu toggle
  const menuBtn = document.querySelector('#menu-btn');
  const nav = document.querySelector('nav ul');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }

  console.log('Global JS loaded');
});
