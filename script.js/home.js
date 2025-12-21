// home.js
// Runs only on the homepage
document.addEventListener('DOMContentLoaded', function() {
  // Example: animate hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.add('fade-in');
  }

  console.log('Homepage-specific JS loaded');
});