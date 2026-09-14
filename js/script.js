(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Active category pill while scrolling, synced with an IntersectionObserver
  var sections = Array.prototype.slice.call(document.querySelectorAll(".menu-section[id]"));
  var pills = Array.prototype.slice.call(document.querySelectorAll(".cat-pill"));
  var track = document.getElementById("categoryTrack");

  if (sections.length && pills.length && "IntersectionObserver" in window) {
    var pillById = {};
    pills.forEach(function (pill) {
      var id = pill.getAttribute("href").replace("#", "");
      pillById[id] = pill;
    });

    var setActive = function (id) {
      pills.forEach(function (p) { p.classList.remove("is-active"); });
      var active = pillById[id];
      if (!active) return;
      active.classList.add("is-active");
      if (track) {
        var trackRect = track.getBoundingClientRect();
        var pillRect = active.getBoundingClientRect();
        var offset = pillRect.left - trackRect.left - (trackRect.width / 2) + (pillRect.width / 2);
        track.scrollBy({ left: offset, behavior: "smooth" });
      }
    };

    var headerOffset = 120; // approx sticky header + category nav height

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-" + headerOffset + "px 0px -65% 0px",
        threshold: 0
      }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }
})();
