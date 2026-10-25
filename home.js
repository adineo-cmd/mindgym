/* ============================================================
   THE MIND GYM — home page: interactive brain map
   ============================================================ */
(function () {
  "use strict";
  const { esc } = window;

  const ZONES = {
    learning: { d: "M 80,150 C 62,118 78,84 118,68 C 158,52 222,48 260,70 C 277,80 272,102 252,114 C 220,132 180,138 150,150 C 120,162 96,164 80,150 Z", label: "Learning", lx: 158, ly: 104 },
    focus: { d: "M 68,158 C 92,172 124,170 152,156 C 184,140 222,134 250,120 C 264,142 258,170 238,188 C 210,208 168,210 136,202 C 104,196 74,184 68,158 Z", label: "Focus", lx: 158, ly: 178 },
    memory: { d: "M 268,72 C 306,56 356,64 384,92 C 402,112 398,142 378,154 C 348,170 308,168 282,150 C 262,136 262,104 268,72 Z", label: "Memory", lx: 326, ly: 112 },
    processing: { d: "M 386,160 C 406,178 404,214 384,236 C 364,256 330,260 306,246 C 288,234 286,208 296,188 C 308,166 362,152 386,160 Z", label: "Processing", lx: 356, ly: 214 },
    emotional: { d: "M 262,162 C 288,152 312,164 314,188 C 315,210 294,224 270,218 C 250,212 240,172 262,162 Z", label: "Emotion", lx: 276, ly: 184 },
    social: { d: "M 150,210 C 190,218 232,216 264,226 C 292,234 302,250 288,264 C 270,280 226,284 190,278 C 156,272 130,254 138,234 C 141,222 144,214 150,210 Z", label: "Social", lx: 212, ly: 250 },
    grit: { d: "M 318,242 C 344,230 376,238 388,260 C 398,280 388,304 364,312 C 340,320 314,310 306,288 C 300,270 306,250 318,242 Z", stem: "M 330,312 C 343,310 351,318 349,332 C 347,348 338,354 330,352 C 322,350 320,340 322,328 C 323,320 325,314 330,312 Z", label: "Grit", lx: 346, ly: 278 },
  };

  const jumpToGroup = (id) => { location.href = "gym.html#group-" + id; };

  const g = document.getElementById("brain-zones");
  const labels = document.getElementById("brain-labels");
  const order = ["learning", "focus", "memory", "processing", "social", "grit", "emotional"];
  const svgTag = "http://www.w3.org/2000/svg";

  order.forEach((zid) => {
    const z = ZONES[zid];
    const grp = GROUPS.find((x) => x.id === zid);
    const node = document.createElementNS(svgTag, "g");
    node.setAttribute("class", "zone");
    node.setAttribute("tabindex", "0");
    node.setAttribute("role", "link");
    node.setAttribute("aria-label", grp.name + " — open training");
    node.dataset.zone = zid;
    const mk = (d) => {
      const p = document.createElementNS(svgTag, "path");
      p.setAttribute("d", d);
      p.setAttribute("fill", grp.color);
      return p;
    };
    node.appendChild(mk(z.d));
    if (z.stem) node.appendChild(mk(z.stem));

    const gyri = document.createElementNS(svgTag, "path");
    gyri.setAttribute("d", zid === "grit" ? "M 322 262 q 14 -8 28 2 M 318 280 q 16 -6 30 4" : `M ${z.lx - 34} ${z.ly + 24} q 18 -12 36 0`);
    gyri.setAttribute("fill", "none");
    gyri.setAttribute("stroke", "rgba(255,255,255,0.4)");
    gyri.setAttribute("stroke-width", "3");
    gyri.setAttribute("stroke-linecap", "round");
    node.appendChild(gyri);

    const label = document.createElementNS(svgTag, "text");
    label.setAttribute("x", z.lx);
    label.setAttribute("y", z.ly);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("class", "zone-text");
    label.textContent = z.label;
    labels.appendChild(label);

    const on = () => node.classList.add("active");
    const off = () => node.classList.remove("active");
    node.addEventListener("mouseenter", on);
    node.addEventListener("mouseleave", off);
    node.addEventListener("focus", on);
    node.addEventListener("blur", off);
    node.addEventListener("click", () => jumpToGroup(zid));
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); jumpToGroup(zid); }
    });
    g.appendChild(node);
  });

  const legend = document.getElementById("map-legend");
  GROUPS.forEach((grp) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "legend-btn";
    b.innerHTML = `<span class="legend-dot" style="background:${grp.color}"></span>${esc(grp.name)}`;
    b.addEventListener("click", () => jumpToGroup(grp.id));
    legend.appendChild(b);
  });
})();
