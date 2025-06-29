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
      showToast("Failed to fetch scheme.");
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
    showToast("CSS variables copied to clipboard!", (type = "success"));
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

let toastActive = false;
function showToast(message, type = "error") {
  if (toastActive) return;
  toastActive = true;
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.style.minWidth = "180px";
  toast.style.maxWidth = "320px";
  toast.style.background = type === "error" ? "#f44336" : "#27ae60";
  toast.style.color = "#fff";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)";
  toast.style.fontSize = "1rem";
  toast.style.marginTop = "2px";
  toast.style.opacity = "0.95";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "8px";
  toast.style.cursor = "pointer";
  toast.innerHTML = `<span class='toast-icon' aria-hidden='true'>${
    type === "error" ? "⚠️" : "✅"
  }</span> <span>${message}</span>`;
  toast.onclick = () => {
    if (container.contains(toast)) container.removeChild(toast);
    toastActive = false;
  };
  container.appendChild(toast);
  setTimeout(() => {
    if (container.contains(toast)) container.removeChild(toast);
    toastActive = false;
  }, 3500);
}
