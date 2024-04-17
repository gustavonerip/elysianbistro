// // core version + navigation, pagination modules:
// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// // import Swiper and modules styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// init Swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
