/* The Mind Gym — offline-first service worker */
const VERSION = "mindgym-v3";
const CORE = [
  "./",
  "./index.html",
  "./models.html",
  "./gym.html",
  "./program.html",
  "./database.html",
  "./anatomy.html",
  "./games.html",
  "./about.html",
  "./styles.css",
  "./data.js",
  "./shared.js",
  "./home.js",
  "./models.js",
  "./gym.js",
  "./program.js",
  "./database.js",
  "./anatomy.js",
  "./games.js",
  "./db-domain.js",
  "./database/db-catalog.js",
  "./icon.svg",
  "./manifest.webmanifest",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  /* Google Fonts pass through with cache fallback */
  if (e.request.url.includes("fonts.googleapis.com") || e.request.url.includes("fonts.gstatic.com")) {
    e.respondWith(
      caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(e.request, copy));
        return res;
      }).catch(() => hit))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) =>
      hit ||
      fetch(e.request).then((res) => {
        if (res.ok && e.request.url.startsWith(self.location.origin)) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(e.request, copy));
        }
        return res;
      }).catch(() =>
        caches.match("./index.html")
      )
    )
  );
});
