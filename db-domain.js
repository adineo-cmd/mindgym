/* ============================================================
   THE MIND GYM — database domain page renderer
   ============================================================ */
(function () {
  "use strict";
  const { esc } = window;

  const CAT_COLOR = {
    Core: "#2437FF", Performance: "#E8590C", Cognition: "#0E9384",
    Foundation: "#7C3AED", Domains: "#2F9E44", Social: "#E89700",
  };

  const slug = document.body.dataset.slug;
  const d = window.DB_TECHNIQUES[slug];
  const root = document.getElementById("db-content");

  if (!d) {
    root.innerHTML = '<p class="empty-note">Technique data for this domain failed to load.</p>';
    return;
  }

  const color = CAT_COLOR[d.category] || "#2437FF";
  const total = d.subdomains.reduce((a, s) => a + s.techniques.length, 0);
  document.querySelector("[data-crumb-name]").textContent = d.name;

  const tierOrder = ["Beginner", "Intermediate", "Advanced"];

  root.innerHTML = `
    <header class="db-domain-head" style="--cc:${color}">
      <span class="cat-chip">${esc(d.category)}</span>
      <h1>${esc(d.name)}</h1>
      <p class="db-domain-meta">${total} techniques · ${d.subdomains.length} sub-domains · tiered Beginner → Advanced</p>
    </header>

    <div class="db-toolbar">
      <nav class="db-pills" aria-label="Sub-domains">
        ${d.subdomains
          .map((s, i) => `<a class="db-pill" href="#sub-${i}">${esc(s.name)} <i>${s.techniques.length}</i></a>`)
          .join("")}
      </nav>
      <div class="db-expand">
        <button type="button" id="expand-all" class="btn btn-ghost btn-sm">Expand all</button>
        <button type="button" id="collapse-all" class="btn btn-ghost btn-sm">Collapse all</button>
      </div>
    </div>

    <div class="db-toc-note">Each sub-domain opens on its own — start with Beginner and climb the tiers like plate weight.</div>

    ${d.subdomains
      .map(
        (s, i) => `
      <details class="sub-block" id="sub-${i}" ${i === 0 ? "open" : ""} style="--cc:${color}">
        <summary>
          <span class="sub-name">${esc(s.name)}</span>
          <span class="sub-count">${s.techniques.length} techniques</span>
          <span class="sub-chevron" aria-hidden="true"></span>
        </summary>
        <div class="sub-body">
          ${tierOrder
            .map((tier) => {
              const rows = s.techniques.filter((t) => t.tier === tier);
              if (!rows.length) return "";
              return `
              <div class="tier-head"><span class="tier-chip tier-${tier[0].toLowerCase()}">${tier}</span><span>${rows.length} techniques</span></div>
              <div class="ex-rows">
                ${rows
                  .map(
                    (t) => `
                <div class="ex-row">
                  <span class="ex-name">${esc(t.name)}</span>
                  <span class="ex-rx">${esc(t.rx)}</span>
                  <span class="ex-how">${esc(t.how)}</span>
                </div>`
                  )
                  .join("")}
              </div>`;
            })
            .join("")}
        </div>
      </details>`
      )
      .join("")}

    <nav class="db-back"><a href="../database.html" class="btn btn-ghost">← All 30 domains</a></nav>

    <p class="db-source">Source: adapted from <a href="https://adineo-cmd.github.io/personal/mind" target="_blank" rel="noopener">OmniMind</a> by adineo. The curated starter version of each muscle group lives in <a href="../gym.html">The Gym</a>.</p>`;

  document.getElementById("expand-all").addEventListener("click", () => {
    root.querySelectorAll("details").forEach((dd) => (dd.open = true));
  });
  document.getElementById("collapse-all").addEventListener("click", () => {
    root.querySelectorAll("details").forEach((dd) => (dd.open = false));
  });
})();
