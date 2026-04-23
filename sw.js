// sw.js — Service Worker do Heróis da Fé (Supabase) — versão corrigida

const CACHE_NAME = 'herois-da-fe-v11.3';
const CACHE_ESTATICO = 'herois-estatico-v11.3';

const SHELL = [
    '/',
    '/index.html',
    '/404.html',
    '/manifest.json',
    '/css/style.css',
    '/js/config.js',
    '/js/auth.js',
    '/js/reset-password.js',
    '/js/bible.js',
    '/js/game.js',
    '/js/ui.js',
    '/js/social.js',
    '/js/chat.js',
    '/js/push-open.js',
    '/js/badges.js',
    '/js/stats.js',
    '/js/challenges.js',
    '/js/duel.js',
    '/js/cropper.js',
];

// Supabase — nunca cachear
const NUNCA_CACHEAR = [
    'supabase.co',
    'supabase.in',
    'supabase.io',
];

// JS/HTML do app — sempre preferir rede
function isAppCode(url) {
    return (
        url.pathname === '/' ||
        url.pathname.endsWith('/index.html') ||
        url.pathname.endsWith('/404.html') ||
        url.pathname.endsWith('.html') ||
        url.pathname.endsWith('.js') ||
        url.pathname.endsWith('.json')
    );
}

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(SHELL))
            .catch((err) => {
                console.warn('[SW] Alguns arquivos do shell não foram cacheados:', err);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME && key !== CACHE_ESTATICO) {
                        return caches.delete(key);
                    }
                    return Promise.resolve(false);
                })
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;

    if (req.method !== 'GET') return;

    const url = new URL(req.url);

    // Supabase nunca entra em cache
    const ehSupabase = NUNCA_CACHEAR.some((d) => url.hostname.includes(d));
    if (ehSupabase) {
        event.respondWith(fetch(req));
        return;
    }

    // Código do app: rede primeiro, cache só como fallback
    if (isAppCode(url)) {
        event.respondWith(networkFirst(req, CACHE_NAME));
        return;
    }

    // Fonts/CDN/imagens: cache first
    if (
        url.hostname.includes('fonts.googleapis.com') ||
        url.hostname.includes('fonts.gstatic.com') ||
        url.hostname.includes('cdn.jsdelivr.net') ||
        url.hostname.includes('cdnjs.cloudflare.com') ||
        url.hostname.includes('esm.sh')
    ) {
        event.respondWith(cacheFirst(req, CACHE_ESTATICO));
        return;
    }

    if (url.pathname.includes('/imagens/')) {
        event.respondWith(cacheFirst(req, CACHE_ESTATICO));
        return;
    }

    event.respondWith(networkFirst(req, CACHE_NAME));
});

async function networkFirst(request, cacheName = CACHE_NAME) {
    try {
        const response = await fetch(request);

        if (response && response.ok && response.type !== 'opaque') {
            const cache = await caches.open(cacheName);
            await cache.put(request, response.clone());
        }

        return response;
    } catch (err) {
        const cached = await caches.match(request);
        if (cached) return cached;

        if (request.mode === 'navigate') {
            return (await caches.match('/index.html')) || Response.error();
        }

        return Response.error();
    }
}

async function cacheFirst(request, cacheName = CACHE_ESTATICO) {
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
        const response = await fetch(request);

        if (response && response.ok) {
            const cache = await caches.open(cacheName);
            await cache.put(request, response.clone());
        }

        return response;
    } catch (err) {
        return new Response('Sem conexão', { status: 503 });
    }
}

self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data === 'LIMPAR_CACHE') {
        event.waitUntil(
            caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
        );
    }
});

self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const titulo = data.titulo || 'Heróis da Fé';
    const opcoes = {
        body: data.mensagem || 'Nova atualização na sua jornada!',
        icon: '/imagens/icon-192.png',
        badge: '/imagens/icon-72.png',
        vibrate: [200, 100, 200],
        data: { url: data.url || 'https://www.heroisdafe.app.br/' },
        actions: [
            { action: 'abrir', title: '⚔️ Abrir App' },
            { action: 'fechar', title: 'Fechar' }
        ]
    };

    event.waitUntil(self.registration.showNotification(titulo, opcoes));
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'fechar') return;

    const url = event.notification.data?.url || 'https://www.heroisdafe.app.br/';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
            // Se o app já está aberto em alguma aba, foca e navega para a URL correta
            for (const client of windowClients) {
                const clientUrl = new URL(client.url);
                const targetUrl = new URL(url);
                if (clientUrl.origin === targetUrl.origin) {
                    client.navigate(url);
                    return client.focus();
                }
            }
            // Nenhuma aba aberta — abre uma nova
            return clients.openWindow(url);
        })
    );
});

console.log('[SW] Heróis da Fé v11.0 ativo!');