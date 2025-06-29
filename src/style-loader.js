// style-loader.js
// Dynamically loads all required CSS stylesheets into <head>

const stylesheets = [
  "styles/navbar.css",
  "styles/layout.css",
  "styles/form.css",
  "styles/palette.css",
  "styles/utils.css"
];

stylesheets.forEach(href => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
});
