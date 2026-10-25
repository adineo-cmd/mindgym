/* ============================================================
   THE MIND GYM — program page: split, laws, progression, print
   ============================================================ */
(function () {
  "use strict";
  const { esc } = window;

  const groupById = Object.fromEntries(GROUPS.map((g) => [g.id, g]));
  const kindLabel = { train: "Training day", recover: "Active recovery", rest: "Rest day" };
  let currentDayIdx = 0;

  const tabs = document.getElementById("split-tabs");
  const panel = document.getElementById("split-panel");

  SPLIT.forEach((d, i) => {
    const t = document.createElement("button");
    t.type = "button";
    t.className = "split-tab";
    t.setAttribute("role", "tab");
    t.dataset.kind = d.kind;
    t.dataset.idx = i;
    t.style.setProperty("--tab-c", d.group ? groupById[d.group].color : "#17171A");
    t.innerHTML = `<span class="d">${d.day}</span><span class="n">${esc(d.name)}</span>`;
    t.addEventListener("click", () => selectDay(i));
    tabs.appendChild(t);
  });

  function selectDay(i, focusTab) {
    currentDayIdx = i;
    const d = SPLIT[i];
    tabs.querySelectorAll(".split-tab").forEach((t, j) => {
      t.setAttribute("aria-selected", String(i === j));
      t.tabIndex = i === j ? 0 : -1;
    });
    const c = d.group ? groupById[d.group].color : "#2F9E44";
    panel.style.setProperty("--sc", c);
    panel.innerHTML = `
      <div class="split-panel-head">
        <h3>${d.day} — ${esc(d.name)}</h3>
        <span class="split-kind ${d.kind === "rest" ? "rest" : ""}">${kindLabel[d.kind]}</span>
      </div>
      <ul class="session-list">
        ${d.sessions
          .map(
            (s) => `
          <li class="session"><div class="session-body">
            <span class="s-label">${esc(s.label)}</span>
            <span class="s-item">${esc(s.item)}</span>
          </div></li>`
          )
          .join("")}
      </ul>
      <div class="split-note"><div>${esc(d.note)}</div></div>`;
    if (focusTab) {
      const target = tabs.querySelector(`[data-idx="${i}"]`);
      if (target) target.focus({ preventScroll: true });
    }
  }

  tabs.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = e.key === "ArrowRight" ? (currentDayIdx + 1) % SPLIT.length : (currentDayIdx + SPLIT.length - 1) % SPLIT.length;
    selectDay(next, true);
  });

  const today = new Date().getDay();
  selectDay(today === 0 ? 6 : today - 1);

  /* laws */
  const lawsGrid = document.getElementById("laws-grid");
  LAWS.forEach((law, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="law-num">${String(i + 1).padStart(2, "0")}</div><h3>${esc(law.name)}</h3><p>${esc(law.text)}</p>`;
    lawsGrid.appendChild(li);
  });

  /* progression */
  document.getElementById("prog-table").innerHTML = PROGRESSION.map(
    (p) => `
    <div class="prog-row">
      <span class="p-lift">${esc(p.lift)}</span>
      <span class="p-scheme">${esc(p.scheme)}</span>
      ${p.from === "—"
        ? `<span class="p-arrow"><span class="na">Always in effect — program it, don't improvise it.</span></span>`
        : `<span class="p-arrow"><span class="from">${esc(p.from)}</span><span class="to">→ ${esc(p.to)}</span></span>`}
    </div>`
  ).join("");

  /* print */
  function fillPrintProgram() {
    document.getElementById("print-program").innerHTML = `
      <h1>The Mind Gym — Weekly Program</h1>
      <p class="print-sub">7-day training split</p>
      ${SPLIT.map(
        (d) => `
        <section class="print-day">
          <h2>${d.day} — ${esc(d.name)}</h2>
          <ul>
            ${d.sessions.map((s) => `<li>☐ <strong>${esc(s.label)}:</strong> ${esc(s.item)}</li>`).join("")}
          </ul>
        </section>`
      ).join("")}
      <p class="print-foot">Stress + recovery = growth · The Mind Gym</p>`;
  }
  document.getElementById("print-btn").addEventListener("click", () => { fillPrintProgram(); window.print(); });
  window.addEventListener("beforeprint", fillPrintProgram);
})();
