// sw.js — Service Worker do Heróis da Fé (Supabase)
// ═══════════════════════════════════════════════════════════

const CACHE_NAME    = 'herois-da-fe-v4';
const CACHE_ESTATICO = 'herois-estatico-v4';

const SHELL = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/config.js',
    '/js/auth.js',
    '/js/bible.js',
    '/js/game.js',
    '/js/ui.js',
    '/js/social.js',
    '/js/chat.js',
    '/js/badges.js',
    '/js/stats.js',
    '/js/cropper.js',
];

// Supabase — nunca cachear (tempo real)
const NUNCA_CACHEAR = [
    'supabase.co',
    'supabase.in',
    'supabase.io',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(SHELL).catch((err) => {
                console.warn('[SW] Alguns arquivos do shell não foram cacheados:', err);
            });
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((key) => key !== CACHE_NAME && key !== CACHE_ESTATICO)
                    .map((key) => { console.log('[SW] Deletando cache antigo:', key); return caches.delete(key); })
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const url = event.request.url;

    const ehSupabase = NUNCA_CACHEAR.some((d) => url.includes(d));
    if (ehSupabase) { event.respondWith(fetch(event.request)); return; }

    if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
        event.respondWith(cacheFirst(event.request, CACHE_ESTATICO)); return;
    }

    if (url.includes('cdn.jsdelivr.net') || url.includes('cdnjs.cloudflare.com') || url.includes('esm.sh')) {
        event.respondWith(cacheFirst(event.request, CACHE_ESTATICO)); return;
    }

    if (url.includes('/imagens/') && (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.webp'))) {
        event.respondWith(cacheFirst(event.request, CACHE_ESTATICO)); return;
    }

    event.respondWith(networkFirst(event.request));
});

async function networkFirst(request) {
    try {
        const resposta = await fetch(request);
        if (resposta && resposta.status === 200 && resposta.type !== 'opaque') {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, resposta.clone());
        }
        return resposta;
    } catch (err) {
        const cached = await caches.match(request);
        if (cached) return cached;
        return caches.match('/index.html');
    }
}

async function cacheFirst(request, cacheName = CACHE_NAME) {
    const cached = await caches.match(request);
    if (cached) {
        fetch(request).then((resposta) => {
            if (resposta && resposta.status === 200) {
                caches.open(cacheName).then((cache) => cache.put(request, resposta));
            }
        }).catch(() => {});
        return cached;
    }
    try {
        const resposta = await fetch(request);
        if (resposta && resposta.status === 200) {
            const cache = await caches.open(cacheName);
            cache.put(request, resposta.clone());
        }
        return resposta;
    } catch (err) {
        return new Response('Sem conexão', { status: 503 });
    }
}

self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') self.skipWaiting();
    if (event.data === 'LIMPAR_CACHE') caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))));
});

self.addEventListener('push', (event) => {
    const data    = event.data ? event.data.json() : {};
    const titulo  = data.titulo || 'Heróis da Fé';
    const opcoes  = {
        body:    data.mensagem || 'Nova atualização na sua jornada!',
        icon:    '/imagens/icon-192.png',
        badge:   '/imagens/icon-72.png',
        vibrate: [200, 100, 200],
        data:    { url: data.url || 'https://www.heroisdafe.app.br/' },
        actions: [{ action: 'abrir', title: '⚔️ Abrir App' }, { action: 'fechar', title: 'Fechar' }]
    };
    event.waitUntil(self.registration.showNotification(titulo, opcoes));
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    if (event.action === 'abrir' || !event.action) {
        const url = event.notification.data?.url || 'https://www.heroisdafe.app.br/';
        event.waitUntil(clients.openWindow(url));
    }
});

console.log('[SW] Heróis da Fé v4 (Supabase) ativo!');
