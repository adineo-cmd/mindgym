/* ============================================================
   THE MIND GYM — data
   Models adapted from mentalmodelsbox.com
   Training system adapted from adineo-cmd.github.io/personal (OmniMind)
   ============================================================ */

/* ---------- brain "muscle groups" ---------- */
const GROUPS = [
  {
    id: "focus", name: "Focus & Attention", short: "Focus",
    color: "#2437FF", ink: "#1B2AC4",
    tagline: "The ability to point your whole mind at one thing — and hold it there.",
    anatomy: "Attention works like a muscle: it fatigues with use, strengthens with training, and atrophies with doom-scrolling. Every deep-work session, every resisted notification is a rep. Modern life is an attention-destruction machine, so this muscle decides most of what you achieve.",
    weak: ["Reaching for the phone within seconds of boredom", "Rereading the same paragraph three times", "Every task takes forever because it's never the only task"],
    trained: ["Deep work blocks of 50+ minutes", "Noticing the urge to switch — and not acting on it", "Refocusing after interruption in under 5 seconds"],
    exercises: [
      { name: "Anchor Breath Focus", tier: "Beginner", rx: "5–10 min · daily", how: "Watch the breath at the nostrils. When the mind wanders, gently bring it back. Best post-wake or before deep work." },
      { name: "Task Timer Sprints", tier: "Beginner", rx: "25–50 min × 4–6 blocks", how: "One task, timer running, everything else closed. No tabs, no phone, no 'quick checks'." },
      { name: "Single-Point Visual Lock", tier: "Beginner", rx: "3–5 min · daily", how: "Stare at one fixed dot on the wall without blinking. Eyes water; attention steadies." },
      { name: "Distraction Logging", tier: "Beginner", rx: "all day", how: "Keep a pad beside you. When an urge hits, write it down instead of acting on it. Review the list after the session." },
      { name: "Mental Countdown", tier: "Beginner", rx: "5 min", how: "Count backward from 100 by sevens. Any error or drift — restart from 100. Brutal, effective." },
      { name: "Interruption Recovery Drill", tier: "Intermediate", rx: "5 interruptions / session", how: "Set random alarms or have someone interrupt you. Practice getting back to full focus within 5 seconds." },
      { name: "Selective Filter Drill", tier: "Intermediate", rx: "3-min bursts", how: "In a noisy café, track one voice or one instrument and let everything else blur out." },
      { name: "Micro-Focus Intervals", tier: "Intermediate", rx: "90 s on / 30 s off × 10", how: "Ninety seconds of all-in focus, thirty seconds of full rest. Attention interval training." },
      { name: "Attention Anchoring", tier: "Intermediate", rx: "per session", how: "Pair a small gesture — a wrist tap — with moments of peak focus. The gesture becomes an on-switch." },
      { name: "Distraction Immersion", tier: "Advanced", rx: "15–30 min", how: "Study in progressively noisier venues: library → café → street → train station. Attention that survives chaos is bulletproof." },
      { name: "Interference Resistance", tier: "Advanced", rx: "15–20 min", how: "Hold reading comprehension while a conversation runs beside you. Do not move — filter." },
      { name: "Focus Under Fatigue", tier: "Advanced", rx: "10–15 min", how: "At the end of the day, when you're tired, run a focus drill anyway. The last reps grow the most." }
    ],
    progression: "Extend session length by ~10% per week, and cut refocus time from 30 seconds toward 5."
  },
  {
    id: "memory", name: "Memory", short: "Memory",
    color: "#7C3AED", ink: "#6228C4",
    tagline: "Storing what matters and retrieving it when you need it.",
    anatomy: "Memory isn't a recording — it's a reconstruction, and it strengthens on retrieval, not on review. Every time you pull a fact out (rather than reread it), the path gets deeper. The pros don't have bigger brains; they have better filing systems.",
    weak: ["Names evaporate seconds after introductions", "Rereading notes constantly, retaining little", "Walking into rooms and forgetting why"],
    trained: ["Recalling a 15-item list in order, both directions", "Remembering names at parties", "Facts you learned weeks ago still showing up on demand"],
    exercises: [
      { name: "Spaced Repetition", tier: "Beginner", rx: "10–15 min · daily", how: "Review at expanding intervals: 1 day → 3 days → 1 week → 2 weeks. Anki does the scheduling for you." },
      { name: "Active Recall", tier: "Beginner", rx: "15–20 min", how: "Close the book. Write everything you remember. Then check what you missed — that gap is the training effect." },
      { name: "Chunking", tier: "Beginner", rx: "ongoing", how: "Group information into 3–5 item chunks, like phone numbers. Grow chunk size as it gets easy." },
      { name: "Dual Coding", tier: "Beginner", rx: "per topic", how: "Pair every verbal fact with an image: text plus timeline, name plus face. Two codes, two retrieval routes." },
      { name: "Memory Journaling", tier: "Beginner", rx: "5 min · nightly", how: "Write down 3–5 things you learned today. Review the week every Sunday." },
      { name: "Memory Palace", tier: "Intermediate", rx: "30 min build + 5–10 min/day", how: "Place items you're memorizing along a familiar route — your home works. Walk the route mentally to recall everything." },
      { name: "Story Method", tier: "Intermediate", rx: "10–15 min per list", how: "Weave list items into one absurd narrative. The stranger the images, the stickier the sequence." },
      { name: "Peg System", tier: "Intermediate", rx: "20 min to learn", how: "Memorize number-rhyme pegs (1-bun, 2-shoe…), then hang items on the pegs for instant ordered recall." },
      { name: "Elaborative Encoding", tier: "Intermediate", rx: "15–20 min", how: "Connect each new fact to something you already know, then explain it out loud in your own words." },
      { name: "Forgetting Curve Management", tier: "Intermediate", rx: "daily", how: "Review just before you'd naturally forget. Recall too easy? Stretch the interval. Recall failed? Shorten it." },
      { name: "Memory Speed Drills", tier: "Advanced", rx: "60 s, timed", how: "Recall a fixed list in sixty seconds — then beat your time. Speed of retrieval is a trainable variable." },
      { name: "Major System for Numbers", tier: "Advanced", rx: "20–30 min to learn", how: "Convert digits into consonant sounds, then words: 32 → M-N → 'moon'. Now any number is an image." }
    ],
    progression: "Grow chunk size from 3 → 5 → 7 items, and beat your recall speed on a fixed list each week."
  },
  {
    id: "processing", name: "Processing Speed", short: "Processing",
    color: "#0E9384", ink: "#0A6F64",
    tagline: "How fast and cleanly you think on your feet.",
    anatomy: "Processing speed is raw cognitive horsepower — how quickly you sort, calculate, rotate, and decide. It's the most 'trainable with drills' of all the muscles: timed mental math and pattern drills measurably shave milliseconds off your thinking within weeks.",
    weak: ["Needing forever to split a bill", "Losing the thread in fast conversations", "Feeling two steps behind in meetings"],
    trained: ["Mental math without opening the phone", "Spotting the pattern before others finish reading", "Making solid decisions in seconds when needed"],
    exercises: [
      { name: "Mental Math Acceleration", tier: "Beginner", rx: "10–15 min · daily", how: "Arithmetic at progressive speed. If errors creep above ~2%, slow down 10% — accuracy leads, speed follows." },
      { name: "Speed Reading with Pointer", tier: "Beginner", rx: "15–20 min · daily", how: "Guide your eyes with a finger and raise the pace ~10% weekly. Drop subvocalization; keep comprehension honest." },
      { name: "Rapid Categorization", tier: "Beginner", rx: "5 min", how: "Flash yourself items (cards, icons, words) and sort each into a category instantly." },
      { name: "Decision Speed Training", tier: "Beginner", rx: "10 decisions · daily", how: "Make small decisions within 3 seconds, then review quality at day's end. Speed and judgment train together." },
      { name: "Pattern Recognition Drills", tier: "Intermediate", rx: "10–20 min", how: "Spot what comes next: 2, 4, 8, 16 → ? Do them against the clock." },
      { name: "Working Memory Expansion", tier: "Intermediate", rx: "10 min", how: "Hold a 7-digit number in mind and reverse it mentally. Add digits as it gets easy." },
      { name: "Dual-Task Processing", tier: "Intermediate", rx: "10–15 min", how: "Count backward by sevens while a podcast plays. Two streams, one operator." },
      { name: "Mental Rotation", tier: "Intermediate", rx: "10–15 min", how: "Rotate 3D shapes in your head and compare against a target. Engineers and gamers do this daily." },
      { name: "Information Filtering", tier: "Intermediate", rx: "5 rounds", how: "Extract the 5 key facts from a full page in 30 seconds." },
      { name: "Processing Under Pressure", tier: "Advanced", rx: "15–20 min", how: "Timed math with a visible countdown. Staying clean under the clock is the skill." },
      { name: "Mental Simulation Speed", tier: "Advanced", rx: "10–20 min", how: "Play out scenarios several moves ahead — chess, tactics, negotiations — faster each week." },
      { name: "Information Compression", tier: "Advanced", rx: "per chapter", how: "Compress a ten-page chapter into three mental images, then re-expand it from memory a day later." }
    ],
    progression: "Hold errors under 2% while raising speed, and extend high-speed sessions from 5 → 7 minutes."
  },
  {
    id: "learning", name: "Learning", short: "Learning",
    color: "#2F9E44", ink: "#237A33",
    tagline: "The meta-muscle: how fast you can acquire every other skill.",
    anatomy: "Learning to learn is the highest-leverage skill in existence. The method beats the hours: deconstruct the skill, find the 20% that matters, encode it through multiple channels, then consolidate with sleep, spacing, and teaching. Cramming is junk food; this is meal planning.",
    weak: ["Buying courses, finishing few", "Highlighting everything, understanding little", "Starting strong, quitting at the plateau"],
    trained: ["A working 80/20 plan for any new skill in under an hour", "Teaching what you learned the same week", "Plateaus expected and pushed through"],
    exercises: [
      { name: "80/20 Skill Identification", tier: "Beginner", rx: "30 min · per skill", how: "Find the 20% of sub-skills that produce 80% of results — the 1,000 most common words, the 5 core chords — and put 80% of practice time there." },
      { name: "Multi-Sensory Encoding", tier: "Beginner", rx: "per session", how: "See it, hear it, write it, say it. Four channels means four chances to retrieve it later." },
      { name: "Spaced Encoding Sessions", tier: "Beginner", rx: "30 min × 10 days", how: "Ten short sessions across ten days beat one heroic all-nighter. Every time. No exceptions." },
      { name: "Prerequisite Gap Analysis", tier: "Beginner", rx: "20 min · per subject", how: "Before advanced material, list what it assumes you know. Patch the actual gaps, not the ones you imagine." },
      { name: "Generation Effect", tier: "Intermediate", rx: "per session", how: "Guess the answer before checking it. Even wrong guesses anchor the correct answer deeper than reading does." },
      { name: "Interleaved Practice", tier: "Intermediate", rx: "30–45 min", how: "Mix related topics inside one session instead of blocking. Harder in the moment, far stronger at retrieval." },
      { name: "Consolidation by Teaching", tier: "Intermediate", rx: "20–30 min", how: "Explain what you learned to a person — or a rubber duck. The gaps in your understanding surface fast." },
      { name: "Critical Path Analysis", tier: "Intermediate", rx: "1–2 hrs · per skill", how: "Find the minimum sequence of things you must learn, in order — and skip everything that isn't on the path." },
      { name: "First Principles Extraction", tier: "Advanced", rx: "1–2 hrs", how: "Reduce the subject to its irreducible truths, then rebuild your understanding from those. Slow, brutal, unbeatable." },
      { name: "Expert Pattern Extraction", tier: "Advanced", rx: "5–10 hrs observation", how: "Watch top performers and steal their decision patterns — not their style. Ask: what do they notice that I don't?" },
      { name: "Skill Decomposition Speed", tier: "Advanced", rx: "per new skill", how: "Time yourself breaking a new skill into sub-skills and a practice roadmap. 3 hours → 30 minutes is the training arc." },
      { name: "The Full Pipeline", tier: "Advanced", rx: "ongoing", how: "learn → sleep → spaced review → teach → apply → reflect. Run the whole loop on everything important." }
    ],
    progression: "Shrink deconstruction time: analyzing a brand-new skill from 3 hours down to 30 minutes with practice."
  },
  {
    id: "emotional", name: "Emotional Control", short: "Emotion",
    color: "#D6336C", ink: "#AD2353",
    tagline: "Feeling everything, being run by nothing.",
    anatomy: "Emotions are data, not orders. This muscle is the gap between the impulse and the action — and it's trainable in seconds-scale drills. The physiology is on your side: an emotional wave crests in about 90 seconds if you don't feed it, and naming an emotion measurably turns its volume down.",
    weak: ["Sending the angry text (and regretting it)", "Absorbing everyone else's mood", "Spiraling at 2 a.m."],
    trained: ["Naming the emotion within 3 seconds", "Watching a wave crest and pass without acting", "Recovering from a setback in minutes, not days"],
    exercises: [
      { name: "Physiological Sigh", tier: "Beginner", rx: "2–3 breaths · as needed", how: "Two quick inhales through the nose, one long exhale through the mouth. The fastest known calm-down lever." },
      { name: "Emotion Labeling", tier: "Beginner", rx: "all day", how: "Name what you feel, precisely: not 'bad' — 'dismissed', 'anxious', 'resentful'. Naming turns the volume down." },
      { name: "Regulation Breathing", tier: "Beginner", rx: "30 s – 2 min", how: "Exhale longer than you inhale to calm down; sharp bellows breath to power up. Two levers, one breath." },
      { name: "Emotional First Aid Kit", tier: "Beginner", rx: "30 min setup", how: "Pre-write your reset list while calm: cold water, walk, one song, one friend, one breathing pattern. Follow it when flooded." },
      { name: "Wave Riding", tier: "Intermediate", rx: "~90 s per wave", how: "Watch an emotion crest and subside without acting on it. The peak chemistry lasts about 90 seconds — everything after that is you feeding it." },
      { name: "Cognitive Reappraisal", tier: "Intermediate", rx: "10 min", how: "Generate three interpretations of the event, then choose the most useful one. 'Criticism' becomes 'free consulting'." },
      { name: "Somatic Tracking", tier: "Intermediate", rx: "2–3 min × 3 / day", how: "Scan the body, find where the emotion physically lives — tight chest, hot ears — and breathe into that spot." },
      { name: "Trigger Mapping", tier: "Intermediate", rx: "2 weeks · ongoing", how: "Log what happened right before each strong reaction — situations, people, words. Patterns emerge by week two." },
      { name: "Opposite Action", tier: "Intermediate", rx: "per episode", how: "When an emotion pushes you somewhere harmful, do the safe opposite: depressed → reach out; anxious → approach." },
      { name: "Emotional Granularity", tier: "Intermediate", rx: "daily", how: "Upgrade vocabulary with an emotion wheel: irritation ≠ contempt ≠ resentment. Precision is control." },
      { name: "Emotional Alchemy", tier: "Advanced", rx: "per episode", how: "Convert raw emotion into directed energy — anger into a hard set, nerves into preparation. Fuel is fuel." },
      { name: "Recovery Speed Training", tier: "Advanced", rx: "track it", how: "Time how long emotional recovery takes after upsets. Two hours → twenty minutes is a trainable progression." }
    ],
    progression: "Cut emotional recovery time week over week, and get from onset to an accurate label in under 3 seconds."
  },
  {
    id: "social", name: "Social Intelligence", short: "Social",
    color: "#E89700", ink: "#A66A00",
    tagline: "Reading people accurately and connecting on purpose.",
    anatomy: "Every conversation is a workout. The trainable skills are concrete: building rapport fast, listening so people feel it, reading the gap between what's said and what's meant, and understanding what actually drives each person. Extroversion is not required — attention is.",
    weak: ["Forgetting everything about people five minutes later", "Conversations that never get past the weather", "Missing the subtext until the car ride home"],
    trained: ["Making a stranger feel genuinely seen in minutes", "Spotting what someone really wants", "Repairing rapport when it cracks — it comes back stronger"],
    exercises: [
      { name: "Curiosity Questioning", tier: "Beginner", rx: "every conversation", how: "Ask open questions you genuinely want answered. People remember how interested you were, not how interesting you were." },
      { name: "Compliment Specificity", tier: "Beginner", rx: "daily", how: "Compliment choices and effort, not traits: 'the way you structured that argument' lands; 'you're smart' bounces off." },
      { name: "Name Usage", tier: "Beginner", rx: "2–3× per conversation", how: "Use the person's name naturally when greeting and parting. It's the cheapest rapport builder there is." },
      { name: "Nonverbal Warmth", tier: "Beginner", rx: "every first meeting", how: "Open posture, genuine smile, soft eye contact. The first thirty seconds set the frame for everything after." },
      { name: "Active Listening Validation", tier: "Intermediate", rx: "every important talk", how: "Reflect back what you heard in your own words before responding. 'So the deadline moved and nobody told you.' People melt." },
      { name: "Mirroring & Pacing", tier: "Intermediate", rx: "first minutes", how: "Subtly match posture and energy, then gently lead them where you want the conversation to go." },
      { name: "Silence Comfort", tier: "Intermediate", rx: "per conversation", how: "Let pauses breathe instead of filling them. People reveal the real thing in the second half of the silence." },
      { name: "Vulnerability Reciprocity", tier: "Intermediate", rx: "per relationship", how: "Share something appropriately real; openness invites openness. Calibrate depth to the relationship." },
      { name: "Baseline Calibration", tier: "Intermediate", rx: "per person", how: "Learn someone's normal — pace, volume, humor — so that meaningful deviations actually stand out." },
      { name: "Subtext Listening", tier: "Advanced", rx: "ongoing", how: "Listen for what's not said: sudden topic changes, pauses, repeated words. The real message usually lives there." },
      { name: "Energy Matching & Modulation", tier: "Advanced", rx: "per interaction", how: "Match the other person's energy first, then steer it — up for action, down for candor." },
      { name: "Rapport Repair", tier: "Advanced", rx: "per rupture", how: "When rapport cracks: acknowledge, apologize if needed, rebuild deliberately. Repaired rapport comes back stronger." }
    ],
    progression: "Move from scripted techniques to fluid reading: mirror → find common ground → validate → match energy, without thinking."
  },
  {
    id: "grit", name: "Grit & Resilience", short: "Grit",
    color: "#E8590C", ink: "#BC420A",
    tagline: "The willingness muscle: doing the hard thing on the boring day.",
    anatomy: "Grit is not grinding forever — it's programmed discomfort plus fast recovery. You train it exactly like conditioning: voluntary stress in controlled doses, then rest. Note the difference from stupidity: quit criteria are defined in advance, so quitting is a decision, never a mood.",
    weak: ["Quitting at the first plateau", "New project every month, finished none", "Plans that need motivation to survive"],
    trained: ["Doing the scheduled work on the day you don't feel like it", "Bouncing back from failure within a day", "Choosing the harder right over the easier wrong by default"],
    exercises: [
      { name: "Cold Exposure", tier: "Beginner", rx: "30 s → 3 min · daily", how: "End the shower cold and breathe slow through it. Staying calm in discomfort on purpose is the entire rep." },
      { name: "Deliberate Discomfort", tier: "Beginner", rx: "1 task · daily", how: "Do one uncomfortable thing — the call, the cold, the hard conversation — without complaining. Track the streak." },
      { name: "Micro-Commitments", tier: "Beginner", rx: "daily", how: "Keep one tiny promise to yourself every single day. One page read, one push-up. Never miss twice." },
      { name: "Micro-Stress Exposure", tier: "Beginner", rx: "1–2 min × 5 / day", how: "Brief, deliberate doses of mild stress — cold water on the face, a sprint of stairs — with calm breathing throughout." },
      { name: "Failure Reframing", tier: "Intermediate", rx: "per failure", how: "After any failure, extract five written lessons before moving on. Failure becomes tuition, not identity." },
      { name: "Stress Hierarchy", tier: "Intermediate", rx: "weekly ladder", how: "List stressors from mild to scary — question, small talk, speech, debate. Master each rung before climbing." },
      { name: "Quit Criteria Definition", tier: "Intermediate", rx: "per project", how: "Define in advance the exact conditions under which you'd stop. Quitting becomes a decision, never a mood." },
      { name: "Delayed Gratification", tier: "Intermediate", rx: "daily choices", how: "Choose the long-term reward over the immediate one on purpose: the boring savings transfer, the skipped dessert." },
      { name: "Challenge Seeking", tier: "Intermediate", rx: "daily", how: "Take the stairs, the harder project, the direct feedback. Comfort is a skill that untrains itself by never being used." },
      { name: "Controlled Discomfort", tier: "Advanced", rx: "20–60 min · 2–3× / week", how: "A 16-hour fast with normal productivity, a long plank hold, a day of silence. Voluntary, dosed, recovered from." },
      { name: "Stress Dose Escalation", tier: "Advanced", rx: "weekly", how: "One minute of cold this week, two the next, three after. When near overload — deload. Programmed, not improvised." },
      { name: "Setback Speed Recovery", tier: "Advanced", rx: "per setback", how: "One hour to feel it fully — then act on the next opportunity. The grief gets scheduled; the comeback doesn't wait." }
    ],
    progression: "Escalate cold exposure 30 s → 1 → 2 → 3 min, and add ~10% weekly to any endurance challenge — with deload weeks."
  }
];

/* ---------- mental models ---------- */
const MODELS = [
  {
    slug: "hanlons-razor", name: "Hanlon's Razor", category: "Reasoning & Problem-Solving",
    tagline: "Don't assume malice when stupidity or misunderstanding explains the behavior.",
    desc: "When someone's action hurts or annoys you, the simplest explanation is usually carelessness, distraction, or missing information — not hostility. Assuming malice where there is none poisons your response and burns relationships that didn't need burning.",
    examples: ["A colleague skips your meeting — far more likely a calendar slip than a snub.", "A friend's text reads cold and blunt — probably typed mid-task, not angry."],
    trains: "emotional", apply: "Before reacting to a slight, ask: 'What innocent explanation fits these facts just as well?' Act on that one first.",
    coined: "Robert Hanlon, 1980", diff: 1, related: ["occams-razor", "illeism"]
  },
  {
    slug: "occams-razor", name: "Occam's Razor", category: "Reasoning & Problem-Solving",
    tagline: "Favor the hypothesis with the fewest assumptions.",
    desc: "When several explanations fit the facts, the one requiring the fewest assumptions is usually right. Complexity has to be earned by evidence, not by imagination. Start simple; escalate only when the data forces you to.",
    examples: ["The website is down — a bad deploy beats a coordinated hacker attack.", "The car won't start — dead battery before electrical gremlins."],
    trains: "processing", apply: "When troubleshooting, list the explanations and start testing the one with the fewest 'what ifs'.",
    coined: "William of Ockham, 14th century", diff: 1, related: ["hanlons-razor", "first-principles"]
  },
  {
    slug: "first-principles", name: "First Principles Reasoning", category: "Reasoning & Problem-Solving",
    tagline: "Break problems into foundational elements and rebuild solutions from there.",
    desc: "Most reasoning is by analogy — 'this is how it's always done.' First-principles thinking strips a problem down to its basic truths and builds back up from those. It's slower, but it's the only method that produces genuinely new answers.",
    examples: ["Battery prices seem fixed — until you price the raw materials and rebuild the cost from scratch.", "Every recipe is just flavor bases plus techniques; learn those and you can cook without one."],
    trains: "learning", apply: "Ask 'What is physically or logically true here?' Write those facts down, then rebuild your plan using only them.",
    coined: "Aristotle's method; revived in modern engineering culture", diff: 3, related: ["occams-razor", "root-causes", "map-territory"]
  },
  {
    slug: "root-causes", name: "Proximate and Root Causes", category: "Reasoning & Problem-Solving",
    tagline: "Look beyond immediate causes to find the underlying root cause.",
    desc: "The proximate cause is the match; the root cause is why the room was full of matches. Fixing triggers treats symptoms forever; fixing root causes cures the disease once. The gap between the two is where recurring problems live.",
    examples: ["The server crashed from a bad query — the root cause is having no code review step.", "You're always late because of traffic — the root cause is scheduling with zero buffer."],
    trains: "processing", apply: "Ask 'why' five times in a row. Fix the last answer, not the first.",
    coined: "Sakichi Toyoda's '5 Whys', Toyota Production System", diff: 2, related: ["first-principles", "diminishing-returns"]
  },
  {
    slug: "thought-experiment", name: "Thought Experiment", category: "Reasoning & Problem-Solving",
    tagline: "Explore a theory by imagining an experiment and reasoning through its consequences.",
    desc: "Some ideas are impossible, expensive, or unethical to test in reality — so you run them in your head instead, following the logic all the way to its consequences. It's the cheapest laboratory ever built.",
    examples: ["Einstein chasing a beam of light in his imagination, toward relativity.", "'What if we shipped in two weeks instead of two quarters?' — run it fully and see what would have to be cut."],
    trains: "learning", apply: "Before a big decision, run the extreme version: 'What would have to be true for the opposite choice to be right?'",
    coined: "Term by Hans Christian Ørsted; method as old as Galileo", diff: 2, related: ["first-principles", "map-territory"]
  },
  {
    slug: "map-territory", name: "Map and Territory", category: "Reasoning & Problem-Solving",
    tagline: "Models explain reality but are not reality itself.",
    desc: "Every map, dashboard, metric, and word is a simplification — useful and wrong in some way at the same time. When reality and your model disagree, reality wins. Update the model, never the other way around.",
    examples: ["A 5-star recipe you personally hate — the map is not your tongue.", "The sales dashboard is green while customers quietly churn — the metric missed the story."],
    trains: "learning", apply: "When a plan meets reality, ask: 'What is my map leaving out?' Then go look at the territory.",
    coined: "Alfred Korzybski, 1931", diff: 2, related: ["goodharts-law", "first-principles"]
  },
  {
    slug: "hindsight-bias", name: "Hindsight Bias", category: "Cognitive Biases",
    tagline: "Believing you 'knew it all along' after an event occurs.",
    desc: "Once the outcome is known, memory quietly rewrites itself until the result feels inevitable. This makes you overconfident about predicting the next one and unfairly harsh on people who got what was 'obviously' coming — it wasn't.",
    examples: ["After any election: 'it was always going to go this way.'", "Post-mortems blaming decision-makers for not seeing what only became visible afterwards."],
    trains: "memory", apply: "Write your predictions down before results exist. Compare afterward — the gap is the bias, measured.",
    coined: "Baruch Fischhoff, 1975", diff: 2, related: ["confirmation-bias", "survivorship-bias", "gamblers-fallacy"]
  },
  {
    slug: "confirmation-bias", name: "Confirmation Bias", category: "Cognitive Biases",
    tagline: "Perceiving things in ways that reinforce preexisting beliefs.",
    desc: "Your brain is a lawyer, not a judge: it hunts for evidence supporting what you already believe and waves away the rest. The stronger the belief, the stronger the filter. Knowing about it doesn't turn it off — only deliberate counter-search does.",
    examples: ["Googling 'why this diet works' instead of 'does this diet work'.", "A news feed that agrees with you every single morning."],
    trains: "learning", apply: "For beliefs that matter, spend ten minutes steelmanning the other side: 'What's the best case that I'm wrong?'",
    coined: "Peter Wason, 1960", diff: 2, related: ["hindsight-bias", "map-territory", "social-proof"]
  },
  {
    slug: "gamblers-fallacy", name: "Gambler's Fallacy", category: "Cognitive Biases",
    tagline: "Mistakenly thinking past random outcomes affect future probabilities.",
    desc: "Coins, dice, and markets have no memory. After a streak, the odds don't 'owe' you a reversal — and the streak itself doesn't signal continuation. For a fair coin, it's 50/50 forever, no matter what just happened.",
    examples: ["'Red hit eight times — black is due' at the roulette table.", "Delaying an investment because 'a drop must come after this run.'"],
    trains: "processing", apply: "Ask: 'Is this process actually random?' If yes, ignore history completely — only the odds matter.",
    coined: "Daniel Kahneman & Amos Tversky, 1971", diff: 1, related: ["hindsight-bias", "sunk-cost"]
  },
  {
    slug: "sunk-cost", name: "Sunk Cost Fallacy", category: "Cognitive Biases",
    tagline: "Continuing an endeavor after investing resources, even when it's no longer worthwhile.",
    desc: "Money, time, and effort already spent are gone no matter what you choose next. Rational decisions weigh only future costs against future benefits — yet we finish bad books, bad relationships, and bad projects 'because we've come this far.'",
    examples: ["Finishing a terrible book you paid for — the money's gone either way.", "An extra year poured into a failing startup because of the two years already burned."],
    trains: "emotional", apply: "Ask: 'Knowing what I know now, would I start this today?' If no — that's your answer about tomorrow too.",
    coined: "Hal Arkes & Catherine Blumer, 1985", diff: 2, related: ["gamblers-fallacy", "endowment-effect", "diminishing-returns"]
  },
  {
    slug: "recency-bias", name: "Recency Bias", category: "Cognitive Biases",
    tagline: "Giving recent events more weight than past ones.",
    desc: "The last quarter, the last argument, and the last news cycle feel most important simply because they're freshest. Loud endings drown long trends, and judgments swing with whatever happened last week.",
    examples: ["Panic-selling stocks because the last five sessions were red.", "Judging a strong year of work by one bad week."],
    trains: "memory", apply: "Before judging a trend, zoom out deliberately: look at the longest window you have, not the loudest one.",
    coined: "Availability research — Tversky & Kahneman, 1973", diff: 1, related: ["hindsight-bias", "lindy-effect", "survivorship-bias"]
  },
  {
    slug: "hyperbolic-discounting", name: "Hyperbolic Discounting", category: "Cognitive Biases",
    tagline: "Preferring smaller immediate rewards over larger delayed ones.",
    desc: "Rewards lose value steeply as they move into the future: $50 today feels much bigger than $75 next month, even when waiting is clearly better. This is the engine of procrastination, credit-card debt, and skipped workouts.",
    examples: ["Tonight's binge-watch beats next month's finished course — somehow, every night.", "'One more scroll' beating sleep, every single evening."],
    trains: "grit", apply: "Pre-commit: make the future reward concrete and visible now — a photo of the goal, an automatic transfer, a public deadline.",
    coined: "Richard Herrnstein, 1961; George Ainslie, 1975", diff: 2, related: ["premacks-principle", "goldilocks-rule"]
  },
  {
    slug: "endowment-effect", name: "Endowment Effect", category: "Cognitive Biases",
    tagline: "Valuing things you own more than you would if you didn't own them.",
    desc: "Ownership itself adds a premium: people demand more to give something up than they'd ever pay to acquire it. The bias distorts selling prices, negotiations, and closets alike.",
    examples: ["Listing a used laptop at near-new price 'because it's mine.'", "Holding family stock long past any rational exit point."],
    trains: "emotional", apply: "Ask: 'What would I pay for this today, in cash, at a store?' That number is its true value to you.",
    coined: "Richard Thaler, 1980", diff: 2, related: ["sunk-cost", "scarcity", "diderot-effect"]
  },
  {
    slug: "survivorship-bias", name: "Survivorship Bias", category: "Cognitive Biases",
    tagline: "Focusing on what survived while overlooking what didn't, leading to over-optimism.",
    desc: "The visible winners write the stories; the invisible losers are silent. Any analysis that only sees survivors — dropouts who got rich, old buildings, successful startups — wildly overstates the odds of success.",
    examples: ["'College dropouts became billionaires' — ignoring the millions who dropped out and didn't.", "Old buildings feel solidly built — the flimsy ones already fell down."],
    trains: "learning", apply: "Before copying a winner, ask: 'Where are the failures? Who is missing from this dataset?'",
    coined: "Famous via Abraham Wald's WWII armor analysis", diff: 2, related: ["recency-bias", "social-proof", "hindsight-bias"]
  },
  {
    slug: "social-proof", name: "Social Proof", category: "Social Dynamics & Influence",
    tagline: "Copying others' behavior, especially under uncertainty.",
    desc: "When unsure, humans outsource the answer to the crowd: full restaurants, best-seller lists, laughter tracks, five stars. It's usually a smart shortcut — and occasionally catastrophically wrong, because crowds can be silently wrong together.",
    examples: ["Choosing the busier food stall at a street market.", "Buying the 'most popular' option without checking a single spec."],
    trains: "social", apply: "Treat popularity as one data point, not the verdict. Ask whether the crowd knows something — or just copy-pasted each other.",
    coined: "Robert Cialdini, 1984", diff: 1, related: ["reciprocity", "survivorship-bias"]
  },
  {
    slug: "reciprocity", name: "Reciprocity", category: "Social Dynamics & Influence",
    tagline: "Feeling obligated to repay favors or gifts, even unwanted ones.",
    desc: "A gift starts a debt meter running in the receiver's head. Used honestly it builds trust cycles between people; exploited, it's the backbone of free samples, 'free' workshops, and favor-trading politics.",
    examples: ["A free sample that ends in a purchase you didn't plan.", "A complimentary workshop that funnels into a $2,000 course."],
    trains: "social", apply: "Receive genuinely, then decide consciously if and how to repay — never on autopilot. And give first when you want trust.",
    coined: "Robert Cialdini, 1984; Alvin Gouldner, 1960", diff: 1, related: ["social-proof", "scarcity"]
  },
  {
    slug: "scarcity", name: "Scarcity", category: "Social Dynamics & Influence",
    tagline: "Valuing rare things more and abundant things less.",
    desc: "Scarce feels valuable even when nothing else has changed. Deadlines, limited runs, 'only 3 left' and exclusivity all pull the same lever — which is exactly why manufactured urgency deserves suspicion.",
    examples: ["'Only 3 left in stock' — on a product that restocks weekly.", "Limited-edition drops that sell out in minutes at triple the price."],
    trains: "emotional", apply: "When you feel urgency, wait 24 hours. Manufactured scarcity evaporates; real value survives the night.",
    coined: "Robert Cialdini, 1984", diff: 1, related: ["social-proof", "endowment-effect", "diderot-effect"]
  },
  {
    slug: "pareto", name: "Pareto Principle", category: "Decision-Making & Productivity",
    tagline: "Roughly 80% of effects come from 20% of causes.",
    desc: "Inputs are not equal: a small slice of causes produces most of the results. Finding your 20% — the customers, bugs, features, or study topics that matter — is the single highest-leverage question in work, study, and health.",
    examples: ["20% of customers generating 80% of revenue.", "20% of code causing 80% of crashes."],
    trains: "learning", apply: "List your tasks, circle the few that will still matter in six months, and do those first — every day.",
    coined: "Vilfredo Pareto, 1896; named by Joseph Juran, 1941", diff: 1, related: ["diminishing-returns", "goodharts-law", "parkinsons-law"]
  },
  {
    slug: "goodharts-law", name: "Goodhart's Law", category: "Decision-Making & Productivity",
    tagline: "When a measure becomes a target, it ceases to be a good measure.",
    desc: "People optimize the metric, not the meaning behind it. The moment a number becomes a goal, it starts drifting away from the reality it was supposed to represent — call quotas make short useless calls, and teaching to the test teaches nothing else.",
    examples: ["Call-center handle-time targets producing hang-ups.", "Step counters gamed by shaking the phone."],
    trains: "learning", apply: "Track 2–3 measures, then audit reality directly with spot-checks — talk to customers, read the code, watch the user.",
    coined: "Charles Goodhart, 1975", diff: 2, related: ["map-territory", "pareto"]
  },
  {
    slug: "diminishing-returns", name: "Diminishing Returns", category: "Decision-Making & Productivity",
    tagline: "Increasing one input while holding others fixed eventually yields less value.",
    desc: "Output rises with input, then flattens, then can even reverse. When more effort stops producing results, the limiting factor is almost never the thing you're adding more of — it's something else entirely.",
    examples: ["The 8th hour of studying adds a fraction of the 1st.", "The 5th cup of coffee: all jitters, no code."],
    trains: "processing", apply: "When progress stalls, stop adding volume. Find the actual bottleneck — sleep, technique, feedback — and fix that.",
    coined: "Anne Robert Jacques Turgot, 1767", diff: 1, related: ["pareto", "goldilocks-rule", "sunk-cost"]
  },
  {
    slug: "parkinsons-law", name: "Parkinson's Law", category: "Decision-Making & Productivity",
    tagline: "Work expands to fill the time available for its completion.",
    desc: "Deadlines set the pace, not the work. Give a task a week and it takes a week; give it two focused hours and it takes two hours. Artificial time-scarcity forces prioritization and cuts perfectionist padding.",
    examples: ["A report that took a week when given a week — and a day when given a day.", "Replying to emails within a 20-minute window versus grazing all day."],
    trains: "focus", apply: "Halve your estimate for a task, defend the deadline, and watch what was actually essential all along.",
    coined: "C. Northcote Parkinson, 1955", diff: 1, related: ["pareto", "premacks-principle"]
  },
  {
    slug: "premacks-principle", name: "Premack's Principle", category: "Behavior & Motivation",
    tagline: "Using desirable activities to reinforce less desirable behaviors.",
    desc: "High-probability behaviors are rewards for low-probability ones. It's 'eat your vegetables, then dessert' — self-administered. The favorite activity becomes the paycheque for the hard one.",
    examples: ["Netflix only after the gym.", "Favorite podcast only while doing dishes."],
    trains: "grit", apply: "Write a first-then contract each morning: the fun thing unlocks only after the hard thing, same day, no credit.",
    coined: "David Premack, 1965", diff: 1, related: ["hyperbolic-discounting", "parkinsons-law", "goldilocks-rule"]
  },
  {
    slug: "goldilocks-rule", name: "Goldilocks Rule", category: "Behavior & Motivation",
    tagline: "Motivation peaks when tasks are neither too hard nor too easy.",
    desc: "Too easy produces boredom; too hard produces anxiety; the edge of your ability produces flow. Tasks sitting just beyond current capability — roughly 4% harder — are where engagement and growth both live.",
    examples: ["Beginners quitting chess against strong bots; masters bored by easy puzzles.", "Games keeping you at the exact edge of your skill, level after level."],
    trains: "grit", apply: "Bored? Add difficulty. Anxious? Shrink the task until it's 15 achievable minutes. Find the edge and train there.",
    coined: "Named by James Clear; flow research by Mihaly Csikszentmihalyi", diff: 1, related: ["diminishing-returns", "premacks-principle"]
  },
  {
    slug: "illeism", name: "Illeism (Third-Person Thinking)", category: "Behavior & Motivation",
    tagline: "Self-referring in the third person creates psychological distance and objectivity.",
    desc: "Using your own name in self-talk — 'why did Sam skip the gym?' — flips perspective from emotionally immersed to coach-like. It's a one-word change with a measurable effect on regulation and decision quality under stress.",
    examples: ["Athletes coaching themselves by name mid-game.", "Caesar and Napoleon writing about themselves in the third person — accidentally or not."],
    trains: "emotional", apply: "In a heated moment, narrate in third person: 'Okay — what's the smart move for her/him here?'",
    coined: "Researched by Ethan Kross, 2014", diff: 1, related: ["hanlons-razor", "hyperbolic-discounting"]
  },
  {
    slug: "zeigarnik", name: "Zeigarnik Effect", category: "Behavior & Motivation",
    tagline: "Unfinished tasks are remembered better than completed ones.",
    desc: "Incomplete tasks keep loops open in memory, quietly hijacking attention — that's cliffhangers, that's the tab you can't close, that's the 2 a.m. mental nagging. The loop can be closed by a plan, not only by finishing.",
    examples: ["Waiters remembering unpaid orders perfectly — then forgetting them the moment the bill clears.", "An unfinished report intruding on your entire weekend."],
    trains: "memory", apply: "Park open loops with a next concrete step and a when. Written down, the mind finally lets go.",
    coined: "Bluma Zeigarnik, 1927", diff: 1, related: ["parkinsons-law", "hindsight-bias"]
  },
  {
    slug: "diderot-effect", name: "Diderot Effect", category: "Everyday Effects",
    tagline: "Acquiring something new sparks purchases of complementary items you otherwise wouldn't buy.",
    desc: "New possessions make old ones look shabby, and consumption cascades. Diderot got one scarlet dressing gown, suddenly despised everything he owned, and replaced it all — the original upgrade spiral.",
    examples: ["New sofa → new rug → repaint → full renovation spiral.", "First designer item → an entire wardrobe overhaul."],
    trains: "emotional", apply: "Before any upgrade, ask: 'What will this force me to replace next?' Budget the total, not the item.",
    coined: "Denis Diderot's 1769 essay; named by Grant McCracken, 1988", diff: 1, related: ["endowment-effect", "scarcity"]
  },
  {
    slug: "lindy-effect", name: "Lindy Effect", category: "Everyday Effects",
    tagline: "Non-perishable things that have endured are likely to endure longer.",
    desc: "For ideas, books, and technologies — things that don't wear out — every year of survival predicts a longer remaining life. A 2,000-year-old text will likely outlive a trending app; time is the only critic without a conflict of interest.",
    examples: ["Old proverbs still working; last quarter's viral framework, already forgotten.", "Roman bridges still standing; 'revolutionary' gadgets, landfill."],
    trains: "learning", apply: "When choosing what to learn, weight classics over bestsellers. Old ideas are pre-screened by centuries of stress-testing.",
    coined: "Named by Nassim Taleb, 2012", diff: 2, related: ["survivorship-bias", "recency-bias"]
  },
  {
    slug: "second-order-thinking", name: "Second-Order Thinking", category: "Reasoning & Problem-Solving",
    tagline: "Considering the consequences of the consequences.",
    desc: "First-order thinking answers the question in front of you; second-order thinking asks 'and then what?' Most bad decisions look brilliant at first order — the costs arrive later, in the second and third waves that nobody priced in.",
    examples: ["Cutting prices wins this quarter — and starts a price war that eats next year.", "The new tool saves an hour a week — and quietly costs three hours a month in maintenance."],
    trains: "processing", apply: "For any significant decision, write 'and then what?' three times and follow each answer before committing.",
    coined: "Howard Marks, Oaktree memos, 1990s", diff: 2, related: ["first-principles", "thought-experiment", "inversion"]
  },
  {
    slug: "inversion", name: "Inversion", category: "Reasoning & Problem-Solving",
    tagline: "Solve problems backwards: ask what would guarantee failure, then avoid that.",
    desc: "Instead of asking how to succeed, ask how you would make this project certainly fail — then systematically don't do those things. Avoiding stupidity is easier and more reliable than seeking brilliance, because failure modes are easier to enumerate than successes.",
    examples: ["'How would I guarantee this launch dies?' — no feedback loop, silent users, scope creep. Fix those first.", "Want a good marriage? List what destroys marriages, then never do it."],
    trains: "processing", apply: "Before finalizing a plan, list the top five ways it could fail and design a specific prevention for each.",
    coined: "Carl Gustav Jacobi; popularized by Charlie Munger", diff: 2, related: ["second-order-thinking", "root-causes"]
  },
  {
    slug: "circle-of-competence", name: "Circle of Competence", category: "Decision-Making & Productivity",
    tagline: "Know the edge of what you actually understand, and act inside it.",
    desc: "You don't need to be an expert at everything — you need to know exactly where your expertise ends. Inside the circle you can act decisively on information others misread; outside it, you're the one being read. The circle itself is expandable, but only through deliberate learning.",
    examples: ["Buffett passing on tech for decades because he couldn't value it — then buying Apple once he could.", "Trading in companies you couldn't explain to a twelve-year-old."],
    trains: "learning", apply: "Write down three areas you genuinely understand. Default to decisions inside them; outside, either study first or explicitly defer.",
    coined: "Warren Buffett & Charlie Munger, 1996", diff: 2, related: ["dunning-kruger", "first-principles"]
  },
  {
    slug: "opportunity-cost", name: "Opportunity Cost", category: "Decision-Making & Productivity",
    tagline: "Every yes is a thousand nos — the real cost of anything is what you give up to get it.",
    desc: "Time, money, and attention spent here cannot be spent anywhere else. Rational choices compare options against each other, not against nothing — but 'nothing' is exactly the comparison your brain defaults to, which is how calendars fill with obligations that were never really chosen.",
    examples: ["A 'free' conference that consumes your only free Saturday of the month.", "A comfortable salary that quietly blocks the skill-building year you actually need."],
    trains: "learning", apply: "For any new commitment, ask: 'What's the best alternative use of these hours?' Compare against that, never against zero.",
    coined: "Frédéric Bastiat, 'What Is Seen and What Is Not Seen', 1848", diff: 1, related: ["pareto", "premacks-principle", "compounding"]
  },
  {
    slug: "compounding", name: "Compounding", category: "Decision-Making & Productivity",
    tagline: "Small consistent gains multiply rather than add.",
    desc: "Growth upon growth: one percent better daily is roughly 37× in a year. The catch is that the early curve looks flat — embarrassingly flat — so most people quit before the knee of the curve ever arrives. Time in the game beats intensity.",
    examples: ["Index funds beating most active traders simply by staying in the market.", "Twenty minutes of daily writing producing three finished books over five years."],
    trains: "grit", apply: "Choose one action small enough to do daily forever. Track the streak, not the outcome — the outcome compounds later.",
    coined: "Albert Bartlett's arithmetic lectures; investing canon via Buffett", diff: 1, related: ["hyperbolic-discounting", "goldilocks-rule", "premacks-principle"]
  },
  {
    slug: "margin-of-safety", name: "Margin of Safety", category: "Decision-Making & Productivity",
    tagline: "Leave room to be wrong — build bridges three times stronger than needed.",
    desc: "The world is noisier than any model of it. Margin of safety means doing fine across a whole range of outcomes, not just the expected one. You only need to be roughly right if the downside can't take you out of the game.",
    examples: ["Booking the connecting flight three hours apart, not forty minutes.", "Six months of expenses saved instead of six weeks."],
    trains: "grit", apply: "For any one-way-door decision, ask 'what if I'm 50% wrong?' and size the commitment so the answer is survivable.",
    coined: "Benjamin Graham, The Intelligent Investor, 1949", diff: 2, related: ["thought-experiment", "opportunity-cost", "diminishing-returns"]
  },
  {
    slug: "loss-aversion", name: "Loss Aversion", category: "Cognitive Biases",
    tagline: "Losses hurt roughly twice as much as equivalent gains feel good.",
    desc: "Losing $100 stings about double the pleasure of winning $100. It makes people hold losing stocks, refuse favorable bets, and cling to what they have — the engine behind endowment effects, 'free trial' marketing, and terrible poker.",
    examples: ["Refusing to sell a falling stock because realizing the loss 'makes it real'.", "Turning down a clearly favorable bet because the possible loss looms twice as large."],
    trains: "emotional", apply: "When declining a reasonable risk, write both sides on paper and deliberately double the loss column's weight — then decide if it still says no.",
    coined: "Daniel Kahneman & Amos Tversky, Prospect Theory, 1979", diff: 2, related: ["endowment-effect", "sunk-cost", "scarcity", "status-quo-bias"]
  },
  {
    slug: "anchoring", name: "Anchoring", category: "Cognitive Biases",
    tagline: "The first number you see drags every later judgment toward it.",
    desc: "Initial values anchor estimates even when they're arbitrary or obviously irrelevant. Negotiations, prices, and predictions all bend toward whatever number arrived first — which is why the person who speaks first often sets the range everyone else negotiates within.",
    examples: ["'$2,000, now $899' feels like a steal against an anchor that was never real.", "A salary discussion opened at a low number stays low, no matter the qualifications."],
    trains: "processing", apply: "Before checking a price or making an estimate, write your own number down first. In negotiations, consider opening — anchored high is better than anchored.",
    coined: "Amos Tversky & Daniel Kahneman, 1974", diff: 2, related: ["loss-aversion", "scarcity", "recency-bias"]
  },
  {
    slug: "availability-bias", name: "Availability Bias", category: "Cognitive Biases",
    tagline: "Judging likelihood by how easily examples come to mind.",
    desc: "Vivid, recent, emotional events feel probable; boring statistical realities feel abstract. The mind substitutes 'how easily can I recall examples?' for 'how often does this actually happen?' — and gets the answer badly wrong.",
    examples: ["Fearing shark attacks more than heart disease. The drive to the airport is the dangerous part.", "Assuming 'everyone' believes something because your feed repeats it five times a day."],
    trains: "memory", apply: "Before judging how common something is, ask: 'Do I have actual numbers, or just memorable examples?' Then go find the base rate.",
    coined: "Amos Tversky & Daniel Kahneman, 1973", diff: 1, related: ["recency-bias", "survivorship-bias", "social-proof"]
  },
  {
    slug: "dunning-kruger", name: "Dunning-Kruger Effect", category: "Cognitive Biases",
    tagline: "The less skill you have, the less ability you have to see your lack of skill.",
    desc: "Competence includes the meta-skill of judging competence. Beginners can't yet spot their own errors, so confidence peaks absurdly early; experts know all the failure modes, so their confidence dips and only climbs back with genuine ability. The most dangerous place is right after week one.",
    examples: ["One week of coding tutorials and 'I'm basically a full-stack developer.'", "The confident intern explaining strategy to the skeptical VP of fifteen years."],
    trains: "learning", apply: "For any skill you've practiced under a year, assume your confidence is miscalibrated high. Get feedback from people who can see errors you can't.",
    coined: "David Dunning & Justin Kruger, 1999", diff: 2, related: ["circle-of-competence", "confirmation-bias"]
  },
  {
    slug: "status-quo-bias", name: "Status Quo Bias", category: "Cognitive Biases",
    tagline: "Preferring the current state just because it's current.",
    desc: "Change feels risky even when the status quo is demonstrably worse. The default option quietly wins most decisions — not because it was chosen, but because it was never questioned. Companies fight to be the default for exactly this reason.",
    examples: ["Staying with an overpriced provider because switching costs one afternoon and one form.", "'We've always done it this way' offered as if it were an argument."],
    trains: "grit", apply: "List your important defaults — bank, tools, habits. Re-justify one per month from scratch, as if choosing for the first time.",
    coined: "William Samuelson & Richard Zeckhauser, 1988", diff: 1, related: ["sunk-cost", "endowment-effect", "diderot-effect", "loss-aversion"]
  },
  {
    slug: "peak-end-rule", name: "Peak-End Rule", category: "Cognitive Biases",
    tagline: "Memories judge experiences by their peak moment and their ending — not the average.",
    desc: "You don't remember experiences as continuous recordings. You remember the most intense moment and how it ended; long pleasant middles evaporate. Since decisions are made from memories, endings matter out of all proportion to their duration.",
    examples: ["A vacation remembered by one perfect day and the lost luggage at the end.", "An exam that ends on an easy question feeling better than an identical exam ending badly."],
    trains: "memory", apply: "Design endings deliberately: end work sessions on a small win, end hard conversations with warmth, end trips on a high note.",
    coined: "Daniel Kahneman & Barbara Fredrickson, 1993", diff: 1, related: ["zeigarnik", "recency-bias", "hindsight-bias"]
  },
  {
    slug: "mere-exposure", name: "Mere Exposure Effect", category: "Social Dynamics & Influence",
    tagline: "Familiarity alone breeds liking.",
    desc: "Repeated exposure to something — a face, a song, a logo — increases liking before any judgment of quality happens. It's why advertising is repetition rather than argument, and why simply showing up, again and again, beats trying to impress.",
    examples: ["A song you hated growing on you by the eighth listen.", "The colleague who became a close friend purely through years of proximity."],
    trains: "social", apply: "When building trust or an audience, choose consistent presence over grand gestures. Frequency beats intensity.",
    coined: "Robert Zajonc, 1968", diff: 1, related: ["social-proof", "reciprocity"]
  },
  {
    slug: "hofstadters-law", name: "Hofstadter's Law", category: "Decision-Making & Productivity",
    tagline: "It always takes longer than you expect — even when you take this law into account.",
    desc: "The planning fallacy with a self-referential twist: humans estimate best-case scenarios while executing in a world of interruptions, and even correcting for that optimism somehow isn't enough. The fix isn't willpower-boosted estimates — it's buffers and measured base rates.",
    examples: ["The 'two-week' side project at month four.", "Every home renovation in recorded history."],
    trains: "processing", apply: "Estimate from how long similar tasks actually took you — the base rate — then add 50% and defend the buffer like a deadline.",
    coined: "Douglas Hofstadter, Gödel, Escher, Bach, 1979", diff: 1, related: ["parkinsons-law", "pareto", "second-order-thinking"]
  }
];

/* ---------- weekly split ---------- */
const SPLIT = [
  {
    day: "Mon", name: "Focus Day", group: "focus", kind: "train",
    sessions: [
      { label: "Warm-up", item: "Anchor Breath Focus — 5–10 min before the first block" },
      { label: "Main set", item: "Task Timer Sprints — 4–6 blocks of 25–50 min, one task each" },
      { label: "All day", item: "Distraction Logging — write urges down, don't act on them" },
      { label: "Finisher", item: "Interruption Recovery Drill — 5 interruptions, refocus in under 5 s" }
    ],
    note: "Phone in a drawer, notifications off. This is the heavy day for attention — protect it like a gym slot."
  },
  {
    day: "Tue", name: "Memory Day", group: "memory", kind: "train",
    sessions: [
      { label: "Main set", item: "Spaced Repetition — 10–15 min of due reviews" },
      { label: "Main set", item: "Active Recall — 15–20 min on current material, book closed" },
      { label: "Technique", item: "Memory Palace walk — 5–10 min through one familiar route" },
      { label: "Before bed", item: "10-min review of today's hardest material, then sleep" }
    ],
    note: "Retrieval is the rep; rereading is resting between sets. If it feels easy, you're probably not training."
  },
  {
    day: "Wed", name: "Processing Day", group: "processing", kind: "train",
    sessions: [
      { label: "Main set", item: "Mental Math Acceleration — 10–15 min, errors under 2%" },
      { label: "Main set", item: "Pattern Recognition Drills — 10–20 min, timed" },
      { label: "Circuit", item: "Information Filtering — 5 rounds of 5 facts from a page in 30 s" },
      { label: "Cooldown", item: "Physiological Sigh × 3, eyes closed for 2 min" }
    ],
    note: "Speed work is quality work — stop the session when accuracy drops, not when the clock says so."
  },
  {
    day: "Thu", name: "Active Recovery", group: null, kind: "recover",
    sessions: [
      { label: "Morning", item: "Physiological Sigh × 3, then a slow 15–30 min walk reviewing yesterday" },
      { label: "Light drill", item: "Emotion Labeling — just name what you feel, all day, no drills" },
      { label: "Optional", item: "10-min body-scan meditation" }
    ],
    note: "Consolidation day: memory strengthens while you rest, not while you grind. Take the day off guilt-free."
  },
  {
    day: "Fri", name: "Emotional Control", group: "emotional", kind: "train",
    sessions: [
      { label: "Main set", item: "Emotion Labeling — aim to name each emotion within 3 s of onset" },
      { label: "Main set", item: "Cognitive Reappraisal — 10 min reframing one real event" },
      { label: "Technique", item: "Somatic Tracking — 3 body scans of 2–3 min, breathe into the spot" },
      { label: "Finisher", item: "Wave Riding — one urge observed for 90 s without acting" }
    ],
    note: "Use the day's real emotions as the barbell. The meeting that annoys you is today's equipment."
  },
  {
    day: "Sat", name: "Social + Grit", group: "grit", kind: "train",
    sessions: [
      { label: "Social set", item: "One real conversation: Curiosity Questioning + Active Listening Validation" },
      { label: "Grit set", item: "Cold Exposure — end the shower cold, 30 s → 3 min progression" },
      { label: "Grit set", item: "Deliberate Discomfort — one uncomfortable task, zero complaints" },
      { label: "Technique", item: "Mirroring & Pacing in one conversation, then note what changed" }
    ],
    note: "The double day — like legs plus back. Social reps in the morning when fresh, cold in the evening when tough."
  },
  {
    day: "Sun", name: "Rest & Review", group: null, kind: "rest",
    sessions: [
      { label: "Review", item: "15 min: what worked this week? What gets more volume next week?" },
      { label: "Plan", item: "10 min: schedule next week's training blocks into the calendar" },
      { label: "Rule", item: "No drills today. Sleep in. Sleep is the other half of the workout." }
    ],
    note: "Programmers call it a maintenance window. Brains call it Sunday."
  }
];

/* ---------- 12 laws ---------- */
const LAWS = [
  { name: "Stress plus recovery equals growth", text: "Structured mental stress followed by recovery is what builds lasting cognitive upgrades — identical to muscle. No stress, no growth; no recovery, no growth either." },
  { name: "Train the whole athlete", text: "Mind training multiplies physical performance when they're combined, not isolated. Attention drills make better workouts; workouts make better attention." },
  { name: "Progressive overload", text: "Grow complexity, speed, and interference step by step. If a drill always feels comfortable, you're maintaining, not building." },
  { name: "Practice like you play", text: "Learn and recall in the state you'll perform in. Studying calmly for a pressure-filled exam trains the wrong state." },
  { name: "Master form first", text: "Reduce subjects to first principles before adding fancy techniques. Bad form under heavy weight is how minds get injured." },
  { name: "Shape the frame, don't force the person", text: "Set the perception — the terms, the stakes, the story — before pushing your point. Framing beats forcing." },
  { name: "Patterns beat memorization", text: "Pattern recognition outperforms raw recall. Build libraries of shapes — situations, signals, structures — not just facts." },
  { name: "Use influence ethically", text: "Influence through alignment, not deception. Manipulation works once; trust compounds forever." },
  { name: "Build an operating system", text: "Learn how you learn. A meta-cognitive layer — knowing your own attention, memory, and moods — upgrades every other skill." },
  { name: "Words shape reality", text: "Linguistic precision shapes thought. 'I failed' and 'that attempt failed' build different brains." },
  { name: "Physiology sets the ceiling", text: "Sleep, breath, food, and the nervous system define the ceiling no technique can exceed. Fix the body first when the mind won't cooperate." },
  { name: "Environment beats willpower", text: "Design your spaces — phone in another room, book on the pillow. Spatial design wins against willpower nearly every time." }
];

/* ---------- progression ---------- */
const PROGRESSION = [
  { lift: "Focus session length", scheme: "add ~10% per week", from: "25 min", to: "50 min" },
  { lift: "Chunk size (memory)", scheme: "step up when easy", from: "3 items", to: "5 → 7 items" },
  { lift: "Refocus after interruption", scheme: "cut the time", from: "30 s", to: "5 s" },
  { lift: "Cold exposure", scheme: "escalate weekly", from: "30 s", to: "1 → 2 → 3 min" },
  { lift: "Emotional recovery time", scheme: "cut the time", from: "2 hours", to: "20 minutes" },
  { lift: "Recall speed (15-item list)", scheme: "beat your time weekly", from: "untimed", to: "under 60 s" },
  { lift: "Deload rule", scheme: "stress load above 8/10 → mandatory rest day", from: "—", to: "—" }
];
