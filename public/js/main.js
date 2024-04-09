// Create and append the .spotlights div dynamically
var cursor = document.createElement("div");
cursor.classList.add("spotlights");
document.body.appendChild(cursor);

var delay = 0; // Adjust the delay time in milliseconds

document.addEventListener("mousemove", (e) => {
  // Clear any previous timeout
  clearTimeout(cursor.timeout);

  // Get mouse coordinates
  var x = e.clientX;
  var y = e.clientY;

  // Set a timeout to update cursor position after the delay
  cursor.timeout = setTimeout(() => {
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  }, delay);
});
