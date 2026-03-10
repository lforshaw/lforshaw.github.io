/* ============================================================
   Luke Forshaw — Personal Site
   script.js  — minimal, no dependencies
   ============================================================ */

(function () {
  "use strict";

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---- Mobile nav toggle ---- */
  var hamburger = document.querySelector(".hamburger");
  var navLinks  = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      var isOpen = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!isOpen));
      navLinks.classList.toggle("is-open", !isOpen);
    });

    /* Close nav when any link is tapped */
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
      });
    });

    /* Close nav on outside click / escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        hamburger.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
      }
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest("#nav")) {
        hamburger.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
      }
    });
  }

})();
