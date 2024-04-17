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

  gsap.defaults({
    ease: "power3.out",
  });

  let tl = gsap.timeline();

  tl.fromTo(
    ".logo h1",
    { scaleY: 0, opacity: 0, transformOrigin: "bottom", bottom: "-150px" },
    { scaleY: 1, opacity: 1, bottom: 0, duration: 1 }
  );

  tl.fromTo(
    ".logo h1 .star",
    { scale: 0, transformOrigin: "center" },
    { scale: 1, delay: 0.1, stagger: 0.3 }
  );

  tl.fromTo(".logo img", { opacity: 0 }, { opacity: 1, duration: 1.5 }, 1);

  tl.fromTo(
    ".content p",
    {
      y: "200%",
      opacity: 0,
    },
    { y: "0%", opacity: 1, duration: 1.5, ease: "power4.out" },
    "-=1"
  );

  tl.fromTo(
    ".content .cta-wrapper a",
    {
      x: "100%",
      opacity: 0,
    },
    {
      x: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.1,
    },
    "-=1.5"
  );
});
