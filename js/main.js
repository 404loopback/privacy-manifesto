(function() {
  var STORAGE_KEY = "pm-color-theme";

  function getPreferredTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function getSavedTheme() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Ignore storage errors (private mode, blocked storage, etc.)
    }
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
  }

  function currentTheme() {
    return document.documentElement.classList.contains("theme-dark") ? "dark" : "light";
  }

  function updateToggleLabel(button) {
    if (!button) return;
    button.textContent = currentTheme() === "dark" ? "light" : "dark";
  }

  function initTheme() {
    var initialTheme = getSavedTheme() || getPreferredTheme();
    applyTheme(initialTheme);
  }

  function initToggle() {
    var button = document.getElementById("theme-toggle");
    if (!button) return;

    updateToggleLabel(button);
    button.addEventListener("click", function() {
      var nextTheme = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      saveTheme(nextTheme);
      updateToggleLabel(button);
    });
  }

  initTheme();
  document.addEventListener("DOMContentLoaded", initToggle);
})();
