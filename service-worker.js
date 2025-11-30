const CACHE_NAME = 'poiema-cache-v1';
const urlsToCache = [
    '/index.html',
    '/styles.css',
    '/script.js',
    // Add images path here if necessary
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    // 1. Ignore audio/video files so the browser handles range requests properly
    if (req.destination === 'audio' || req.destination === 'video') {
        return; // allow network to handle it
    }

    // 2. Normal caching for everything else
    event.respondWith(
        caches.match(req).then(response => {
            return response || fetch(req);
        })
    );
});


self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});