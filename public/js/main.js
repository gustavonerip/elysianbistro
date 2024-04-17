window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader-hidden");
  });

  let cursor = document.createElement("div");
  cursor.classList.add("spotlights");
  document.body.appendChild(cursor);
  let delay = 0;

  document.addEventListener("mousemove", (e) => {
    // Clear any previous timeout
    clearTimeout(cursor.timeout);

    // Get mouse coordinates
    let x = e.clientX;
    let y = e.clientY;

    // Set a timeout to update cursor position after the delay
    cursor.timeout = setTimeout(() => {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    }, delay);
  });
});
