"use strict";

// ELEMENTS SELECTION
const nav = document.querySelector(".navs");

nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-items")) {
    const id = e.target.getAttribute("href");
    if (id) {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  }
});
