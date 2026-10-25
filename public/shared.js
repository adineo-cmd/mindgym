/* ============================================================
   THE MIND GYM — shared runtime (theme, utils, offline)
   ============================================================ */
(function () {
  "use strict";

  window.esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  window.prefersReduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const btn = document.getElementById("theme-toggle");
  if (btn) {
    const apply = (t) => {
      document.documentElement.dataset.theme = t;
      btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
    };
    apply(document.documentElement.dataset.theme || "light");
    btn.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      apply(next);
      try { localStorage.setItem("mg-theme", next); } catch (e) {}
    });
  }

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    const base = location.pathname.includes("/database/") ? "../" : "./";
    window.addEventListener("load", () => {
      navigator.serviceWorker.register(base + "sw.js").catch(() => {});
    });
  }
})();
