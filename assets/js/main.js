(function () {
  "use strict";

  var nav = document.getElementById("nav");
  var menuToggle = document.getElementById("menuToggle");
  var yearEl = document.getElementById("year");
  var contactForm = document.getElementById("contactForm");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("contactName");
      var email = document.getElementById("contactEmail");
      var message = document.getElementById("contactMessage");
      if (!name || !email || !message) return;

      var subject = encodeURIComponent(
        "Project inquiry from " + (name.value.trim() || "Techualize visitor")
      );
      var body = encodeURIComponent(
        "Name: " +
          name.value.trim() +
          "\nEmail: " +
          email.value.trim() +
          "\n\n" +
          message.value.trim()
      );
      window.location.href =
        "mailto:hello@techualize.com?subject=" + subject + "&body=" + body;
    });
  }
})();
