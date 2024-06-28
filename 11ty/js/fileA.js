import "./_fileA-1.js";
import "./_fileA-2.js";

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

console.log("fileA.js loaded");

