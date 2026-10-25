/* ============================================================
   THE MIND GYM — anatomy page: brain regions, what they do,
   and how to train them. Regions are a gym floor plan, not an
   atlas — real brains are networks, not boxes.
   ============================================================ */
(function () {
  "use strict";
  const { esc } = window;

  const CATS = {
    cortex: { name: "The cortex", color: "#2437FF", blurb: "The wrinkled outer wrap — planning, language, sight, and self-control. The newest and most 'you' part." },
    deep: { name: "The deep structures", color: "#D6336C", blurb: "The ancient core underneath — memory, fear, habits, hormones, motivation. Fast, powerful, older than words." },
    base: { name: "The base", color: "#0E9384", blurb: "The brainstem and cerebellum — breathing, alertness, precision. You can't reason with it; you train it through the body." },
    networks: { name: "The networks", color: "#E89700", blurb: "Regions working as systems — the bridge between hemispheres and the daydreaming network that consolidates it all." },
  };

  const ANATOMY = [
    /* ---------- CORTEX ---------- */
    {
      id: "pfc", cat: "cortex", name: "Prefrontal cortex", aka: "The executive",
      where: "Right behind your forehead",
      job: "Planning, decision-making, impulse control, and working memory — everything that stands between a thought and an action. It's the last brain region to fully mature (around age 25) and the first to fog over when you're tired or drunk.",
      weak: ["Decisions made on impulse, regretted by evening", "Plans made Sunday, abandoned Wednesday", "Reaching for the phone before deciding to"],
      trained: ["A planned week that mostly survives contact with reality", "Urges noticed and chosen against — sometimes", "Fifty minutes of unbroken deep work, on purpose"],
      train: [
        { t: "Task Timer Sprints — long single-task blocks are direct PFC load", link: "gym.html#group-focus" },
        { t: "Interruption Recovery Drill — rebuilding executive control in seconds", link: "gym.html#group-focus" },
        { t: "Delayed Gratification & Quit Criteria — decided-in-advance decisions", link: "gym.html#group-grit" },
        { t: "Working Memory Expansion — the PFC's mental scratchpad", link: "gym.html#group-processing" },
      ],
      note: "Treat it like a battery: it depletes with use and recharges with sleep and glucose regulation. Guard the morning for its heaviest work.",
    },
    {
      id: "acc", cat: "cortex", name: "Anterior cingulate cortex", aka: "The quality controller",
      where: "A collar of cortex wrapping the inner front of the brain",
      job: "Error detection and conflict monitoring — the 'wait, something's off' feeling. It fires when you notice a mistake, resist a temptation, or push through something difficult; it also overlaps physical and emotional pain.",
      weak: ["The same mistake, again, unnoticed", "Avoiding hard choices because conflict is uncomfortable", "Giving up at the first friction"],
      trained: ["Catching your own errors mid-task", "Staying in the difficult conversation", "Friction read as signal, not stop sign"],
      train: [
        { t: "Interference Resistance — holding quality under conflict", link: "gym.html#group-focus" },
        { t: "Cognitive Reappraisal & Opposite Action — retraining the struggle response", link: "gym.html#group-emotional" },
        { t: "Cold exposure with calm breathing — controlled conflict, dosed", link: "gym.html#group-grit" },
      ],
      note: "Meditators show increased ACC activity and better error awareness — noticing earlier is the trainable part.",
    },
    {
      id: "parietal", cat: "cortex", name: "Parietal lobe", aka: "The navigator",
      where: "Top-back of the skull",
      job: "Spatial reasoning, attention allocation, number sense, and your body's map in the world. The right parietal especially decides what in space deserves your attention.",
      weak: ["Lost the moment GPS goes quiet", "Mental math panic", "Clumsy in new spaces"],
      trained: ["Mental rotation without pen and paper", "Navigating a new city by landmark, not pin", "Numbers held and compared in the head"],
      train: [
        { t: "Mental Rotation & Pattern Recognition Drills", link: "gym.html#group-processing" },
        { t: "Memory Palace routes — spatial memory is parietal + hippocampus teamwork", link: "gym.html#group-memory" },
        { t: "Take one route a week without GPS", link: null },
        { t: "Full domain: Spatial & Environmental Intelligence — 90 techniques", link: "database/spatialintelligence.html" },
      ],
      note: "Taxi drivers' posterior hippocampi (the parietal's partner) grow with years of navigation — spatial use changes the hardware.",
    },
    {
      id: "temporal", cat: "cortex", name: "Temporal lobe", aka: "The translator",
      where: "Above and behind each ear",
      job: "Language comprehension, auditory processing, and semantic memory — the meaning of words and sounds. It also houses the hippocampus and amygdala underneath it.",
      weak: ["Words in one ear, out the other", "Podcasts at 1× feel slow but 1.5× loses you", "Vocabulary that never sticks"],
      trained: ["Following fast conversation in noise", "A new language actually forming", "Explanations understood on first hearing"],
      train: [
        { t: "Audio Focus Isolation — track one voice through noise", link: "gym.html#group-focus" },
        { t: "Consolidation by Teaching — comprehension stress-tested", link: "gym.html#group-learning" },
        { t: "Learn a language with spaced repetition — the temporal lobe's favorite meal", link: "gym.html#group-memory" },
        { t: "Full domain: Linguistic & Verbal Mastery — 90 techniques", link: "database/linguisticmastery.html" },
      ],
      note: "",
    },
    {
      id: "occipital", cat: "cortex", name: "Occipital lobe", aka: "The projector",
      where: "The back of the skull",
      job: "All visual processing — edges, motion, faces, words. It's also the screen you use to visualize: memory palaces, mental rehearsal, and reading speed all run on it.",
      weak: ["Rereading pages without seeing them", "Can't picture a friend's face in detail", "Slow, subvocalized reading"],
      trained: ["Speed reading with held comprehension", "Mental rehearsal with real detail", "Names recalled via face-images"],
      train: [
        { t: "Visualization Memory Technique — building the projector's library", link: "gym.html#group-memory" },
        { t: "Speed Reading with Pointer — the occipital at pace", link: "gym.html#group-processing" },
        { t: "Full domain: Visualization & Neural Priming — 60 techniques", link: "database/visualization.html" },
      ],
      note: "",
    },
    {
      id: "insula", cat: "cortex", name: "Insula", aka: "The body reader",
      where: "A fold tucked deep between the frontal and temporal lobes",
      job: "Interoception — sensing your own body's states: heartbeat, breath, fullness, tension. It's where 'I feel off' becomes a precise signal, and it's central to empathy and emotional awareness.",
      weak: ["Noticing stress only when it yells", "Eating past full without noticing", "Emotions felt as fog, not signal"],
      trained: ["Feeling your pulse quiet down in real time", "Tension spotted at the shoulders, not the migraine", "Gut feelings you can actually articulate"],
      train: [
        { t: "Somatic Tracking — find where the emotion physically lives", link: "gym.html#group-emotional" },
        { t: "Anchor Breath Focus — interoceptive attention at the nostrils", link: "gym.html#group-focus" },
        { t: "Body-scan meditation — the insula's home training", link: "database/meditation.html" },
      ],
      note: "Elite athletes and meditators share one measurable edge: finer interoception. You can't regulate what you can't sense.",
    },
    /* ---------- DEEP ---------- */
    {
      id: "hippocampus", cat: "deep", name: "Hippocampus", aka: "The librarian",
      where: "A seahorse-shaped structure inside each temporal lobe",
      job: "Converts experience into long-term memory and builds spatial maps. It's one of the few places where new neurons grow in adult brains — and it grows measurably with aerobic exercise.",
      weak: ["Names and facts evaporating within days", "'Where are my keys' as a lifestyle", "Every street needing GPS"],
      trained: ["Fifteen-item lists recalled in order", "Names kept at parties", "Palace routes holding a semester of material"],
      train: [
        { t: "Spaced Repetition + Active Recall — the librarian's filing system", link: "gym.html#group-memory" },
        { t: "Memory Palace construction", link: "gym.html#group-memory" },
        { t: "Aerobic exercise 20–40 min — literally grows the hippocampus", link: null },
        { t: "Sleep 7–9 hours — consolidation happens here overnight", link: null },
        { t: "Full domain: Hyper-Memory Systems — 90 techniques", link: "database/hypermemory.html" },
      ],
      note: "London taxi drivers' hippocampi are measurably larger after years of 'The Knowledge'. Your memory palace is not a metaphor — it's a gym.",
    },
    {
      id: "amygdala", cat: "deep", name: "Amygdala", aka: "The smoke alarm",
      where: "An almond at the tip of each hippocampus",
      job: "Threat detection and emotional salience — fast, loud, and imprecise. It decides what's worth remembering by how it felt, which is why humiliation outlives trivia.",
      weak: ["Snap reactions you regret within minutes", "2 a.m. spirals", "One scary headline = weeks of avoidance"],
      trained: ["The alarm heard, then checked before evacuation", "Fears faced in small, chosen doses", "Emotion as information, not instruction"],
      train: [
        { t: "Emotion Labeling — naming an emotion measurably turns the amygdala down", link: "gym.html#group-emotional" },
        { t: "Wave Riding — outlasting the ~90-second chemistry peak", link: "gym.html#group-emotional" },
        { t: "Stress Hierarchy — the amygdala learns safety in doses", link: "gym.html#group-grit" },
      ],
      note: "The alarm can't be deleted — only recalibrated. Exposure that stays under panic is retraining; exposure that floods is re-traumatizing. Dose matters.",
    },
    {
      id: "basalganglia", cat: "deep", name: "Basal ganglia", aka: "The autopilot",
      where: "A cluster at the brain's center",
      job: "Habit loops (cue → routine → reward) and procedural skill — everything that becomes automatic. Once it owns a behavior, willpower stops being involved, for better or worse.",
      weak: ["Bad habits running themselves while you watch", "Good behaviors that never survive on autopilot", "Skills stuck at 'needs full concentration'"],
      trained: ["The gym bag packed by pure routine", "Flossing without deciding to", "Skills chunked into fluent units"],
      train: [
        { t: "Micro-Commitments + Never Miss Twice — habits are reps for the autopilot", link: "gym.html#group-grit" },
        { t: "Premack's Principle — wire the reward to the right routine", link: "models.html#model/premacks-principle" },
        { t: "Environment design — the autopilot reads cues, not intentions", link: "program.html#laws" },
        { t: "Drill to automaticity — the processing tier's final boss", link: "gym.html#group-processing" },
      ],
      note: "The autopilot doesn't distinguish good habits from bad — it just automates whatever repeats. Choose what repeats.",
    },
    {
      id: "hypothalamus", cat: "deep", name: "Hypothalamus", aka: "The thermostat",
      where: "Cherry-sized, at the base of the brain above the brainstem",
      job: "Homeostasis: hunger, thirst, temperature, the stress-hormone axis (HPA), and the master circadian clock that sets your day-night rhythm.",
      weak: ["Energy crashes mid-afternoon", "Stress that never fully resolves", "A body clock that shifts with the weekend"],
      trained: ["Stable energy across the day", "Stress that peaks and actually resolves", "Sleep arriving on schedule"],
      train: [
        { t: "Cold exposure — deliberate, dosed temperature stress", link: "gym.html#group-grit" },
        { t: "Deliberate discomfort like eating windows and fasts", link: "gym.html#group-grit" },
        { t: "Fixed wake time + morning light — set the clock where the day starts", link: null },
        { t: "Long-exhale breathing — the HPA axis's brake pedal", link: "gym.html#group-emotional" },
        { t: "Full domain: Neuro-Biological Optimization — 90 techniques", link: "database/neurooptimization.html" },
      ],
      note: "You can't out-think a dysregulated thermostat — no focus drill fixes a broken clock. Biology first, cognition second (Law 11).",
    },
    {
      id: "pituitary", cat: "deep", name: "Pituitary gland", aka: "The hormone dispatcher",
      where: "A pea hanging just below the hypothalamus",
      job: "Translates the hypothalamus's electrical signals into hormones — cortisol (stress), growth, thyroid, reproduction. The hypothalamus decides; the pituitary broadcasts.",
      weak: ["Chronically wired, or chronically flat", "Recovery from stress measured in days", "Sleep that doesn't repair"],
      trained: ["Cortisol rising for events and falling after them", "Growth and repair doing their night shift"],
      train: [
        { t: "Recovery days as programmed, not stolen", link: "program.html#split" },
        { t: "Coherent breathing (~5–6 breaths/min) — calms the axis directly", link: "gym.html#group-emotional" },
        { t: "Sleep Consolidation Protocol — the night shift for the endocrine system", link: "gym.html#group-learning" },
        { t: "Full domain: Sleep & Lucid Dreaming Optimization", link: "database/sleepoptimization.html" },
      ],
      note: "You never train the pituitary directly — you train the inputs it listens to: stress dosing, breath, light, and sleep.",
    },
    {
      id: "reward", cat: "deep", name: "Reward system (VTA + nucleus accumbens)", aka: "The slot machine",
      where: "Deep in the midbrain, projecting everywhere",
      job: "Dopamine — the chemistry of wanting and learning from reward. Variable, unpredictable rewards hit it hardest, which is the entire business model of feeds, likes, and loot boxes.",
      weak: ["Checking the phone like pulling a lever", "Nothing feeling motivating without a hit", "Effort that always loses to frictionless fun"],
      trained: ["Motivation available on schedule", "Rewards arranged to pull you toward goals", "Delay tolerated — and worth it"],
      train: [
        { t: "First-then contracts — reward locked behind effort (Premack)", link: "models.html#model/premacks-principle" },
        { t: "Hyperbolic discounting countermeasures — make the future reward visible", link: "models.html#model/hyperbolic-discounting" },
        { t: "Delayed Gratification practice, daily and deliberate", link: "gym.html#group-grit" },
        { t: "Variable-reward sources (feeds, games) on a timer, not a leash", link: null },
      ],
      note: "Dopamine is about wanting, not enjoying — which is why the fourth hour of scrolling feels compulsory, not fun. Design the wanting.",
    },
    /* ---------- BASE ---------- */
    {
      id: "medulla", cat: "base", name: "Medulla oblongata", aka: "Life support",
      where: "The lowest part of the brainstem, at the skull's base",
      job: "Breathing, heart rate, blood pressure, and reflexes — fully unconscious and utterly non-negotiable. You cannot 'train' it like memory, but breath is its remote control: long exhales stimulate the vagus nerve and apply the parasympathetic brake.",
      weak: ["Unable to slow the breath when stressed", "Heart rate staying jacked for hours after conflict", "Recovery from activation measured in evenings"],
      trained: ["State shifted in two breaths", "Heart rate dropping on cue", "The brake pedal found under pressure"],
      train: [
        { t: "Physiological Sigh — the fastest known downshift, two inhales + long exhale", link: "gym.html#group-emotional" },
        { t: "Regulation Breathing — exhale-weighted to calm, bellows to power up", link: "gym.html#group-emotional" },
        { t: "Cold exposure with slow breathing — vagal brake under load", link: "gym.html#group-grit" },
        { t: "Full domain: Nervous System Tuning", link: "database/neurooptimization.html" },
      ],
      note: "Every 'calm down' technique in the world works through this one structure. The medulla doesn't read affirmations — it reads CO₂, exhale length, and cold skin.",
    },
    {
      id: "lc", cat: "base", name: "Locus coeruleus & RAS", aka: "The alarm bell and the gatekeeper",
      where: "A blue spot in the brainstem plus a network rising through it",
      job: "Norepinephrine and arousal — the brain's general alertness system. The reticular activating system filters what's allowed into awareness at all; most of reality never makes the cut.",
      weak: ["Drowsy when it matters, wired at 2 a.m.", "The filter passing notifications but not the book", "Alertness dictated by caffeine and chaos"],
      trained: ["Alertness summoned on schedule", "The gate tuned to the chosen input", "Caffeine as a tool, not a crutch"],
      train: [
        { t: "Selective Filter Drill — training the gate directly", link: "gym.html#group-focus" },
        { t: "Attention Anchoring — a switch for arousal + focus", link: "gym.html#group-focus" },
        { t: "Caffeine discipline: cut off 8–10 hours before bed", link: null },
        { t: "Sleep regularity — the alarm bell trusts a schedule", link: "database/sleepoptimization.html" },
      ],
      note: "The RAS is why you hear your name across a loud room, and why repeated intentions ('I want to notice X') start surfacing X everywhere. The filter is trainable.",
    },
    {
      id: "cerebellum", cat: "base", name: "Cerebellum", aka: "The precision computer",
      where: "The fist-sized structure below the back of the brain",
      job: "Coordination, timing, and motor learning — and, less famously, attention, language, and prediction. It holds over half the brain's neurons and learns anything with repeated precise movement.",
      weak: ["New movements awkward for weeks", "No rhythm, no timing", "Learning that never reaches fluent"],
      trained: ["New physical skills chunking fast", "Rhythm and timing you can feel", "Prediction sharpening in sport and speech"],
      train: [
        { t: "Learn a precise physical skill: juggling, balance drills, martial arts", link: null },
        { t: "A musical instrument — timing, sequencing, both hands", link: null },
        { t: "Kinesthetic encoding — pair learning with movement", link: "gym.html#group-learning" },
        { t: "Full domain: Tactical Positioning & Sensory Mapping", link: "database/spatialintelligence.html" },
      ],
      note: "The cerebellum doesn't care about your excuses, only your reps — which makes it the most honest training partner you have.",
    },
    /* ---------- NETWORKS ---------- */
    {
      id: "corpuscallosum", cat: "networks", name: "Corpus callosum", aka: "The bridge",
      where: "The thick arc of fibers joining the two hemispheres",
      job: "All communication between left and right — and the more it's used, the faster and thicker its traffic gets. Bimanual, alternating, and musical skills are its classic training ground.",
      weak: ["The non-dominant hand useless for anything fine", "Can't rub your stomach and pat your head", "One-sided everything: mouse, phone, bag"],
      trained: ["Two-handed skills running in parallel", "The non-dominant hand writing legibly", "Alternating fluency — instruments, drills, sports"],
      train: [
        { t: "Non-dominant-hand tasks: brushing, eating, writing", link: null },
        { t: "Juggling and bilateral drills — the bridge's barbell", link: null },
        { t: "Learn with the body, not just the eyes", link: "gym.html#group-learning" },
      ],
      note: "Musicians' corpora callosa are measurably thicker than non-musicians' — the bridge grows with traffic.",
    },
    {
      id: "dmn", cat: "networks", name: "Default mode network", aka: "The daydreamer",
      where: "A network linking the prefrontal and posterior midline — it switches on when you stop focusing",
      job: "Mind-wandering, self-reflection, memory replay, and creative recombination — the shower-thought machine. It consolidates learning offline, and it's also where rumination lives when it jams.",
      weak: ["Silence instantly filled with a screen", "Rumination loops replaying the same reel", "Rest that never feels restful"],
      trained: ["Useful wandering — ideas arriving on walks", "Rest that actually consolidates", "The network noticed, then aimed"],
      train: [
        { t: "Scheduled boredom: daily walks without headphones", link: null },
        { t: "Meditation — learning to notice the DMN without obeying it", link: "database/meditation.html" },
        { t: "Post-learning idle — rest after study is part of the study", link: "gym.html#group-learning" },
        { t: "Capture ideas right after idle — that's when the DMN files them", link: null },
      ],
      note: "Your brain's best work happens off the clock — sleep and idle time are when the day's training gets filed. Law 1: stress plus recovery equals growth.",
    },
  ];

  /* ============================================================
     DIAGRAM — numbered dots over a neutral brain silhouette
     ============================================================ */
  const SILHOUETTE = [
    "M 80,150 C 62,118 78,84 118,68 C 158,52 222,48 260,70 C 277,80 272,102 252,114 C 220,132 180,138 150,150 C 120,162 96,164 80,150 Z",
    "M 68,158 C 92,172 124,170 152,156 C 184,140 222,134 250,120 C 264,142 258,170 238,188 C 210,208 168,210 136,202 C 104,196 74,184 68,158 Z",
    "M 268,72 C 306,56 356,64 384,92 C 402,112 398,142 378,154 C 348,170 308,168 282,150 C 262,136 262,104 268,72 Z",
    "M 386,160 C 406,178 404,214 384,236 C 364,256 330,260 306,246 C 288,234 286,208 296,188 C 308,166 362,152 386,160 Z",
    "M 262,162 C 288,152 312,164 314,188 C 315,210 294,224 270,218 C 250,212 240,172 262,162 Z",
    "M 150,210 C 190,218 232,216 264,226 C 292,234 302,250 288,264 C 270,280 226,284 190,278 C 156,272 130,254 138,234 C 141,222 144,214 150,210 Z",
    "M 318,242 C 344,230 376,238 388,260 C 398,280 388,304 364,312 C 340,320 314,310 306,288 C 300,270 306,250 318,242 Z",
    "M 330,312 C 343,310 351,318 349,332 C 347,348 338,354 330,352 C 322,350 320,340 322,328 C 323,320 325,314 330,312 Z",
  ];

  const DOT_POS = {
    pfc: [105, 148], acc: [188, 138], parietal: [310, 96], temporal: [182, 246], occipital: [368, 168],
    insula: [158, 200], hippocampus: [264, 200], amygdala: [226, 224], basalganglia: [232, 162],
    hypothalamus: [216, 252], pituitary: [234, 272], reward: [286, 238],
    medulla: [330, 340], lc: [314, 300], cerebellum: [352, 272],
    corpuscallosum: [238, 128], dmn: [128, 112],
  };

  const svgTag = "http://www.w3.org/2000/svg";
  const svg = document.getElementById("anatomy-svg");
  const caption = document.getElementById("anatomy-caption");

  SILHOUETTE.forEach((dd) => {
    const p = document.createElementNS(svgTag, "path");
    p.setAttribute("d", dd);
    p.setAttribute("class", "anatomy-outline");
    svg.appendChild(p);
  });

  const byId = Object.fromEntries(ANATOMY.map((a, i) => [a.id, { a, n: i + 1 }]));

  ANATOMY.forEach((a, i) => {
    const n = i + 1;
    const [x, y] = DOT_POS[a.id];
    const g = document.createElementNS(svgTag, "g");
    g.setAttribute("class", "anatomy-dot");
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "link");
    g.setAttribute("aria-label", `${a.name} — ${a.aka}. Jump to region.`);
    const c = CATS[a.cat].color;
    g.innerHTML = `<circle cx="${x}" cy="${y}" r="11" fill="${c}" stroke="var(--paper)" stroke-width="2.5"/><text x="${x}" y="${y + 4}" text-anchor="middle" class="dot-num">${n}</text>`;
    const say = () => { caption.textContent = `${n}. ${a.name} — ${a.aka}`; caption.style.color = c; };
    const quiet = () => { caption.textContent = "Hover a numbered region to identify it"; caption.style.color = ""; };
    g.addEventListener("mouseenter", say);
    g.addEventListener("focus", say);
    g.addEventListener("mouseleave", quiet);
    g.addEventListener("blur", quiet);
    g.addEventListener("click", () => document.getElementById("region-" + a.id).scrollIntoView({ behavior: window.prefersReduced() ? "auto" : "smooth", block: "start" }));
    g.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); document.getElementById("region-" + a.id).scrollIntoView({ behavior: window.prefersReduced() ? "auto" : "smooth", block: "start" }); }
    });
    svg.appendChild(g);
  });

  /* ============================================================
     REGION CARDS
     ============================================================ */
  const wrap = document.getElementById("anatomy-regions");

  Object.entries(CATS).forEach(([catId, cat]) => {
    const list = ANATOMY.map((a, i) => ({ a, n: i + 1 })).filter((x) => x.a.cat === catId);
    const sec = document.createElement("section");
    sec.className = "db-cat anatomy-cat";
    sec.style.setProperty("--cc", cat.color);
    sec.innerHTML = `
      <div class="db-cat-head">
        <h2>${esc(cat.name)}</h2>
        <p>${esc(cat.blurb)}</p>
        <span class="db-cat-count">${list.length} regions</span>
      </div>`;
    list.forEach(({ a, n }) => {
      const card = document.createElement("article");
      card.className = "region-card";
      card.id = "region-" + a.id;
      card.style.setProperty("--cc", cat.color);
      card.innerHTML = `
        <header class="region-head">
          <span class="region-num">${n}</span>
          <div>
            <h3>${esc(a.name)}</h3>
            <p class="region-aka">${esc(a.aka)} · <span class="region-where">${esc(a.where)}</span></p>
          </div>
        </header>
        <div class="region-job"><h4>Responsible for</h4><p>${esc(a.job)}</p></div>
        <div class="sign-lists">
          <div class="sign-list weak"><h4>Untrained</h4><ul>${a.weak.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
          <div class="sign-list trained"><h4>Trained</h4><ul>${a.trained.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
        </div>
        <div class="region-train">
          <h4>How to train it</h4>
          <ul>
            ${a.train.map((x) => `<li>${x.link ? `<a href="${x.link}">${esc(x.t)}</a>` : esc(x.t)}</li>`).join("")}
          </ul>
        </div>
        ${a.note ? `<p class="region-note">${esc(a.note)}</p>` : ""}`;
      sec.appendChild(card);
    });
    wrap.appendChild(sec);
  });
})();
