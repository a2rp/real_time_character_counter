window.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#input");
  const remaining = document.querySelector("#remaining");
  const helperText = document.querySelector("#helper-text");
  const wordCount = document.querySelector("#word-count");
  const lineCount = document.querySelector("#line-count");
  const characterCount = document.querySelector("#character-count");
  const clearButton = document.querySelector("#clear-button");
  const topButton = document.querySelector("#top-button");
  const menuButton = document.querySelector("#menu-button");
  const mobileMenu = document.querySelector("#mobile-menu");
  const maxLength = Number(input.maxLength);

  const updateCounter = () => {
    const text = input.value;
    const left = maxLength - text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text ? text.split(/\n/).length : 0;

    remaining.textContent = String(left).padStart(2, "0");
    remaining.className = left > 30 ? "remaining safe" : left > 15 ? "remaining caution" : "remaining warning";
    helperText.textContent = left + " character" + (left === 1 ? "" : "s") + " left";
    wordCount.textContent = words;
    lineCount.textContent = lines;
    characterCount.textContent = text.length;
  };

  const closeMenu = () => {
    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  };

  input.addEventListener("input", updateCounter);
  clearButton.addEventListener("click", () => {
    input.value = "";
    updateCounter();
    input.focus();
  });

  menuButton.addEventListener("click", () => {
    const shouldOpen = mobileMenu.hidden;
    mobileMenu.hidden = !shouldOpen;
    menuButton.setAttribute("aria-expanded", String(shouldOpen));
    menuButton.setAttribute("aria-label", shouldOpen ? "Close menu" : "Open menu");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("scroll", () => {
    topButton.hidden = window.scrollY < 420;
  }, { passive: true });
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.querySelector("#year").textContent = new Date().getFullYear();
  input.focus();
  updateCounter();
});
