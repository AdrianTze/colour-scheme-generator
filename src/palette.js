// palette.js
// Handles palette generation and display

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
