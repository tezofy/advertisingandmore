const CACHE_NAME = 'advertising-and-more-careers-v1';
const CORE_ASSETS = [
  './job-vacancy-page.html',
  './manifest.webmanifest',
  './app-icon-192.png',
  './app-icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .catch(() => undefined)
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isCareersAsset = CORE_ASSETS.some((asset) => url.pathname.endsWith(asset.replace('./', '/')));
  if (!isCareersAsset && event.request.mode !== 'navigate') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.ok && isCareersAsset) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        if (event.request.mode === 'navigate') {
          const fallback = await caches.match('./job-vacancy-page.html');
          if (fallback) return fallback;
        }
        throw new Error('Offline and no cached response is available.');
      })
  );
});
