/* ============================================================
   THE MIND GYM — model library page
   ============================================================ */
(function () {
  "use strict";
  const { esc } = window;

  const groupById = Object.fromEntries(GROUPS.map((g) => [g.id, g]));
  const CATEGORY_ORDER = [
    "Reasoning & Problem-Solving",
    "Cognitive Biases",
    "Social Dynamics & Influence",
    "Decision-Making & Productivity",
    "Behavior & Motivation",
    "Everyday Effects",
  ];
  const DIFF_LABEL = { 1: "Easy to apply", 2: "Takes practice", 3: "Deep work" };
  const TRAINS_LABEL = {
    focus: "focus", memory: "memory", processing: "processing speed",
    learning: "learning", emotional: "emotional control",
    social: "social intelligence", grit: "grit & resilience",
  };

  let activeCat = "All";
  let searchTerm = "";

  /* ---------- chips ---------- */
  const chipWrap = document.getElementById("cat-chips");
  ["All", ...CATEGORY_ORDER].forEach((cat) => {
    const count = cat === "All" ? MODELS.length : MODELS.filter((m) => m.category === cat).length;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.setAttribute("aria-pressed", String(cat === activeCat));
    b.innerHTML = `${esc(cat)}<span class="count">${count}</span>`;
    b.addEventListener("click", () => {
      activeCat = cat;
      chipWrap.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false"));
      b.setAttribute("aria-pressed", "true");
      renderModels();
    });
    chipWrap.appendChild(b);
  });

  /* ---------- grid ---------- */
  function renderModels() {
    const grid = document.getElementById("model-grid");
    const empty = document.getElementById("model-empty");
    const q = searchTerm.trim().toLowerCase();
    const list = MODELS.filter((m) => {
      const catOk = activeCat === "All" || m.category === activeCat;
      const qOk = !q || (m.name + " " + m.tagline + " " + m.category).toLowerCase().includes(q);
      return catOk && qOk;
    });
    grid.innerHTML = "";
    empty.hidden = list.length > 0;
    list.forEach((m) => {
      const grp = groupById[m.trains];
      const li = document.createElement("li");
      const card = document.createElement("button");
      card.type = "button";
      card.className = "model-card";
      card.setAttribute("aria-haspopup", "dialog");
      card.style.setProperty("--gc", grp.color);
      card.innerHTML = `
        <span class="card-top"><h3>${esc(m.name)}</h3></span>
        <span class="cat-chip">${esc(m.category)}</span>
        <span class="tagline">${esc(m.tagline)}</span>
        <span class="card-foot"><span class="trains-chip">trains ${TRAINS_LABEL[grp.id]}</span></span>`;
      card.addEventListener("click", () => openModal(m.slug));
      li.appendChild(card);
      grid.appendChild(li);
    });
  }

  /* ---------- modal ---------- */
  const backdrop = document.getElementById("modal");
  const modalBox = backdrop.querySelector(".modal");
  let lastFocused = null;

  function modalCardHTML(m) {
    const grp = groupById[m.trains];
    const dots = [1, 2, 3].map((i) => `<span class="${i <= m.diff ? "on" : "off"}">●</span>`).join("");
    const related = m.related
      .map((s) => MODELS.find((x) => x.slug === s))
      .filter(Boolean)
      .map((r) => `<button type="button" class="related-btn" data-slug="${r.slug}">${esc(r.name)}</button>`)
      .join("");
    const wiki = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(m.name)}`;
    return `
      <button type="button" class="modal-close" aria-label="Close model details">✕</button>
      <h2 id="modal-name">${esc(m.name)}</h2>
      <div class="m-chips" style="--gc:${grp.color}">
        <span class="cat-chip">${esc(m.category)}</span>
        <span class="cat-chip">${esc(grp.name)}</span>
      </div>
      <p class="m-tag">${esc(m.tagline)}</p>
      <div class="m-section"><h4>What it is</h4><p>${esc(m.desc)}</p></div>
      <div class="m-section"><h4>In real life</h4><ul>${m.examples.map((e) => `<li>${esc(e)}</li>`).join("")}</ul></div>
      <div class="m-section"><div class="m-apply" style="--gc:${grp.color}"><h4>Use it like this</h4><p>${esc(m.apply)}</p></div></div>
      <div class="m-section">
        <div class="m-meta" style="--gc:${grp.color}">
          <div class="meta-item"><span class="meta-label">Trains</span><span class="meta-value">${esc(grp.name)}</span></div>
          <div class="meta-item"><span class="meta-label">Difficulty</span><span class="meta-value diff-dots">${dots}</span><span class="meta-label" style="display:block;margin-top:2px">${DIFF_LABEL[m.diff]}</span></div>
          <div class="meta-item"><span class="meta-label">Origin</span><span class="meta-value">${esc(m.coined)}</span></div>
        </div>
      </div>
      <div class="m-section"><h4>Related models</h4><div class="m-related">${related}</div></div>
      <div class="m-section"><a class="m-wiki" href="${wiki}" target="_blank" rel="noopener">Read more on Wikipedia ↗</a></div>
      <div class="m-gym-link" style="--gc:${grp.color}"><a href="gym.html#group-${grp.id}">Train this muscle: ${esc(grp.name)} →</a></div>`;
  }

  function wireModal(slug) {
    const m = MODELS.find((x) => x.slug === slug);
    if (!m) return;
    modalBox.dataset.slug = slug;
    modalBox.innerHTML = modalCardHTML(m);
    modalBox.querySelectorAll(".related-btn").forEach((b) => b.addEventListener("click", () => wireModalWithHash(b.dataset.slug)));
    const closeBtn = modalBox.querySelector(".modal-close");
    closeBtn.addEventListener("click", closeModal);
    closeBtn.focus();
  }

  function openModal(slug, setHash) {
    lastFocused = document.activeElement;
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    wireModal(slug);
    if (setHash !== false) history.replaceState(null, "", "#model/" + slug);
  }
  const wireModalWithHash = (slug) => openModal(slug);

  function closeModal() {
    backdrop.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    if (location.hash.startsWith("#model/")) history.replaceState(null, "", location.pathname + location.search);
  }

  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !backdrop.hidden) closeModal(); });

  /* ---------- search ---------- */
  const search = document.getElementById("model-search");
  search.addEventListener("input", () => { searchTerm = search.value; renderModels(); });
  search.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      search.value = "";
      searchTerm = "";
      renderModels();
      search.blur();
    }
  });
  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (e.key === "/" && tag !== "input" && tag !== "textarea") {
      e.preventDefault();
      search.focus();
    }
  });

  /* ---------- boot ---------- */
  renderModels();

  if (location.hash.startsWith("#model/")) {
    const slug = location.hash.slice(7);
    if (MODELS.some((m) => m.slug === slug)) openModal(slug, false);
  }
  window.addEventListener("hashchange", () => {
    const h = location.hash;
    if (h.startsWith("#model/")) {
      const slug = h.slice(7);
      if (MODELS.some((m) => m.slug === slug) && (backdrop.hidden || modalBox.dataset.slug !== slug)) openModal(slug, false);
    } else if (!backdrop.hidden) {
      closeModal();
    }
  });
})();
