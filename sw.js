// Minimal service worker for the Vynix landing page (vynix.co.za).
// This origin only hosts the marketing site + install shortcut — the real
// messenger app (somethingmade.github.io/network/) has its own separate
// service worker that takes over once the installed app launches there.
// This file exists purely so Chrome/Edge/Android consider vynix.co.za
// "installable" (a registered SW with a fetch handler is part of that check).

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Pass-through — no caching needed, this origin is just a launcher.
    event.respondWith(fetch(event.request));
});
