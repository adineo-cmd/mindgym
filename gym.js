/* ============================================================
   THE MIND GYM — gym page
   ============================================================ */
(function () {
  "use strict";
  const { esc } = window;

  const ICONS = {
    focus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>',
    memory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="12" rx="2.5"/><path d="M7 7V5.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2V7M3 12h18"/></svg>',
    processing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2Z"/></svg>',
    learning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9 12 4 2 9l10 5 10-5Z"/><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/></svg>',
    emotional: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5s-8-4.7-8-10A4.4 4.4 0 0 1 12 7.6 4.4 4.4 0 0 1 20 10.5c0 5.3-8 10-8 10Z"/></svg>',
    social: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.5" cy="8" r="3"/><circle cx="16" cy="9.5" r="2.4"/><path d="M3 20c.5-3.5 2.8-5.5 5.5-5.5S13.5 16.5 14 20M14.5 15.6c2.4-.3 5 1.4 5.5 4.4"/></svg>',
    grit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 20 9 13.5M15 4l5 5-8.5 8.5a3.5 3.5 0 0 1-5-5L15 4Z"/></svg>',
  };

  const wrap = document.getElementById("gym-groups");
  GROUPS.forEach((grp) => {
    const block = document.createElement("section");
    block.className = "gym-group";
    block.id = "group-" + grp.id;
    block.style.setProperty("--gc", grp.color);

    const head = document.createElement("div");
    head.className = "group-head";
    head.innerHTML = `
      <span class="group-plate">${ICONS[grp.id]}</span>
      <div class="group-title"><h3>${esc(grp.name)}</h3><p>${esc(grp.tagline)}</p></div>
      <span class="group-count">${grp.exercises.length} exercises</span>`;

    const body = document.createElement("div");
    body.className = "group-body";
    body.innerHTML = `
      <div class="anatomy"><h4>Anatomy <span>· what this muscle is</span></h4><p>${esc(grp.anatomy)}</p></div>
      <div class="signs">
        <div class="sign-lists">
          <div class="sign-list weak"><h4>Untrained</h4><ul>${grp.weak.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
          <div class="sign-list trained"><h4>Trained</h4><ul>${grp.trained.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
        </div>
      </div>`;

    const table = document.createElement("div");
    table.className = "group-table";
    table.innerHTML =
      `<div class="ex-rows">` +
      grp.exercises
        .map(
          (x) => `
        <div class="ex-row">
          <span class="ex-name">${esc(x.name)}</span>
          <span class="ex-rx">${esc(x.rx)}</span>
          <span><span class="tier-chip tier-${x.tier[0].toLowerCase()}">${esc(x.tier)}</span></span>
          <span class="ex-how">${esc(x.how)}</span>
        </div>`
        )
        .join("") +
      `</div>`;

    const prog = document.createElement("div");
    prog.className = "group-prog";
    prog.innerHTML = `<div class="prog-note"><strong>Progression:</strong><span>${esc(grp.progression)}</span></div>`;

    block.append(head, body, table, prog);
    wrap.appendChild(block);
  });

  /* deep link: gym.html#group-<id> */
  if (location.hash.startsWith("#group-")) {
    const id = location.hash.slice(7);
    const target = document.getElementById("group-" + id);
    if (target) {
      target.scrollIntoView({ behavior: window.prefersReduced() ? "auto" : "smooth", block: "start" });
      target.classList.add("flash");
    }
  }
})();
