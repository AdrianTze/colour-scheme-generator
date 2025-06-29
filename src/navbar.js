// navbar.js
// Loads navbar.html and highlights the active page
(function () {
  fetch("navbar.html")
    .then((res) => res.text())
    .then((html) => {
      const temp = document.createElement("div");
      temp.innerHTML = html;
      document.body.insertBefore(
        temp.firstElementChild,
        document.body.firstChild
      );
      // Highlight active page after navbar is loaded
      setTimeout(function () {
        var path = window.location.pathname;
        var page = path.substring(path.lastIndexOf("/") + 1).toLowerCase();
        document.querySelectorAll(".navbar-link").forEach(function (link) {
          link.classList.remove("active");
          var href = link.getAttribute("href");
          if (href && href.toLowerCase() === page) {
            link.classList.add("active");
          }
        });
      }, 0);
    });
})();
