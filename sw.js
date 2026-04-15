const CACHE = 'herois-v6';
const APP_FILES = ['/', '/index.html', '/manifest.json', '/css/style.css', '/js/config.js', '/js/app-core.js', '/js/auth.js', '/js/bible.js', '/js/game.js', '/js/social.js', '/js/chat.js', '/js/badges.js', '/js/ui.js', '/js/stats.js', '/js/challenges.js', '/js/cropper.js', '/js/reset-password.js'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_FILES)).catch(() => null));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.hostname.includes('supabase')) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(fetch(event.request).then(r => {
    const copy = r.clone();
    caches.open(CACHE).then(c => c.put(event.request, copy));
    return r;
  }).catch(() => caches.match(event.request)));
});
