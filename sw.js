// Minimal service worker — exists only to satisfy PWA installability
// requirements (Chrome/Android requires a registered service worker with
// a fetch handler before it will offer the install prompt). The app
// handles its own offline caching at the application level (localStorage),
// so this worker intentionally does not cache or intercept anything.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // pass-through: let the network handle every request normally
});
