const CACHE = "nep-v2";
const OFFLINE_URL = "/offline.html";
const PRECACHE = ["/", "/estimate", "/gallery", "/training", "/contact", "/manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(r => {
      const rc = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, rc));
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("/")))
  );
});