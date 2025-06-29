document
  .getElementById("color-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const seedColor = document
      .getElementById("seed-color")
      .value.replace("#", "");
    const mode = document.getElementById("mode").value;
    const url = `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}&count=5`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      displayScheme(data.colors);
    } catch (err) {
      document.getElementById("scheme").innerHTML =
        "<p>Failed to fetch scheme.</p>";
    }
  });

function displayScheme(colors) {
  const schemeDiv = document.getElementById("scheme");
  schemeDiv.innerHTML = "";
  const topRowCount = Math.ceil(colors.length / 2);
  const bottomRowCount = colors.length - topRowCount;
  if (colors.length > 1) {
    const topRow = document.createElement("div");
    topRow.className = "swatch-row top-row flex justify-center";
    const bottomRow = document.createElement("div");
    bottomRow.className = "swatch-row bottom-row flex justify-center";
    for (let i = 0; i < topRowCount; i++) {
      topRow.appendChild(createSwatch(colors[i]));
    }
    for (let i = topRowCount; i < colors.length; i++) {
      bottomRow.appendChild(createSwatch(colors[i]));
    }
    schemeDiv.appendChild(topRow);
    if (bottomRowCount > 0) schemeDiv.appendChild(bottomRow);
  } else {
    // fallback: display all in a row
    colors.forEach((color) => {
      schemeDiv.appendChild(createSwatch(color));
    });
  }
}

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
    alert("CSS variables copied to clipboard!");
  });
}

document.getElementById("export-css").addEventListener("click", function () {
  const swatches = document.querySelectorAll(".swatch .hex");
  if (swatches.length === 0) {
    alert("Generate a palette first!");
    return;
  }
  const colors = Array.from(swatches).map((el) => ({
    hex: { value: el.textContent },
  }));
  exportPaletteAsCSS(colors);
});
