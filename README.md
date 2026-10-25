# The Mind Gym 🧠🏋️

Train your brain like a muscle — a complete, static, no-tracking training system for your mind.

**Live site:** https://adineo-cmd.github.io/mindgym/

## What's inside

| Page | Contents |
|---|---|
| **Home** | Interactive brain map — tap a region to train it |
| **Models** | 41 mental models: what each is, real examples, how to apply it, which muscle it trains |
| **The Gym** | 7 brain "muscle groups" with 84 curated exercises, tiered Beginner → Advanced |
| **Anatomy** | 17 brain regions (cortex, hippocampus, amygdala, hypothalamus, medulla…), what each does and how to train it |
| **Games** | 27 free games, puzzles and tools — one set per muscle group |
| **Program** | 7-day training split, the 12 laws of cognitive mastery, progression & recovery |
| **Database** | The complete OmniMind library: 30 domains, 2,279 techniques, each with its own page |

## Features

- Fully static — no build step, no backend, no tracking
- Works offline (PWA + service worker), installable
- Dark mode, print-friendly program sheet, shareable model links
- Every exercise links to the brain region it trains and vice versa

## Sources

- Mental models adapted from [Mental Models Box](https://www.mentalmodelsbox.com/)
- Training system adapted from [OmniMind](https://adineo-cmd.github.io/personal/mind) by adineo

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Any static host works — the site uses relative paths throughout.
