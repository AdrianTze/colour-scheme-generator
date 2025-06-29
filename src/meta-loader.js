// meta-loader.js
// Dynamically loads meta.html into the <head> at runtime

fetch("meta.html")
  .then((response) => response.text())
  .then((meta) => {
    const head = document.head;
    const temp = document.createElement("div");
    temp.innerHTML = meta;
    // Move all meta/link tags into <head>
    Array.from(temp.children).forEach((child) => {
      head.insertBefore(child, head.querySelector("title"));
    });
  });
