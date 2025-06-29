// navbar.js
// Loads navbar.html and highlights the active page
(function () {
  function normalizePath(path) {
    // Remove trailing slash, .html, and leading slash
    return path
      .replace(/\/?(index)?\.html$/, "")
      .replace(/\/$/, "")
      .replace(/^\//, "")
      .toLowerCase();
  }

  function setActiveNavLink() {
    var current = normalizePath(window.location.pathname);
    document.querySelectorAll(".navbar-link").forEach(function (link) {
      link.classList.remove("active");
      var href = link.getAttribute("href") || "";
      var linkPath = normalizePath(href);
      if (current === linkPath) {
        link.classList.add("active");
      }
      // Special case: homepage
      if (
        (current === "" || current === "index") &&
        (linkPath === "" || linkPath === "index")
      ) {
        link.classList.add("active");
      }
    });
  }

  fetch("navbar.html")
    .then((res) => res.text())
    .then((html) => {
      const temp = document.createElement("div");
      temp.innerHTML = html;
      document.body.insertBefore(
        temp.firstElementChild,
        document.body.firstChild
      );
      setTimeout(setActiveNavLink, 0);
    });
})();
