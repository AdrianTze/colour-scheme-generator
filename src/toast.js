// toast.js
// Toast notification system

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
