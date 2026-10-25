/* ============================================================
   THE MIND GYM — database catalog page
   ============================================================ */
(function () {
  "use strict";
  const { esc } = window;

  const CAT_COLOR = {
    Core: "#2437FF", Performance: "#E8590C", Cognition: "#0E9384",
    Foundation: "#7C3AED", Domains: "#2F9E44", Social: "#E89700",
  };
  const CAT_BLURB = {
    Core: "The fundamental trainable functions: attention, memory, learning, emotional regulation, awareness.",
    Performance: "Getting into the zone on purpose — rehearsal, priming, and flow triggers.",
    Cognition: "Thinking strategically about leverage, environment, and control.",
    Foundation: "The hardware layer: sleep, nervous system, meaning, and measurement.",
    Domains: "Applied super-skills: memory systems, speed reading, meta-learning, comprehension.",
    Social: "Reading, speaking, and leading people — rapport to rhetoric to groups.",
  };

  const C = window.DB_CATALOG;
  const app = document.getElementById("db-app");
  let q = "";

  document.getElementById("db-total-count").textContent = C.total.toLocaleString();

  function render() {
    const query = q.trim().toLowerCase();
    app.innerHTML = "";
    ["Core", "Performance", "Cognition", "Foundation", "Domains", "Social"].forEach((cat) => {
      const domains = C.domains.filter(
        (d) => d.category === cat &&
          (!query || (d.name + " " + d.subdomains.map((s) => s.name).join(" ")).toLowerCase().includes(query))
      );
      if (!domains.length) return;
      const sec = document.createElement("section");
      sec.className = "db-cat";
      sec.style.setProperty("--cc", CAT_COLOR[cat]);
      sec.innerHTML = `
        <div class="db-cat-head">
          <h2>${esc(cat)}</h2>
          <p>${esc(CAT_BLURB[cat])}</p>
          <span class="db-cat-count">${domains.length} domains · ${domains.reduce((a, d) => a + d.total, 0)} techniques</span>
        </div>
        <div class="db-grid">
          ${domains
            .map(
              (d) => `
          <a class="db-card" href="database/${d.slug}.html" style="--cc:${CAT_COLOR[d.category]}">
            <div class="db-card-top">
              <h3>${esc(d.name)}</h3>
              <span class="db-card-count">${d.total}</span>
            </div>
            <div class="db-card-subs">
              ${d.subdomains.map((s) => `<span class="db-sub">${esc(s.name)} <i>${s.count}</i></span>`).join("")}
            </div>
          </a>`
            )
            .join("")}
        </div>`;
      app.appendChild(sec);
    });
    if (!app.children.length) {
      app.innerHTML = '<p class="empty-note">No domains match that search.</p>';
    }
  }

  const search = document.getElementById("db-search");
  search.addEventListener("input", () => { q = search.value; render(); });
  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (e.key === "/" && tag !== "input" && tag !== "textarea") {
      e.preventDefault();
      search.focus();
    }
  });

  render();
})();
