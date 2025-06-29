// utils.js
// Swatch creation, clipboard, and export functions

function createSwatch(color) {
  const swatch = document.createElement("div");
  swatch.className = "swatch";
  const colorBox = document.createElement("div");
  colorBox.className = "color-box";
  colorBox.style.background = color.hex.value;
  const hex = document.createElement("span");
  hex.className = "hex";
  hex.textContent = color.hex.value;
  hex.title = "Click to copy";
  hex.addEventListener("click", function () {
    copyToClipboard(color.hex.value, hex);
  });
  swatch.appendChild(colorBox);
  swatch.appendChild(hex);
  return swatch;
}

function copyToClipboard(text, el) {
  navigator.clipboard.writeText(text).then(() => {
    el.classList.add("copied");
    el.textContent = "Copied!";
    setTimeout(() => {
      el.classList.remove("copied");
      el.textContent = text;
    }, 900);
  });
}

function exportPaletteAsCSS(colors) {
  const cssVars = colors
    .map((color, i) => `  --color${i + 1}: ${color.hex.value};`)
    .join("\n");
  const css = `:root {\n${cssVars}\n}`;
  navigator.clipboard.writeText(css).then(() => {
    showToast("CSS variables copied to clipboard!", "success");
  });
}

document.getElementById("export-css").addEventListener("click", function () {
  const swatches = document.querySelectorAll(".swatch .hex");
  if (swatches.length === 0) {
    showToast("Generate a palette first!");
    return;
  }
  const colors = Array.from(swatches).map((el) => ({
    hex: { value: el.textContent },
  }));
  exportPaletteAsCSS(colors);
});
