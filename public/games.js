/* ============================================================
   THE MIND GYM — brain training games & puzzles page
   ============================================================ */
(function () {
  "use strict";
  const { esc } = window;

  const REGION_NAMES = {
    pfc: "Prefrontal cortex", acc: "Anterior cingulate", parietal: "Parietal lobe",
    temporal: "Temporal lobe", occipital: "Occipital lobe", insula: "Insula",
    hippocampus: "Hippocampus", amygdala: "Amygdala", basalganglia: "Basal ganglia",
    hypothalamus: "Hypothalamus", reward: "Reward system", medulla: "Medulla",
    lc: "Locus coeruleus", cerebellum: "Cerebellum", dmn: "Default mode network",
  };

  const GAME_GROUPS = [
    {
      id: "focus", color: "#2437FF",
      blurb: "Games that demand one-pointed attention — inhibition under distraction, reaction control, and holding focus against interference.",
      games: [
        { name: "Human Benchmark", url: "https://humanbenchmark.com", platform: "Web", price: "Free", tag: "Test",
          trains: "Reaction time, aim, attention — and a score history for weekly baselining", region: "acc",
          why: "Not a trainer so much as a stopwatch: measure reaction and aim weekly to see if the gym drills are actually transferring." },
        { name: "PsyToolkit — Stroop task", url: "https://www.psytoolkit.org", platform: "Web", price: "Free", tag: "Test",
          trains: "Inhibition and conflict monitoring", region: "acc",
          why: "The classic Stroop test (name the ink color, not the word) is the ACC's favorite exercise — run it on yourself, for free." },
        { name: "N-back.io", url: "https://nback.io", platform: "Web", price: "Free", tag: "Trainer",
          trains: "Focus + working memory under continuous load", region: "pfc",
          why: "Dual n-back is the most-studied working-memory game in psychology — brutal, effective at the task, and genuinely hard." },
        { name: "Brain Workshop", url: "http://brainworkshop.sourceforge.net", platform: "Desktop", price: "Free", tag: "Trainer",
          trains: "Dual n-back with configurable modes (visual, audio, combined)", region: "pfc",
          why: "The open-source original used in most n-back studies — uglier than the web versions, infinitely adjustable." },
      ],
    },
    {
      id: "memory", color: "#7C3AED",
      blurb: "Spacing, encoding, and retrieval practice disguised as play — plus raw memory tests for baselines.",
      games: [
        { name: "Anki", url: "https://apps.ankiweb.net", platform: "Desktop · Web · Android", price: "Free", tag: "Tool",
          trains: "Long-term memory via spaced repetition — anything you choose to learn", region: "hippocampus",
          why: "The single highest-leverage free memory tool in existence. If you install one thing from this page, install this." },
        { name: "Set with Friends", url: "https://setwithfriends.com", platform: "Web", price: "Free", tag: "Game",
          trains: "Visual scanning, pattern completion, speed of perception", region: "occipital",
          why: "The card game SET as a free multiplayer web game — finding valid sets before anyone else is pure perception training." },
        { name: "Memozor", url: "https://www.memozor.com", platform: "Web", price: "Free", tag: "Game",
          trains: "Visual short-term memory (Kim's-game style matching)", region: "hippocampus",
          why: "Classic concentration card games at every difficulty — simple, honest, surprisingly hard at the higher grid sizes." },
        { name: "Lumosity (free games)", url: "https://www.lumosity.com", platform: "Web · App", price: "Free tier", tag: "Trainer",
          trains: "Memory matrix, attention, speed games — a small daily set is free", region: "hippocampus",
          why: "The famous one. The free tier is limited but well-made; play it as a warm-up, not a program." },
      ],
    },
    {
      id: "processing", color: "#0E9384",
      blurb: "Speed drills with scores — typing, arithmetic, packing, and planning against the clock.",
      games: [
        { name: "Monkeytype", url: "https://monkeytype.com", platform: "Web", price: "Free", tag: "Trainer",
          trains: "Typing speed — processing automation in its purest form", region: "cerebellum",
          why: "Clean, open-source, obsessed with accuracy-before-speed — exactly the right philosophy for processing training." },
        { name: "Zetamac Arithmetic", url: "https://arithmetic.zetamac.com", platform: "Web", price: "Free", tag: "Game",
          trains: "Mental math speed — 120 seconds, as many as you can", region: "parietal",
          why: "The cult favorite among engineers and traders for a reason: brutal, scored, and instantly re-runnable." },
        { name: "TETR.IO", url: "https://tetr.io", platform: "Web · Desktop", price: "Free", tag: "Game",
          trains: "Spatial packing and decision speed under escalating pressure", region: "occipital",
          why: "Modern free Tetris with proper multiplayer — and Tetris is one of the most-researched games in cognitive science." },
        { name: "2048", url: "https://play2048.co", platform: "Web", price: "Free", tag: "Puzzle",
          trains: "Planning and working memory — every swipe rewrites the board", region: "pfc",
          why: "The official original. Slow, deliberate play beats fast swiping — treat it as chess, not reflex." },
        { name: "Cognitive Fun", url: "https://cognitivefun.net", platform: "Web", price: "Free", tag: "Test",
          trains: "Reaction, visual memory, attention blink — a lab-grade battery", region: "parietal",
          why: "Plain, ad-free implementations of real experimental tasks with your percentile against other players." },
      ],
    },
    {
      id: "learning", color: "#2F9E44",
      blurb: "Puzzles and practices that build real libraries — languages, chess patterns, vocabulary, knowledge.",
      games: [
        { name: "Lichess Puzzles", url: "https://lichess.org/training", platform: "Web · App", price: "Free", tag: "Puzzle",
          trains: "Pattern recognition — thousands of chess tactics, infinite and free", region: "hippocampus",
          why: "Unlimited curated puzzles with a rating that tracks you. Building a chess-pattern library is expert-pattern extraction in miniature." },
        { name: "Duolingo", url: "https://www.duolingo.com", platform: "Web · App", price: "Free tier", tag: "Game",
          trains: "A new language — temporal lobe, the ultimate long-term project", region: "temporal",
          why: "Gamified streaks that hijack your basal ganglia for good. Keep it to one lesson daily forever, not five daily for a week." },
        { name: "FreeRice", url: "https://freerice.com", platform: "Web", price: "Free", tag: "Game",
          trains: "Vocabulary and math retrieval practice", region: "temporal",
          why: "Every correct answer donates rice through the UN World Food Programme — retrieval practice with a receipt." },
        { name: "Online-Go.com", url: "https://online-go.com", platform: "Web", price: "Free", tag: "Game",
          trains: "Go — pattern, territory, and whole-board thinking; plus tsumego puzzles", region: "parietal",
          why: "The oldest brain-training game in the world, free and open-source. Learning Go is a decade-long puzzle subscription." },
        { name: "Sporcle", url: "https://www.sporcle.com", platform: "Web", price: "Free", tag: "Quiz",
          trains: "Timed retrieval of knowledge — naming countries, elements, capitals", region: "temporal",
          why: "Millions of user-made quizzes; the timed format turns general knowledge into retrieval practice." },
      ],
    },
    {
      id: "emotional", color: "#D6336C",
      blurb: "Fewer games here by design — regulation trains better through practice, breath, and body. These are the free, evidence-based ones.",
      games: [
        { name: "Insight Timer", url: "https://insighttimer.com", platform: "Web · App", price: "Free tier", tag: "Tool",
          trains: "Meditation — thousands of free guided sessions for focus and interoception", region: "insula",
          why: "The largest free meditation library anywhere; the timer alone makes it worth keeping." },
        { name: "UCLA Mindful (MARC)", url: "https://www.uclahealth.org/programs/marc", platform: "Web · App", price: "Free", tag: "Tool",
          trains: "Basic guided mindfulness from a research center", region: "insula",
          why: "Free, no upsells, research-derived — the cleanest starting point for a body-scan practice." },
        { name: "Personal Zen", url: "https://www.personalzen.com", platform: "iOS · Android", price: "Free", tag: "Game",
          trains: "Attention-bias modification — steering attention away from threat", region: "amygdala",
          why: "One of the few 'brain games' built on a real clinical mechanism; a few minutes shifts attention bias short-term." },
      ],
    },
    {
      id: "social", color: "#E89700",
      blurb: "Party games are social-intelligence gyms: theory of mind, deception detection, and reading what people meant rather than said.",
      games: [
        { name: "Codenames", url: "https://codenames.game", platform: "Web", price: "Free", tag: "Game",
          trains: "Clue-giving = modeling what's in other minds; guessers read intentions", region: "pfc",
          why: "The official free online version of the modern classic — a spymaster round is a live theory-of-mind workout." },
        { name: "Netgames.io — Spyfall & Werewolf", url: "https://netgames.io", platform: "Web", price: "Free", tag: "Game",
          trains: "Questioning, deception detection, and acting under scrutiny", region: "amygdala",
          why: "Free browser party games with no signup. Social deduction is human-reading with the safety of a game frame." },
        { name: "Skribbl.io", url: "https://skribbl.io", platform: "Web", price: "Free", tag: "Game",
          trains: "Guessing what others are thinking from partial evidence — fast", region: "temporal",
          why: "Pictionary in the browser. Reading a bad drawing quickly is subtext listening with a timer." },
      ],
    },
    {
      id: "grit", color: "#E8590C",
      blurb: "Games don't build grit — streaks, contracts, and commitments do. Free tools that gamify showing up.",
      games: [
        { name: "Habitica", url: "https://habitica.com", platform: "Web · App", price: "Free tier", tag: "Tracker",
          trains: "Habits and dailies as an RPG — your character levels when you do", region: "basalganglia",
          why: "Turns the basal ganglia's cue-routine-reward loop into an explicit game. The free core is the whole game." },
        { name: "Loop Habit Tracker", url: "https://loopyhabit.com", platform: "Android", price: "Free", tag: "Tracker",
          trains: "Streaks made visible — the 'don't break the chain' protocol", region: "basalganglia",
          why: "Open-source, offline, zero gamification-bloat: just your streaks and a graph that tells the truth." },
        { name: "Beeminder", url: "https://www.beeminder.com", platform: "Web", price: "Free tier", tag: "Tool",
          trains: "Commitment devices — real money rides on your stated goals", region: "reward",
          why: "The nuclear option for quit-criteria: define the goal, and missing it costs you. Free for up to a few goals." },
      ],
    },
  ];

  const wrap = document.getElementById("games-groups");

  GAME_GROUPS.forEach((grp) => {
    const meta = GROUPS.find((g) => g.id === grp.id);
    const sec = document.createElement("section");
    sec.className = "db-cat games-cat";
    sec.style.setProperty("--cc", grp.color);
    sec.innerHTML = `
      <div class="db-cat-head">
        <h2>${esc(meta.name)}</h2>
        <p>${esc(grp.blurb)}</p>
        <span class="db-cat-count">${grp.games.length} free picks · pairs with the <a href="gym.html#group-${grp.id}">gym exercises</a></span>
      </div>
      <div class="games-grid">
        ${grp.games
          .map(
            (g) => `
        <article class="game-card" style="--cc:${grp.color}">
          <div class="game-top">
            <h3><a href="${g.url}" target="_blank" rel="noopener">${esc(g.name)} ↗</a></h3>
            <span class="game-tag">${esc(g.tag)}</span>
          </div>
          <div class="game-chips">
            <span class="g-chip">${esc(g.platform)}</span>
            <span class="g-chip g-price ${g.price === "Free" ? "is-free" : ""}">${esc(g.price)}</span>
            ${g.region ? `<a class="g-chip g-region" href="anatomy.html#region-${g.region}">${esc(REGION_NAMES[g.region])}</a>` : ""}
          </div>
          <p class="game-trains">${esc(g.trains)}</p>
          <p class="game-why">${esc(g.why)}</p>
        </article>`
          )
          .join("")}
      </div>`;
    wrap.appendChild(sec);
  });
})();
