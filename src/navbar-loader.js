// navbar-loader.js
// Dynamically loads navbar.html into the page for SPA/static hosting
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
      Array.from(temp.querySelectorAll("script")).forEach((script) => {
        const s = document.createElement("script");
        if (script.src) s.src = script.src;
        else s.textContent = script.textContent;
        document.body.appendChild(s);
      });
    });
})();
