let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
if (saved) document.documentElement.dataset.theme = saved;

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".theme-toggle");

  toggles.forEach((toggle) => {
    toggle.checked = document.documentElement.dataset.theme !== "light";

    toggle.addEventListener("change", () => {
      const theme = toggle.checked ? "dark" : "light";
      document.documentElement.dataset.theme = theme;
      toggles.forEach((t) => (t.checked = toggle.checked));
      try { localStorage.setItem("theme", theme); } catch (e) {}
    });
  });
});
