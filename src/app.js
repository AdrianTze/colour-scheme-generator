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
  colors.forEach((color) => {
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
    schemeDiv.appendChild(swatch);
  });
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
